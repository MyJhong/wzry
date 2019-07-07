module.exports = options => {
  const assert = require('http-assert')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../models/AdminUser')

  return async (ctx, next) => {
    const token = String(ctx.request.headers.authorization || '').split(' ').pop()
    assert(token, 401, '请先登录')
    const {id} = jwt.verify(token, 'Jhong')
    assert(id, 401, '请先登录')
    ctx.request.user = await AdminUser.findById(id)
    assert(ctx.request.user, 401, '请先登录')
    await next()
  }
}
