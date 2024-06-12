

* fix: support pass cdr (43fb937)

* feat: support pass content (85ad961)
* chore(deps): update taiga-family/ci action to v1.62.2 (#426) (1eb3cc5)
* chore: fixup (7505d7b)

# [4.5.0](https://github.com/taiga-family/ng-polymorpheus/compare/v4.1.0...v4.5.0) (2024-06-12)


### Bug Fixes

* use proxy instead of replacing context of EmbeddedViewRef ([#175](https://github.com/taiga-family/ng-polymorpheus/issues/175)) ([9163e00](https://github.com/taiga-family/ng-polymorpheus/commit/9163e0056b7f7a391a96aebe5b888094d951d756))


* feat!: update to Angular 15 (#184) ([3cad831](https://github.com/taiga-family/ng-polymorpheus/commit/3cad83172a6e6f68a6afe5f0b13ebdc86c506904)), closes [#184](https://github.com/taiga-family/ng-polymorpheus/issues/184)


### Features

* deep typing for template ([#101](https://github.com/taiga-family/ng-polymorpheus/issues/101)) ([acb6d15](https://github.com/taiga-family/ng-polymorpheus/commit/acb6d15e2840e33c495070ac28a6b9f9a9e6076e))


### BREAKING CHANGES

* Templates now use Injector from the outlet as a fallback
