const router = require('koa-router')()


router.prefix('/admin/api/rest/:resource')

router.post('/', async (ctx) => {
  const modelName = require('inflection').classify(ctx.params.resource)
  const Model = require(`../../models/${modelName}`)
  const model = await Model.create(ctx.request.body)
  ctx.body= model
})

router.get('/', async (ctx) => {
  const modelName = require('inflection').classify(ctx.params.resource)
  const Model = require(`../../models/${modelName}`)
  const items = await Model.find().populate('parent').limit(10)
  ctx.body = items
})

router.get('/:id', async (ctx) => {
  const modelName = require('inflection').classify(ctx.params.resource)
  const Model = require(`../../models/${modelName}`)
  const model = await Model.findById(ctx.params.id)
  ctx.body= model
})

router.put('/:id', async (ctx) => {
  const modelName = require('inflection').classify(ctx.params.resource)
  const Model = require(`../../models/${modelName}`)
  const model = await Model.findByIdAndUpdate(ctx.params.id ,ctx.request.body)
  ctx.body= model
})

router.delete('/:id', async (ctx) => {
  const modelName = require('inflection').classify(ctx.params.resource)
  const Model = require(`../../models/${modelName}`)
  await Model.findByIdAndDelete(ctx.params.id ,ctx.request.body)
  ctx.body= {success: true}
})



module.exports = router
