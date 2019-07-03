const router = require('koa-router')()


router
  .prefix('/admin/api/rest/:resource')
  .all('*', async (ctx, next) => {
    const str = ctx.params.resource
    const arr = str.split("/", 1).toString()
    const modelName = require('inflection').classify(arr)
    ctx.Model = require(`../../models/${modelName}`)
    await next()
  })
  .post('/', async (ctx) => {
    const model = await ctx.Model.create(ctx.request.body)
    ctx.body= model
  })
  .get('/', async (ctx) => {
    const items = await ctx.Model.find().populate('parent').limit(10)
    ctx.body = items
  })
  .get('/:id', async (ctx) => {
    const model = await ctx.Model.findById(ctx.params.id)
    ctx.body= model
  })
  .put('/:id', async (ctx) => {
    const model = await ctx.Model.findByIdAndUpdate(ctx.params.id ,ctx.request.body)
    ctx.body= model
  })
  .delete('/:id', async (ctx) => {
    await ctx.Model.findByIdAndDelete(ctx.params.id ,ctx.request.body)
    ctx.body= {success: true}
  })


module.exports = router
