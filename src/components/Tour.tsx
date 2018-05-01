import * as React from "react";
import { TourStep } from "../app/tour";

export interface TourProps {
  steps: TourStep[];
  onClose: () => void;
}

export interface TourState {
  index: number;
}

export class Tour extends React.Component<TourProps, TourState> {
  public state: TourState = { index: 0 };

  public componentDidMount() {
    window.addEventListener("keydown", this.handleKey);
  }

  public componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKey);
  }

  public render() {
    const { steps } = this.props;
    const step = steps[this.state.index];
    const isFirst = this.state.index === 0;
    const isLast = this.state.index === steps.length - 1;
    return (
      <div className="tour">
        <div className="tour-card">
          <h3 className="tour-title">{step.title}</h3>
          <p className="tour-body">{step.body}</p>
          <div className="tour-actions">
            <button type="button" className="tour-close" onClick={this.props.onClose}>
              Close
            </button>
            <button
              type="button"
              className="tour-previous"
              disabled={isFirst}
              onClick={this.previous}
            >
              ← Previous
            </button>
            {isLast ? (
              <button type="button" className="tour-done" onClick={this.props.onClose}>
                Done
              </button>
            ) : (
              <button type="button" className="tour-next" onClick={this.next}>
                Next →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  private previous = () => {
    this.setState({ index: Math.max(0, this.state.index - 1) });
  };

  private next = () => {
    this.setState({ index: Math.min(this.props.steps.length - 1, this.state.index + 1) });
  };

  private handleKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      this.props.onClose();
    }
  };
}
