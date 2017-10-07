const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');

const app = new Koa();
const router = new Router();

const mailData = require('./mail/mail.js');

router.get('/api/mail', function (ctx,next) {
    ctx.body = mailData;
});

const mailDetail = require('./mail/mail.js');

router.get('/api/mail/detail', function (ctx,next) {
    ctx.body = mailDetail;
});

const userData = require('./user/user.js');

router.get('/api/user', function (ctx,next) {
    ctx.body = userData;
});

const userDetail = require('./user/user.js');

router.get('/api/user/detail', function (ctx,next) {
    ctx.body = userDetail;
});


app.use(router.routes())
   .use(router.allowedMethods())
   .use(serve(__dirname + '/dist'));
app.listen(3000);
console.log('项目已启动,正在监听')
