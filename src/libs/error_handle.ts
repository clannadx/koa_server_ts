export const error = (server: import('koa') <any, {}>) => {
  server.use(async (ctx,next) => {
    try {
      await next();
    } catch (error) {
      console.log(error);
      ctx.body = '服务器正在维护'
    }
  })
}
