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

let time = performance.now()
const factorialMemoFunction = memoize(factorial)
factorialMemoFunction(10000)
factorialMemoFunction(10000)
time = performance.now() - time
console.log(`Memoized double factorial(10000) ${time}`)
time = performance.now()
factorial(10000)
factorial(10000)
time = performance.now() - time
console.log(`Not memoized double factorial(10000) ${time}`)