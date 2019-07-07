const router = require('koa-router')()
const assert = require('http-assert')

router.prefix('/admin/api')

router.post('/login', async (ctx, next) => {
  const {username, password} = ctx.request.body
  const AdminUser = require('../../models/AdminUser')
  const user = await AdminUser.findOne({username}).select('+password')
  assert(user, 422, '用户名不存在')
  const isValid = require('bcrypt').compareSync(password, user.password)
  assert(isValid, 422, '密码错误')
  const jwt = require('jsonwebtoken')
  const token = jwt.sign({id: user._id}, 'Jhong')
  ctx.body = {token}
})


module.exports = router
