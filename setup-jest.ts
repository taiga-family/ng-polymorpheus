import 'jest-preset-angular/setup-jest';

/**
 * in our jest setupFilesAfterEnv file,
 * however when running with ng test those
 * imports are already done by angular
 * resulting in duplicate imports
 * and conflicts resulting in the above error
 */
if (!('Zone' in global)) {
    require('zone.js');
    require('zone.js/testing');
}
