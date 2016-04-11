var _ = require('underscore');

module.exports = function(router){
  router.use('/', function *(next) {

    var method = this.request.method;
    var params = {};

    if(method == 'GET'){
      params = this.request.query;
    }else if(method == 'POST'){
      params = this.request.body;
    }

    if(!this.tools.checkSign(params.sign,params,'ding')){
      this.body = this.apiError('签名错误!');
      return;
    }

    this.params = params;

    yield next;
  });
}

