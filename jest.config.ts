import type {Config} from 'jest';

const config: Config = {
    preset: '@taiga-ui/jest-config',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    collectCoverageFrom: [
        '**/ng-polymorpheus/**/*.ts',
        '!**/ng-polymorpheus/**/*.spec.ts',
        '!**/demo/**/*.ts',
        '!**/jest.config.ts',
    ],
};

export default config;
