import { booleanWord } from "./booleanWord";
import { creditCard } from "./creditCard";
import { currency } from "./currency";
import { date } from "./date";
import { digits } from "./digits";
import { doubleQuoted } from "./doubleQuoted";
import { email } from "./email";
import { hashtag } from "./hashtag";
import { hex } from "./hex";
import { hexColor } from "./hexColor";
import { ipv4 } from "./ipv4";
import { isoTimestamp } from "./isoTimestamp";
import { letters } from "./letters";
import { logLevel } from "./logLevel";
import { macAddress } from "./macAddress";
import { percentage } from "./percentage";
import { phone } from "./phone";
import { Recognizer } from "./recognizer";
import { semver } from "./semver";
import { singleQuoted } from "./singleQuoted";
import { time } from "./time";
import { url } from "./url";
import { uuid } from "./uuid";
import { whitespace } from "./whitespace";
import { word } from "./word";

export const defaultRecognizers: Recognizer[] = [
  isoTimestamp,
  date,
  time,
  logLevel,
  uuid,
  macAddress,
  ipv4,
  email,
  url,
  semver,
  hexColor,
  hex,
  currency,
  percentage,
  creditCard,
  phone,
  booleanWord,
  hashtag,
  singleQuoted,
  doubleQuoted,
  digits,
  letters,
  word,
  whitespace
];
