/*
What are React Hooks?

- Special build-in functions that allow us to "hook" into React internals.
* creating and accessing state from fiber tree.
* registering the side effects in fiber tree.
* manul DOM Manipulation

- Always start with "use" (useState, useEffect, etc.)
- Enable easy reusing of non-visual logic: we can compose multiple hooks into ouw own custom hooks.
- give function components the ability to own state and run side effects at different lifecycle points 
(before v16.8 only available in class components.)

ALL IN BUILT HOOKS

1) useState
2) useEffect
3) useReducer
4) useContext
5) useRef
6) useCallback
7) useMemo
8) useTransition

other 
useLayoutEffect
useDebugValue
useImperativeHandle
useId

Only for Libraries
useSyncExternalStore
useInsertionEffect


RULES OF HOOK
*************
Note: ESLINT EXTENTION IN VS CODE FOR REACT RULES

1) Only call hooks at the top level
- Do not call hooks inside conditionals, loops, nested functions or after an early return.
(this is necessary to ensure that hooks are always called in the same order (hooks rely on this))

2) Only call hooks from React Functions
- only call hooks inside a function component or a custom hook.

Note: These rules are automatically enforced by React's ESLint rules.


*/
