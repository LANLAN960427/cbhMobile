import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../src/assets/js/store'
import util from '../src/assets/js/util'
import './registerServiceWorker'
import "normalize.css";
import Vant from 'vant';
import {
  Lazyload
} from 'vant';
import 'vant/lib/vant-css/index.css';
import './assets/css/iconfont.css';
import "./assets/css/theme.less";
import cbhRegion from "./components/Select/Region";
import cbhSelect from "./components/Select/Select";
import axios from './assets/js/request';
import echarts from 'echarts'
import * as custom from './assets/js/filters'
import VueInput from 'vue-input';

Vue.use(Vant);
Vue.use(Lazyload);
Vue.use(cbhRegion);
Vue.use(cbhSelect);
Vue.use(VueInput);
Vue.component('cbh-region', cbhRegion)
Vue.component('cbh-select', cbhSelect)
Vue.prototype.$util = util;
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

// 过滤器
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})

// 图片地址
if (process.env.NODE_ENV === "production") {
  let strPath = window.document.location.pathname;
  let postPath = strPath.substring(0, strPath.substr(1).indexOf("/") + 1);
  if (postPath === '/Screen' || postPath === '/mobile') postPath = ''
  store.commit('servePath', postPath);
} else {
  store.commit('servePath', "http://192.168.2.254/SupplyChain/");
}

// 路由守卫
router.beforeEach((to, from, next) => {
  //如果未匹配到路由
  if (to.name == null) {
    //如果上级也未匹配到路由则跳转首页，如果上级能匹配到则转上级路由
    from.name == null ?
      next({
        name: "index"
      }) :
      next({
        name: from.name
      });
  } else {
    next();
  }
});


window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')