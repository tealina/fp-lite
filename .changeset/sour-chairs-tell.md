---
'fp-lite': major
---

### Breaking Change:

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
