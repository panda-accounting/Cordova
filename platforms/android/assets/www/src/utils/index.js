export function sleep (time) {
  return new Promise((resolve, reject) => {
    if (time <= 0) {
      return resolve()
    }
    setTimeout(resolve, time)
  })
}

export function wait (promise) {
  const timeout = 2000
  const start = new Date()
  return promise.then(async (result) => {
    const delta = new Date() - start
    await sleep(timeout - delta)
    return result
  })
}

export function randomId () {
  return Math.random().toString(36).slice(2, 10)
}
