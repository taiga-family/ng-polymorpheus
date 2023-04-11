# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.1.0](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v4.0.11...v4.1.0) (2023-04-11)

### Features

-   **outlet:** add `SafeValue` support ([#76](https://github.com/TinkoffCreditSystems/ng-polymorpheus/issues/76)) ([f9608be](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/f9608be656675f6958b8e38d5e49010c136b51cd))

### [4.0.11](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v4.0.10...v4.0.11) (2023-04-10)

### Features

-   **component:** make context `any` by default ([#73](https://github.com/TinkoffCreditSystems/ng-polymorpheus/issues/73)) ([a7fbd7d](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/a7fbd7d0db8cce0bd653021e96dd3901ff849695))

### [4.0.10](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v4.0.9...v4.0.10) (2022-11-14)

### Bug Fixes

-   **template:** fix untyped template ([8c99c96](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/8c99c96b44a93a79de9a00e540f1f06e98bb44dc))

### [4.0.9](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v4.0.8...v4.0.9) (2022-11-13)

### Bug Fixes

-   **outlet:** properly loosen context type ([#60](https://github.com/TinkoffCreditSystems/ng-polymorpheus/issues/60)) ([9c8075e](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/9c8075eb2ca33a3b38e209ec8b1f29bfea2c3056))

### [4.0.8](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v4.0.7...v4.0.8) (2022-11-12)

### Bug Fixes

-   **outlet:** loosen context type restriction ([#58](https://github.com/TinkoffCreditSystems/ng-polymorpheus/issues/58)) ([48c2ad3](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/48c2ad36b38696ed32405fa8458e2fd21565d7ba))

### [4.0.7](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v4.0.6...v4.0.7) (2022-09-05)

### Features

-   compat with Angular 14 and TS 4.8 ([#56](https://github.com/TinkoffCreditSystems/ng-polymorpheus/issues/56)) ([95b932f](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/95b932f50d8b228020aca003cfe24d897bdd6c8c))

### [4.0.6](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v4.0.5...v4.0.6) (2022-08-16)

### Bug Fixes

-   default context to `any` for template too ([fcb2f0e](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/fcb2f0e730bcb907d77d664c290aef2dfdf39ab3))

### [4.0.5](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v4.0.4...v4.0.5) (2022-08-16)

### Bug Fixes

-   default content generic to `any` for better base compatibility ([4f8d874](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/4f8d8748cdb9bd23a8a0041996acb0f0d123a8ab))

### [4.0.4](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v4.0.3...v4.0.4) (2022-07-20)

### Bug Fixes

-   don't instantiate template with function content returning null ([#55](https://github.com/TinkoffCreditSystems/ng-polymorpheus/issues/55)) ([88a43d5](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/88a43d5f1daa9a6090455d172249972b10a351b9))

### [4.0.3](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v4.0.2...v4.0.3) (2022-07-20)

### Bug Fixes

-   don't instantiate template if content is null ([4d58d03](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/4d58d0338ffa769ceea5cdb967c0fcae3a0d6595))

### [4.0.2](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v4.0.1...v4.0.2) (2022-07-19)

### Features

-   properly type primitive context ([#54](https://github.com/TinkoffCreditSystems/ng-polymorpheus/issues/54)) ([ca295de](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/ca295de2c99cb67272543d969b0f0c22ec524d07))

### [4.0.1](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v4.0.0...v4.0.1) (2022-07-15)

### Features

-   improve typings ([b250d5d](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/b250d5d2a64ba2f0e21fc0625cd2e1e6ed860b38))
-   improve typings ([#52](https://github.com/TinkoffCreditSystems/ng-polymorpheus/issues/52)) ([5272b4d](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/5272b4d65bd88650041d704bf3909ebe55899642))

## [4.0.0](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v3.1.8...v4.0.0) (2021-05-24)

### Features

-   **outlet:** switch to using structural directive ([#30](https://github.com/TinkoffCreditSystems/ng-polymorpheus/issues/30)) ([99c8108](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/99c81087fffb7161f63271a207456c61607699f5))

### BREAKING CHANGES:

-   Bumped Angular to version 12 and Ivy compilation
-   **Entire** syntax has changed to structural directive

### [3.1.8](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v3.1.7...v3.1.8) (2021-05-14)

### Bug Fixes

-   **template:** fix falling back to string generic ([43cc5f0](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/43cc5f0dec11c29505b8e6b3344dae6ae628c1f5))

### [3.1.7](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v3.1.6...v3.1.7) (2021-05-13)

### Bug Fixes

-   **template:** fix default generic value ([e420116](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/e420116086e280bf42b5453b26cb5a8d92b89f17))

## [3.1.0](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/3.0.0...v3.1.0) (2021-04-29)

### Features

-   **template:** add a way to type context ([#27](https://github.com/TinkoffCreditSystems/ng-polymorpheus/issues/27)) ([f4141f4](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/f4141f4))

## [3.0.0](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v2.1.0...v3.0.0) (2020-12-24)

### Features

-   **outlet:** remove display: block ([#25](https://github.com/TinkoffCreditSystems/ng-polymorpheus/issues/25)) ([9dcd7f8](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/9dcd7f8fa1bab685f4fb41b40de9d14c7d00edea))

### BREAKING CHANGES:

-   Bumped Angular to version 9
-   Remove the component selector for outlet

## [2.1.0](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v2.0.0...v2.1.0) (2020-05-25)

### Features

-   **outlet:** allow attribute usage so it can be applied to native tags ([#17](https://github.com/TinkoffCreditSystems/ng-polymorpheus/issues/17)) ([62d7a5a](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/62d7a5a))

### Bug Fixes

-   **template:** remove default context type to prevent errors with Ivy full template check

## [2.0.0](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v1.0.2...v2.0.0) (2020-02-14)

### Features

-   **component:** Polymorpheus components now behave the same way as Angular templates and mutate context instead of reinstantiating if the shape of the context stayed the same ([#12](https://github.com/TinkoffCreditSystems/ng-polymorpheus/issues/12)) ([57cd932](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/57cd932))

### BREAKING CHANGES:

-   **POLYMORPHEUS_CONTEXT**: fix typo in the name

### [1.0.4](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v1.0.2...v1.0.4) (2020-01-20)

### Bug Fixes

-   **readme:** fix link to the Medium article ([#7](https://github.com/TinkoffCreditSystems/ng-polymorpheus/issues/7)) ([6b77cfd](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/6b77cfd))

### [1.0.3](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v1.0.2...v1.0.3) (2019-12-20)

### Features

-   **template:** add default type as empty object ([#8](https://github.com/TinkoffCreditSystems/ng-polymorpheus/issues/8)) ([231ba62](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/231ba62))

### [1.0.2](https://github.com/TinkoffCreditSystems/ng-polymorpheus/compare/v1.0.1...v1.0.2) (2019-10-02)

### Features

-   **outlet:** simplify template ([6a4c6ad](https://github.com/TinkoffCreditSystems/ng-polymorpheus/commit/6a4c6ad))

## 1.0.0 (2019-09-26)

Initial release
