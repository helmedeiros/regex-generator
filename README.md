# regex-generator

A web tool that turns a piece of sample text into a regular expression.

Paste an example of the text you want to match, pick the parts that matter,
and the tool builds a regular expression for you along with ready-to-use
snippets for several programming languages.

## How it works

1. Paste a sample text.
2. The tool highlights common patterns it recognizes (numbers, dates, log
   levels, quoted values, hashtags and many more).
3. Click the highlighted suggestions to select them. The tool escapes the
   rest of the text and assembles a regular expression that matches your
   sample.
4. Copy the regular expression, or grab a snippet for your language of choice.

Options let you make the match case insensitive, anchor it to the whole line,
or add the global flag. The sample is kept in the page URL so you can share it.

## Development

```
npm install
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
```

The build writes a static site to `docs/`, which is served with GitHub Pages.

## License

MIT
