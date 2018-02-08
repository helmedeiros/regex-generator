import * as React from "react";
import { Range } from "../regex/findMatches";

export interface RegexPreviewProps {
  text: string;
  ranges: Range[];
}

export function RegexPreview(props: RegexPreviewProps) {
  const pieces: React.ReactNode[] = [];
  let cursor = 0;
  props.ranges.forEach((range, index) => {
    if (range.start > cursor) {
      pieces.push(props.text.slice(cursor, range.start));
    }
    pieces.push(
      <mark key={index} className="preview-match">
        {props.text.slice(range.start, range.end)}
      </mark>
    );
    cursor = range.end;
  });
  if (cursor < props.text.length) {
    pieces.push(props.text.slice(cursor));
  }
  return <pre className="regex-preview">{pieces}</pre>;
}
