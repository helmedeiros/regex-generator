import * as React from "react";

export interface CollapsibleProps {
  title: string;
  children?: React.ReactNode;
}

export interface CollapsibleState {
  open: boolean;
}

export class Collapsible extends React.Component<CollapsibleProps, CollapsibleState> {
  public state: CollapsibleState = { open: false };

  public render() {
    return (
      <div className="collapsible">
        <button type="button" className="collapsible-toggle" onClick={this.toggle}>
          {this.props.title} {this.state.open ? "▲" : "▼"}
        </button>
        {this.state.open ? <div className="collapsible-body">{this.props.children}</div> : null}
      </div>
    );
  }

  private toggle = () => {
    this.setState({ open: !this.state.open });
  };
}
