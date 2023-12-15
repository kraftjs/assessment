module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: [".ts"],
  testPathIgnorePatterns: [ "<rootDir>/node_modules/",  "<rootDir>/dist"],
  "transform": {
    "^.+\\.[tj]s$": "ts-jest"

  },
  "transformIgnorePatterns": [
    "<rootDir>/node_modules/(?!ts-unimplemented)",
  ],
  "reporters": ["default", "jest-junit"]
};
