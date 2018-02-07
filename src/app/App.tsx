import * as React from "react";
import { OptionsPanel } from "../components/OptionsPanel";
import { RegexOutput } from "../components/RegexOutput";
import { SampleInput } from "../components/SampleInput";
import { Step } from "../components/Step";
import { Suggestions } from "../components/Suggestions";
import { recognize } from "../recognizers/recognize";
import { Match } from "../regex/match";
import { applyOptions, defaultOptions, RegexOptions } from "../regex/options";
import { buildRegexFromMatches } from "../regex/regexFromMatches";
import { layoutSuggestions, SuggestionBox } from "../suggestions/layout";
import { defaultSample } from "./defaultSample";
import { toggleSelection } from "./selection";

export interface AppState {
  sample: string;
  selected: Match[];
  options: RegexOptions;
}

export class App extends React.Component<{}, AppState> {
  public state: AppState = { sample: defaultSample, selected: [], options: defaultOptions };

  public render() {
    const boxes = layoutSuggestions(recognize(this.state.sample));
    const regex = applyOptions(
      buildRegexFromMatches(this.state.sample, this.state.selected),
      this.state.options
    );
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Regex Generator</h1>
        </header>
        <main className="app-steps">
          <Step index={1} title="Paste a sample text.">
            <SampleInput value={this.state.sample} onChange={this.handleChange} />
            <p className="sample-hint">
              Give us an example of the text you want to match using your regex.
            </p>
          </Step>
          <Step index={2} title="Which parts of the text are interesting for you?">
            <Suggestions
              text={this.state.sample}
              boxes={boxes}
              selected={this.state.selected}
              onSelect={this.handleSelect}
            />
            <p className="suggestions-hint">
              Click on the marked suggestions to select them for your regular expression.
            </p>
          </Step>
          <div className="options-block">
            <OptionsPanel options={this.state.options} onChange={this.handleOptions} />
          </div>
          <Step index={3} title="Regular Expression">
            <RegexOutput regex={regex} />
          </Step>
        </main>
      </div>
    );
  }

  private handleChange = (sample: string) => {
    this.setState({ sample, selected: [] });
  };

  private handleSelect = (box: SuggestionBox) => {
    this.setState({ selected: toggleSelection(this.state.selected, box.match) });
  };

  private handleOptions = (options: RegexOptions) => {
    this.setState({ options });
  };
}
