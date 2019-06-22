const router = require('koa-router')()
const Category = require('../../models/Category')

router.prefix('/admin/api')

router.post('/categories', async (ctx) => {
  const model = await Category.create(ctx.body)
  ctx.body= model
})


module.exports = router
