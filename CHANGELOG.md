# fp-lite

## 2.0.0

### Major Changes

- fffa44c: ### Breaking Change:

  1. `peek` now use console.log inside, and require a string parmas for log label.
  2. Remove `deepFlat`, use multiple `flat` instead or just fallbask to `(xs)=>xs.flat(..)`

  ### New Functions:

  1. `compose`
  1. `asyncCompose`
  1. `notEmpty`
  1. `notZero`

  ### Performance improve:

  Use `for loop` instead those `.map`, `.filter`, `.reduce` in codebase.
  Relative functions: `map`,`filter`, `pipe`, `flow`,`compose`, and there async version functions.

## 3.0.0

### Major Changes

- d15fc57: ### Breaking Change:

  1. `peek` now use console.log inside, and require a string parmas for log label.
  2. Remove `deepFlat`, use multiple `flat` instead or just fallbask to `(xs)=>xs.flat(..)`

  ### New Functions:

  1. `compose`
  1. `asyncCompose`
  1. `notEmpty`
  1. `notZero`

  ### Performance improve:

  Use `for loop` instead those `.map`, `.filter`, `.reduce` in codebase.
  Relative functions: `map`,`filter`, `pipe`, `flow`,`compose`, and there async version functions.

## 1.2.0

### Minor Changes

- Fix:

  1. `peek` lossing type infer when work with console.log
  2. remove unexport function `asyncReduce`

  New:

  1. `invoke`, like `peek` but for those not only console.log
  2. `isEmpty` and `isZero` for checking empty

## 1.1.0

### Minor Changes

- fix: type error when last param is not async fn

## 1.0.3

### Patch Changes

- doc: typo

## 1.0.2

### Patch Changes

- doc: update example

## 1.0.1

### Patch Changes

- doc: more detailed explantation

## 1.0.0

### Major Changes

- BREAKING CHANGE: remove `asyncQuere`

## 0.3.1

### Patch Changes

- fix: dependence

## 0.3.0

### Minor Changes

- 1. feat: new function `asyncReduce`
  2. fix(type): lossing type sugestion after ts 4.9.4

## 0.2.0

### Minor Changes

- 1. new: function `waitAll`
  2. update: README.md

## 0.1.1

### Patch Changes

- fix: function `filter` type

## 0.1.0

### Minor Changes

- 1. new: function `asyncQueue`
  2. change: `first` and `last` as normal funcition
  3. refactor: `pick` and `omit`

## 0.0.4

### Patch Changes

- 1. fix: `flat` return type
  2. change: `flat` as normal function
  3. new: `deepFlat` for `flat(depth)` scene
