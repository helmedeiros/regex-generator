const PREFIX = "#text=";

export function encodeSample(sample: string): string {
  return PREFIX + encodeURIComponent(sample);
}

export function decodeSample(hash: string): string | null {
  if (hash.indexOf(PREFIX) !== 0) {
    return null;
  }
  return decodeURIComponent(hash.slice(PREFIX.length));
}
