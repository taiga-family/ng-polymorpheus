import {resolve} from 'node:path';

import type {Config} from 'jest';
import {pathsToModuleNameMapper} from 'ts-jest';

process.env.TZ = 'Europe/Moscow';
process.env.FORCE_COLOR = 'true';
process.env.TS_JEST_DISABLE_VER_CHECKER = 'true';

const {compilerOptions} = require(resolve(__dirname, 'tsconfig.json'));

const config: Config = {
    rootDir: __dirname,
    preset: 'jest-preset-angular',
    testEnvironment: 'jsdom',
    globals: {
        'ts-jest': {
            tsconfig: resolve(__dirname, 'tsconfig.spec.json'),
            isolatedModules: true,
        },
    },
    extensionsToTreatAsEsm: ['.ts'],
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    transform: {'^.+\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular'},
    testMatch: ['<rootDir>/projects/**/*.spec.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/schematics/'],
    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: [
        '**/ng-polymorpheus/**/*.ts',
        '!**/ng-polymorpheus/**/*.spec.ts',
        '!**/jest.config.ts',
    ],
    coveragePathIgnorePatterns: ['node_modules', 'schematics', '.spec.ts'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: `<rootDir>/${compilerOptions.baseUrl}/`
            .replaceAll('./', '/')
            .replaceAll(/\/\/+/g, '/'),
    }),
    modulePathIgnorePatterns: ['dist/'],
    cacheDirectory: '<rootDir>/node_modules/.cache/jest',
    reporters: ['default'],
    collectCoverage: true,
};

export default config;
