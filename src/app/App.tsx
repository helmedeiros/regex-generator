import * as React from "react";
import { LanguageSnippets } from "../components/LanguageSnippets";
import { OptionsPanel } from "../components/OptionsPanel";
import { RegexOutput } from "../components/RegexOutput";
import { RegexPreview } from "../components/RegexPreview";
import { SampleInput } from "../components/SampleInput";
import { Step } from "../components/Step";
import { Suggestions } from "../components/Suggestions";
import { Tour } from "../components/Tour";
import { recognize } from "../recognizers/recognize";
import { findMatches } from "../regex/findMatches";
import { Match } from "../regex/match";
import { applyOptions, defaultOptions, flagsFor, RegexOptions } from "../regex/options";
import { buildRegexFromMatches } from "../regex/regexFromMatches";
import { layoutSuggestions, SuggestionBox } from "../suggestions/layout";
import { copyText } from "./copyText";
import { defaultSample } from "./defaultSample";
import { toggleSelection } from "./selection";
import { tourSteps } from "./tour";
import { decodeSample, encodeSample } from "./urlState";

function initialSample(): string {
  const fromUrl = decodeSample(window.location.hash);
  return fromUrl !== null ? fromUrl : defaultSample;
}

export interface AppState {
  sample: string;
  selected: Match[];
  options: RegexOptions;
  tourOpen: boolean;
}

export class App extends React.Component<{}, AppState> {
  public state: AppState = {
    sample: initialSample(),
    selected: [],
    options: defaultOptions,
    tourOpen: true
  };

  public componentDidUpdate() {
    const encoded = encodeSample(this.state.sample);
    if (window.location.hash !== encoded) {
      window.location.hash = encoded;
    }
  }

  public render() {
    const boxes = layoutSuggestions(recognize(this.state.sample));
    const regex = this.currentRegex();
    const core = buildRegexFromMatches(this.state.sample, this.state.selected);
    const ranges = findMatches(this.state.sample, core, flagsFor(this.state.options));
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Regex Generator</h1>
          <button
            type="button"
            className="help-button"
            aria-label="Open the introduction"
            onClick={this.handleOpenTour}
          >
            ?
          </button>
        </header>
        <main className="app-steps">
          <Step index={1} title="Paste a sample text.">
            <SampleInput value={this.state.sample} onChange={this.handleChange} />
            <p className="sample-hint">
              Give us an example of the text you want to match using your regex.
            </p>
            <button type="button" className="reset-sample" onClick={this.handleReset}>
              Reset
            </button>
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
            <RegexOutput regex={regex} onCopy={this.handleCopy} />
            <RegexPreview text={this.state.sample} ranges={ranges} />
          </Step>
          <div className="snippets-block">
            <LanguageSnippets regex={regex} />
            <p className="snippets-note">
              Please note that these code samples are automatically generated. They are not
              guaranteed to work.
            </p>
          </div>
        </main>
        {this.state.tourOpen ? <Tour steps={tourSteps} onClose={this.handleCloseTour} /> : null}
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

  private handleReset = () => {
    this.setState({ sample: defaultSample, selected: [] });
  };

  private handleCopy = () => {
    copyText(this.currentRegex());
  };

  private currentRegex = (): string => {
    return applyOptions(
      buildRegexFromMatches(this.state.sample, this.state.selected),
      this.state.options
    );
  };

  private handleOpenTour = () => {
    this.setState({ tourOpen: true });
  };

  private handleCloseTour = () => {
    this.setState({ tourOpen: false });
  };
}
