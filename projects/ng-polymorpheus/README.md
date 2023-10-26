# Polymorpheus

[![npm version](https://img.shields.io/npm/v/@tinkoff/ng-polymorpheus.svg)](https://npmjs.com/package/@tinkoff/ng-polymorpheus)
[![Build Status](https://github.com/taiga-family/ng-polymorpheus/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/taiga-family/ng-polymorpheus/actions/workflows/ci.yml)
[![Coverage Status](https://codecov.io/gh/taiga-family/ng-polymorpheus/branch/main/graphs/badge.svg)](https://app.codecov.io/gh/taiga-family/ng-polymorpheus/tree/main/projects)
[![angular-open-source-starter](https://img.shields.io/badge/made%20with-angular--open--source--starter-d81676?logo=angular)](https://github.com/taiga-family/angular-open-source-starter)

> **Polymorpheus** is a tiny library for polymorphic templates in Angular.
>
> It is 1 KB gzip, dependency free and allows you to make pretty cool things.

## What does it do?

It abstracts over different ways of view customization in Angular with one simple _structural directive_:

```html
<ng-container *polymorpheusOutlet="content as text; context: context">{{text}}</ng-container>
```

**Content** accepts:

- primitives like `number` or `string`
- functions that take `context` as argument and return a primitive
- templates that get instantiated with given `context`
- components that would get `context` injected through DI

**Context** is optional when you need your **content** to adapt to the situation

## How to use it?

Typical use case would be a component that accepts visual customization and defines context by itself. Say a menu list
where you can configure how each item should look like by passing a template. And context would be item itself and, for
example, whether it is focused or not.

Please see [extensive demo](https://codesandbox.io/s/github/taiga-family/ng-polymorpheus/tree/master/projects/demo).

You can also
[read about this concept in detail](https://blog.angularindepth.com/agnostic-components-in-angular-2427923b742d).
