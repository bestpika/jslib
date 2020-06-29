'use strict'
window.cookie = {
  get: function (key) {
    const cookie = {}
    const cookies = document.cookie.split(';')
    cookies.forEach(pair => {
      const kv = pair.split('=')
      if (kv.length > 1) {
        let k = kv[0].trim()
        let v = kv[1].trim()
        cookie[k] = v
      }
    })
    if (cookie[key]) {
      return cookie[key]
    }
  },
  set: function (key, value) {
    document.cookie = `${key}=${value}`
    return value
  }
}
