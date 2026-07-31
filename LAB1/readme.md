# Eventloop
JS is synchronous and single threaded by default.

## There can be async behaviour
- with BrowserAPI -
setTimeout, setInterval,setImmediate,nextTick
- with promises
- with event handlers
## Promise
A function is not executed immeditely but it must be executed after a while it hase some status during the execution. At final it may resolve( )=>success , reject=>unsuccess

## There can be async behaviour
- with BrowserAPI setTimeout, setInterval, setImmediate,   nextTick

- with promises

- with event handlers

## Modern JS is of two types

1. CommonJS (.cjs) -> supports OOPS -> require

2. ModuleJS (.mjs) -> follow modular approach ->import
-priority(promise,nextTick,setImmediate/setTimeout)