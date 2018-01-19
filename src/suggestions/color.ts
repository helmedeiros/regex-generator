const PALETTE = ["#db4437", "#0f9d58", "#4285f4", "#f4b400"];

export function paletteSize(): number {
  return PALETTE.length;
}

export function colorFor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = (hash * 31 + name.charCodeAt(i)) % 1000000007;
  }
  return PALETTE[hash % PALETTE.length];
}
