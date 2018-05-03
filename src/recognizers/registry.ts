import { booleanWord } from "./booleanWord";
import { creditCard } from "./creditCard";
import { currency } from "./currency";
import { date } from "./date";
import { decimal } from "./decimal";
import { digits } from "./digits";
import { doubleQuoted } from "./doubleQuoted";
import { email } from "./email";
import { envVar } from "./envVar";
import { hashtag } from "./hashtag";
import { hex } from "./hex";
import { hexColor } from "./hexColor";
import { htmlTag } from "./htmlTag";
import { ipv4 } from "./ipv4";
import { ipv6 } from "./ipv6";
import { isoTimestamp } from "./isoTimestamp";
import { letters } from "./letters";
import { logLevel } from "./logLevel";
import { macAddress } from "./macAddress";
import { md5 } from "./md5";
import { percentage } from "./percentage";
import { phone } from "./phone";
import { Recognizer } from "./recognizer";
import { scientific } from "./scientific";
import { semver } from "./semver";
import { sha1 } from "./sha1";
import { singleQuoted } from "./singleQuoted";
import { slug } from "./slug";
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
  md5,
  sha1,
  macAddress,
  ipv6,
  ipv4,
  email,
  url,
  envVar,
  htmlTag,
  slug,
  semver,
  hexColor,
  hex,
  scientific,
  decimal,
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
