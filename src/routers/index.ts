import * as Router from 'koa-router';
let router = new Router();

router.get('',async ctx => {
  ctx.body = 'hello world';
})

module.exports = router.routes();
