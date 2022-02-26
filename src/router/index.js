import VueRouter from "vue-router";
import Vue from 'vue'

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: '',
      redirect: '/home',
    }, {
      path: '/home',
      component: () => import('../view/home/index.vue'),
      meta: {
        title: '首页'
      }
    }, {
      path: '/catagory',
      component: () => import('../view/catagory/index.vue'),
      meta: {
        title: '分类'
      }
    }, {
      path: '/shopcart',
      component: () => import('../view/shopcar/index.vue'),
      meta: {
        title: '购物车'
      }

    }, {
      path: '/profile',
      component: () => import('../view/profile/index.vue'),
      meta: {
        title: '我的'
      }
    }
  ]
})
export default router

