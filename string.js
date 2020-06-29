// String.format, String.f
'use strict'
String.format = String.f = function () {
  let s = arguments[0]
  for (let i = 0; i < arguments.length; i++) {
    const regexp = new RegExp(`\\{${i}\\}`, 'gm')
    s = s.replace(regexp, arguments[i + 1] || '')
  }
  return s
}

String.prototype.format = String.prototype.f = function () { // eslint-disable-line no-extend-native
  let s = this
  for (let i = 0; i < arguments.length; i++) {
    const regexp = new RegExp(`\\{${i}\\}`, 'gm')
    s = s.replace(regexp, arguments[i] || '')
  }
  return s
}
