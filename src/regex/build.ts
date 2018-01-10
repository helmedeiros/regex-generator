import { escapeLiteral } from "./escapeLiteral";
import { Segment } from "./segment";

export function buildRegex(segments: Segment[]): string {
  return segments
    .map(segment => (segment.kind === "literal" ? escapeLiteral(segment.text) : segment.pattern))
    .join("");
}
