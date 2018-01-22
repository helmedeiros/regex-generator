import * as React from "react";

export interface StepProps {
  index: number;
  title: string;
  children?: React.ReactNode;
}

export function Step(props: StepProps) {
  return (
    <section className="step">
      <div className="step-number">{props.index}</div>
      <div className="step-body">
        <h2 className="step-title">{props.title}</h2>
        <div className="step-content">{props.children}</div>
      </div>
    </section>
  );
}
