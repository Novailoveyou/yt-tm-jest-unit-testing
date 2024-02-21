import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'node',
} satisfies JestConfigWithTsJest

export default jestConfig
