/*
WHAT IS REF?

"Box" (object) with a mutable .current property that is persisted across renders ("normal" variable are always reset)

const myRef = useRef(23)
myRef.current(1000)
// now can be use instantly like a normal variable.

Two big use cases:

1) Creating a variable that stays the same between renders (E.g. previous state, setTimeout id, etc.)

2) Selecting and storing DOM elements.

NOTE:
- Ref are for data that is Not Rendered: usually only appear in event handlers or effects, not is JSX 
(otherwise use state)
- Do not read write or read.current in render logic(like state)

STATE VS REFS

         PERSISTS ACROSS RENDERS     |      UPDATING CAUSES RE-RENDERS      |     IMMUTABLE     |    ASYNCHRONOUS UPDATES

STATE            ✔                                     ✔                             ✔                      ✔
 
 
REFS             ✔                                     ❌                            ❌                     ❌

*/