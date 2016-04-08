import Home from '../views/Home.vue'
import About from '../views/About.vue'

var map = {
  '/': {
    name: 'index',
    component: Home
  },
  '/about': {
    name: 'about',
    component: About
  }
};

module.exports = map;
