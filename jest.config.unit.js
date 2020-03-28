// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults: tsjPreset } = require('ts-jest/presets')

const modulesNeedingTransform = [
  'react-native-screens',
  '@react-navigation/stack',
  '@react-navigation/native',
  'react-native',
  'react-redux',
]
const modulesToIgnore = ['<rootDir>/ios', '<rootDir>/android']

module.exports = {
  ...tsjPreset,
  collectCoverage: false,
  coveragePathIgnorePatterns: ['/node_modules/', '.*.test..*'],
  coverageReporters: ['text'],
  coverageThreshold: {
    global: {
      branches: 100,
    },
  },
  forceExit: true,
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'csv'],
  modulePathIgnorePatterns: modulesToIgnore,
  modulePaths: ['<rootDir>'],
  preset: 'react-native',
  resetMocks: false,
  resetModules: false,
  setupFilesAfterEnv: [
    '<rootDir>/__tests__/index.ts',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  testMatch: [
    '<rootDir>/__tests__/**/*.test.ts?(x)',
    '<rootDir>/src/**/?(*.)test.ts?(x)',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules', ...modulesToIgnore],
  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  transformIgnorePatterns: [
    `<rootDir>/node_modules/(?!${modulesNeedingTransform.join('|')})`,
  ],
  verbose: true,
}
