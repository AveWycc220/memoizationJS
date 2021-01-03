const factorial = (n) => {
    if (n === 0) {
      return 1
    }
    else {
      return n * factorial(n - 1)
    }
}

const memoize = (fn) => {
  let cache = {}
  return (...args) => {
    let n = args[0]
    if (n in cache) {
      return cache[n]
    }
    else {
      cache[n] = fn(n)
      return cache[n]
    }
  }
}

const factorialMemoFunction = memoize(factorial)
console.time('Memoized double factorial(10000)')
factorialMemoFunction(10000)
factorialMemoFunction(10000)
console.timeEnd('Memoized double factorial(10000)')
console.time('Not memoized double factorial(10000)')
factorial(10000)
factorial(10000)
console.timeEnd('Not memoized double factorial(10000)')