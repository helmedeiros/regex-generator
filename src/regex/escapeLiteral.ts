const SPECIAL = /[.*+?^${}()|[\]\\]/g;

export function escapeLiteral(input: string): string {
  return input.replace(SPECIAL, "\\$&");
}
