import VueRouter from "vue-router";
import Vue from 'vue'

Vue.use(VueRouter);
const router = new VueRouter({
  mode:'history',
  routes: [
    {
      path: '',
      redirect: '/home',
    }, {
      path: '/home',
      component: () => import('view/home/index.vue'),
      meta: {
        title: '首页'
      }
    }, {
      path: '/category',
      component: () => import('view/category/index.vue'),
      meta: {
        title: '分类'
      }
    }, {
      path: '/shopcar',
      component: () => import('view/shopcar/index.vue'),
      meta: {
        title: '购物车'
      }

    }, {
      path: '/profile',
      component: () => import('view/profile/Profile.vue'),
      meta: {
        title: '我的'
      }
    },
    {
      path: '/detail/:iid',
      component: () => import('view/detail/index.vue'),
      meta: {
        title: '详情'
      }
    }
  ]
})
export default router

