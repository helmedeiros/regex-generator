export interface LiteralSegment {
  kind: "literal";
  text: string;
}

export interface PatternSegment {
  kind: "pattern";
  pattern: string;
}

export type Segment = LiteralSegment | PatternSegment;

export function literal(text: string): LiteralSegment {
  return { kind: "literal", text };
}

export function pattern(expression: string): PatternSegment {
  return { kind: "pattern", pattern: expression };
}
