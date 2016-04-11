var koa = require('koa');
var app = koa();
var _ = require('underscore');

var views = require('koa-views');


app.use(views('example'));

app.use(require('koa-validate')());
var router = require('koa-router')();

app.use(require('koa-body')());

//路由
router.post('/api/todos', function *(next) {

  var todo = this.request.body;
  var todos = this.app.todos || [];

  todos.push(todo);

  this.app.todos = todos;
  
  console.info(this.app.todos);

  this.body = {
    status: 'OK',
    msg: '操作成功!',
    data: todo
  };

});

router.get('/', function *(next) {
  yield this.render('index');
});

router.get('/todo', function *(next) {
  yield this.render('index');
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3002, function () {
  console.info('start');
});


