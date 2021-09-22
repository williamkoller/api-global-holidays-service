module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/**/**.module.ts',
    '!<rootDir>/src/config/**.ts',
    '!<rootDir>/src/infra/**',
    '!<rootDir>/src/main.ts',
    '!<rootDir>/src/modules/**/dtos/**',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  testRegex: '.*\\.spec\\.ts$',
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
};
