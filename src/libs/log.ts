import * as fs from 'fs';
import timestampToTime from './util';

export const log = (server: import('koa') <any, {}>) => {
  server.use(async (ctx,next) => {
    await fs.appendFile('./log',`[${timestampToTime(Date.now())} ${ctx.method} ${ctx.url}]\r\n`,err => {
      if (err) {
        console.log(err)
      }
    })
    await next()
  })
}
