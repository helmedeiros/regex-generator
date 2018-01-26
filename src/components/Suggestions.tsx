import * as React from "react";
import { SuggestionBox } from "../suggestions/layout";
import { SuggestionBoxView } from "./SuggestionBoxView";

export interface SuggestionsProps {
  text: string;
  boxes: SuggestionBox[];
  onSelect: (box: SuggestionBox) => void;
}

export function Suggestions(props: SuggestionsProps) {
  return (
    <div className="suggestions">
      <pre className="suggestions-text">{props.text}</pre>
      <div className="suggestions-boxes">
        {props.boxes.map((box, index) => (
          <SuggestionBoxView key={index} box={box} onSelect={props.onSelect} />
        ))}
      </div>
    </div>
  );
}
