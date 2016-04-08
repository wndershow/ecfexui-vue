var koa = require('koa');
var app = koa();

var views = require('koa-views');

app.use(views('example'));

app.use(function* (next) {
  yield this.render('index');
});

app.listen(3002,function(){
  console.info('start');
});


