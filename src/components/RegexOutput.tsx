import * as React from "react";

export interface RegexOutputProps {
  regex: string;
}

export function RegexOutput(props: RegexOutputProps) {
  return (
    <div className="regex-output">
      <pre className="regex-output-value">{props.regex}</pre>
    </div>
  );
}
