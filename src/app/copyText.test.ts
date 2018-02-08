import { copyText } from "./copyText";

describe("copyText", () => {
  it("copies through the document command", () => {
    const execCommand = jest.fn(() => true);
    document.execCommand = execCommand;
    const result = copyText("hello");
    expect(execCommand).toBeCalledWith("copy");
    expect(result).toBe(true);
  });

  it("cleans up the temporary textarea", () => {
    document.execCommand = jest.fn(() => true);
    copyText("hello");
    expect(document.querySelectorAll("textarea").length).toBe(0);
  });
});
