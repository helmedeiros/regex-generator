import { SuggestionBox } from "./layout";

export function boxesAt(boxes: SuggestionBox[], column: number): SuggestionBox[] {
  return boxes.filter(box => column >= box.left && column < box.left + box.width);
}
