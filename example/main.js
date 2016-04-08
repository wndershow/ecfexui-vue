import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';
import './../src/exui.scss';

//安装路由插件
Vue.use(Router);

var router = new Router({
  hashbang:false,
  history:true
});

router.map(require('./routers'));

router.redirect({
  '*': '/'
});

router.start(App, '#app');
