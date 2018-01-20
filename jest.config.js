module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "\\.test\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js"],
  setupTestFrameworkScriptFile: "<rootDir>/src/setupEnzyme.ts",
  testURL: "http://localhost/"
};
