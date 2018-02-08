import * as React from "react";

export interface RegexOutputProps {
  regex: string;
  onCopy: () => void;
}

export function RegexOutput(props: RegexOutputProps) {
  return (
    <div className="regex-output">
      <pre className="regex-output-value">{props.regex}</pre>
      <button type="button" className="regex-copy" onClick={props.onCopy}>
        Copy regex
      </button>
    </div>
  );
}
