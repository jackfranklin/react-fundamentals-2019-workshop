

// TODO: stop this promise erroring in the console.
Promise.resolve(5).then(value => {
  throw new Error('Jack made this promise go wrong on purpose')
})
