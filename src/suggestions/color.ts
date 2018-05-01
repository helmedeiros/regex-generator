import { palette } from "./palette";

export function paletteSize(): number {
  return palette.length;
}

export function colorFor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = (hash * 31 + name.charCodeAt(i)) % 1000000007;
  }
  return palette[hash % palette.length];
}
