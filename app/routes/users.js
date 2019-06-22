module.exports = app => {
  const Category = require('../models/Category')
  router.post('/categories', async (ctx) => {
    const model = await Category.create(ctx.body)
    ctx.send(model)
  })

  app.use('/admin/api', router)

} 