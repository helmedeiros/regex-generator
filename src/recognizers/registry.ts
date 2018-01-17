import { digits } from "./digits";
import { doubleQuoted } from "./doubleQuoted";
import { email } from "./email";
import { hashtag } from "./hashtag";
import { hex } from "./hex";
import { ipv4 } from "./ipv4";
import { isoTimestamp } from "./isoTimestamp";
import { letters } from "./letters";
import { logLevel } from "./logLevel";
import { Recognizer } from "./recognizer";
import { singleQuoted } from "./singleQuoted";
import { url } from "./url";
import { uuid } from "./uuid";
import { whitespace } from "./whitespace";
import { word } from "./word";

export const defaultRecognizers: Recognizer[] = [
  isoTimestamp,
  logLevel,
  uuid,
  ipv4,
  email,
  url,
  hex,
  hashtag,
  singleQuoted,
  doubleQuoted,
  digits,
  letters,
  word,
  whitespace
];
