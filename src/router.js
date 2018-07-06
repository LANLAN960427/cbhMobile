import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login/Login'
import Home from './components/Home/Home'
import Index from './views/Index/Index'
import Apply from './views/Apply/Apply'
import Contact from './views/Contact/Contact'
import Users from './views/Users/Users'
import TaskWait from './views/TaskWait/TaskWait'

Vue.use(Router)

export default new Router({
  // mode: "history",
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      redirect: '/index',
      component: Home,
      children: [{
        path: '/index',
        name: 'index',
        component: Index,
        meta: {
          title: '首页' // 页面标题
        }
      }, {
        path: '/taskWait',
        name: 'taskWait',
        component: TaskWait,
        meta: {
          title: '我的待办' // 页面标题
        }
      }, {
        path: '/apply',
        name: 'apply',
        component: Apply,
        meta: {
          title: '应用' // 页面标题
        }
      },
      {
        path: '/contact',
        name: 'contact',
        component: Contact,
        meta: {
          title: '通讯录' // 页面标题
        }
      }, {
        path: '/users',
        name: 'users',
        component: Users,
        meta: {
          title: '用户中心' // 页面标题
        }
      }]
    }
  ]
})
