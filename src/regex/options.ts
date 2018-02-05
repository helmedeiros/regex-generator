export interface RegexOptions {
  caseInsensitive: boolean;
  wholeLine: boolean;
  global: boolean;
}

export const defaultOptions: RegexOptions = {
  caseInsensitive: false,
  wholeLine: false,
  global: false
};

export function flagsFor(options: RegexOptions): string {
  let flags = "";
  if (options.global) {
    flags += "g";
  }
  if (options.caseInsensitive) {
    flags += "i";
  }
  return flags;
}

export function applyOptions(regex: string, options: RegexOptions): string {
  return options.wholeLine ? `^${regex}$` : regex;
}
