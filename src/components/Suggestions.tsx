import * as React from "react";
import { Match, matchKey } from "../regex/match";
import { SuggestionBox } from "../suggestions/layout";
import { SuggestionBoxView } from "./SuggestionBoxView";

export interface SuggestionsProps {
  text: string;
  boxes: SuggestionBox[];
  selected: Match[];
  onSelect: (box: SuggestionBox) => void;
}

export function Suggestions(props: SuggestionsProps) {
  const selectedKeys = props.selected.map(matchKey);
  return (
    <div className="suggestions">
      <pre className="suggestions-text">{props.text}</pre>
      <div className="suggestions-boxes">
        {props.boxes.map((box, index) => (
          <SuggestionBoxView
            key={index}
            box={box}
            selected={selectedKeys.indexOf(matchKey(box.match)) >= 0}
            onSelect={props.onSelect}
          />
        ))}
      </div>
    </div>
  );
}
