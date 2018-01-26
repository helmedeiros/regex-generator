import * as React from "react";
import { SuggestionBox } from "../suggestions/layout";

export interface SuggestionBoxViewProps {
  box: SuggestionBox;
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
  return (
    <div
      className="suggestion-box"
      style={style}
      title={box.match.name}
      onClick={() => props.onSelect(box)}
    />
  );
}
