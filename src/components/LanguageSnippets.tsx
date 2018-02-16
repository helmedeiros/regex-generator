import * as React from "react";
import { snippets } from "../snippets/registry";
import { renderSnippet } from "../snippets/snippet";
import { Collapsible } from "./Collapsible";

export interface LanguageSnippetsProps {
  regex: string;
}

export interface LanguageSnippetsState {
  language: string;
}

export class LanguageSnippets extends React.Component<
  LanguageSnippetsProps,
  LanguageSnippetsState
> {
  public state: LanguageSnippetsState = { language: snippets[0].language };

  public render() {
    const active = snippets.filter(snippet => snippet.language === this.state.language)[0];
    return (
      <Collapsible title="Usage in Programming Languages">
        <ul className="snippet-languages">
          {snippets.map(snippet => (
            <li key={snippet.language}>
              <button
                type="button"
                className="snippet-language"
                onClick={() => this.select(snippet.language)}
              >
                {snippet.language}
              </button>
            </li>
          ))}
        </ul>
        <pre className="snippet-code">{renderSnippet(active, this.props.regex)}</pre>
      </Collapsible>
    );
  }

  private select = (language: string) => {
    this.setState({ language });
  };
}
