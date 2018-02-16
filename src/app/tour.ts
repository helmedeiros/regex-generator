export interface TourStep {
  title: string;
  body: string;
}

export const tourSteps: TourStep[] = [
  {
    title: "Sample",
    body:
      "In the first step we need an example, so please write or paste an example of the text you want to recognize with your regex."
  },
  {
    title: "Recognition",
    body:
      "Regex Generator will immediately analyze your text and suggest common patterns you may use."
  },
  {
    title: "Result",
    body:
      "... and we will generate a first regular expression for you. It should be able to match your input text."
  },
  {
    title: "Language snippets",
    body:
      "We will also generate snippets for some languages that show you, how to use the regular expression in your favourite language."
  }
];
