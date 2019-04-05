// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**', '!src/bin/**'],
  coverageReporters: ['lcov'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    'node_modules',
    'src/bin',
    'src/config',
    'src/migrations',
    'src/models',
    'src/seeders',
  ],
}
