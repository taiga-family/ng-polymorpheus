import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    coverageDirectory: `<rootDir>/coverage/cdk`,
    testMatch: [`<rootDir>/**/*.spec.ts`],
};

export default config;
