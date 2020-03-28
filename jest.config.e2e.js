module.exports = {
  "setupFilesAfterEnv": ["./e2e/init.ts"],
  "testEnvironment": "node",
  "reporters": ["detox/runners/jest/streamlineReporter"],
  testNamePattern: './e2e/**/*.test.ts?(x)',
  "verbose": true
}
