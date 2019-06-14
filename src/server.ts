// ts 需要整体加载
import * as program from 'commander';
import * as Koa from 'koa';
import * as KoaBodyParser from 'koa-bodyparser';
import * as Router from 'koa-router';
import { error } from './libs/error_handle';
import { log } from './libs/log';

const server = new Koa();
server.use(KoaBodyParser());
log(server);
error(server);

const router = new Router();
router.use('/',require('./routers/index'));
server.use(router.routes());

program
  .version('1.0.0')
  .option('-h, --host <hostname>', 'config server host', '0.0.0.0')
  .option('-p, --port <port>', 'config server port', 1996)
  .parse(process.argv);

server.listen(program.port, program.host,() => {
  console.log(`Server running on ${program.host}:${program.port}`);
});
