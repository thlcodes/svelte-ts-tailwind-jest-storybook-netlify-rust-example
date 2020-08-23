module.exports = {
  roots: ['./src'],
  verbose: true,
  transform: {
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        "preprocess": true
      }
    ],
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'svelte'],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testPathIgnorePatterns: ["/node_modules/", "/build/", "/storybook-static/"]
}