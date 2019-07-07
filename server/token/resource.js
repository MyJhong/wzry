module.exports = options => {
  return async (ctx, next) => {
    const str = ctx.params.resource
    const arr = str.split('/', 1).toString()
    const modelName = require('inflection').classify(arr)
    ctx.Model = require(`../models/${modelName}`)
    await next()
  }
}
