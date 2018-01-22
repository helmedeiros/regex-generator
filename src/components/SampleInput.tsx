import * as React from "react";

export interface SampleInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SampleInput(props: SampleInputProps) {
  return (
    <input
      className="sample-input"
      type="text"
      value={props.value}
      onChange={event => props.onChange(event.target.value)}
    />
  );
}
