import * as React from "react";
import { RegexOptions } from "../regex/options";
import { Collapsible } from "./Collapsible";

export interface OptionsPanelProps {
  options: RegexOptions;
  onChange: (options: RegexOptions) => void;
}

export function OptionsPanel(props: OptionsPanelProps) {
  const { options, onChange } = props;
  return (
    <Collapsible title="Options">
      <label className="option">
        <input
          type="checkbox"
          checked={options.caseInsensitive}
          onChange={event => onChange({ ...options, caseInsensitive: event.target.checked })}
        />
        Case insensitive
      </label>
      <label className="option">
        <input
          type="checkbox"
          checked={options.wholeLine}
          onChange={event => onChange({ ...options, wholeLine: event.target.checked })}
        />
        Match whole line
      </label>
      <label className="option">
        <input
          type="checkbox"
          checked={options.global}
          onChange={event => onChange({ ...options, global: event.target.checked })}
        />
        Global
      </label>
    </Collapsible>
  );
}
