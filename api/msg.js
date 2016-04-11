var _ = require('underscore');

module.exports = function(router){
  router.post('/api/msgs', function *(next) {
    this.body = this.params;
  });
  router.get('/api/msgs', function *(next) {
    this.body = this.params;
  });
}

