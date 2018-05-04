import * as React from "react";
import { SuggestionBox } from "../suggestions/layout";

export interface SuggestionBoxViewProps {
  box: SuggestionBox;
  selected: boolean;
  onSelect: (box: SuggestionBox) => void;
}

export function SuggestionBoxView(props: SuggestionBoxViewProps) {
  const { box } = props;
  const style: React.CSSProperties = {
    left: `${box.left}ch`,
    width: `${box.width}ch`,
    top: `${box.row * 1.4}em`,
    backgroundColor: box.color
  };
  const className = props.selected ? "suggestion-box suggestion-box-selected" : "suggestion-box";
  const select = () => props.onSelect(box);
  return (
    <div
      className={className}
      style={style}
      title={box.match.name}
      role="button"
      tabIndex={0}
      aria-label={box.match.name}
      onClick={select}
      onKeyPress={event => {
        if (event.key === "Enter") {
          select();
        }
      }}
    />
  );
}
