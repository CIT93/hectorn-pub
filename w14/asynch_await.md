# Async await vs Promises

using the await in front of a function invocation will allow javascript to wait and continue as synchronous code instead of returning the promise of code

## Async

Any function can be converted to async

- to make a function into an async function we need to add the specification of async to the function

```
function start()

***becomes

async function start()
```

- with async we will not need to create the .then block or the .catch for possible errors
  - leading to clearer more concise code
- we must use async and await together
  - this does not apply when using JavaScript modules
  - you can use async without await when using devtools(on chrome)
- when using async and await only affects the promise receiver not the promise creator
  - all creator aspect stays the same
- any function that returns a promise can implement await
- all async functions will return a promise
  - converting a function to async it will make function return promise as default

## try/catch

- used as standard when using async / await
- separate success/failure logic, keeping them separate helps with
  - readability
  - accessibility 
- able to create separate functions for just failure/success handlers

## Fetch

- **fetch** is used to call back end points and receive data instead of using callbacks
  - fetch is a native browser feature
  - results need to converted into JSON format
