import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './src',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  // moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    // '^~/services/api.service$': '<rootDir>/src/services/api-sample.service.ts',
    '^~/(.*)$': '<rootDir>/src/$1',
    // "d3": "<rootDir>/node_modules/d3/dist/d3.min.js",
    // "^d3-(.*)$": "<rootDir>/node_modules/d3-$1/dist/d3-$1.min.js",
  },
};

export default createJestConfig(customJestConfig);
