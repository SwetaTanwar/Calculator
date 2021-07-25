function isEmpty (obj) {
  if (!obj) {
    return true
  }

  switch (obj.constructor) {
    case Object:
      return Object.keys(obj).length === 0
    case Array:
      return obj.length === 0
    default:
      return false
  }
}
