import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Todo from '../views/Todo.vue'

var map = {
  '/': {
    name: 'index',
    component: Home
  },
  '/todo': {
    name: 'todo',
    component: Todo
  },
  '/about': {
    name: 'about',
    component: About
  }
};

module.exports = map;
