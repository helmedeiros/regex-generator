import * as React from "react";
import { SampleInput } from "../components/SampleInput";
import { Step } from "../components/Step";
import { defaultSample } from "./defaultSample";

export interface AppState {
  sample: string;
}

export class App extends React.Component<{}, AppState> {
  public state: AppState = { sample: defaultSample };

  public render() {
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
        </main>
      </div>
    );
  }

  private handleChange = (sample: string) => {
    this.setState({ sample });
  };
}
