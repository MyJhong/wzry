const multer = require('koa-multer')
const router = require('koa-router')()

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  }
})

var upload = multer({ storage: storage });

router.post('/admin/api/upload', upload.single('file'), async (ctx, next) => {
  const file = ctx.req.file
  file.url = `http://localhost:3000/uploads/${file.filename}`
  ctx.body = file
})

module.exports = router