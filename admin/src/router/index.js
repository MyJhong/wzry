import Vue from 'vue'
import Router from 'vue-router'

// 登录页面
import Login from '@/components/Login'

// 后台界面
import Main from '@/components/Main'

// 分类
import CategoryEdit from '@/components/CategoryEdit'
import CategoryList from '@/components/CategoryList'

// 物品
import ItemEdit from '@/components/ItemEdit'
import ItemList from '@/components/ItemList'

// 英雄
import HeroEdit from '@/components/HeroEdit'
import HeroList from '@/components/HeroList'

// 新闻
import ArticleEdit from '@/components/ArticleEdit'
import ArticleList from '@/components/ArticleList'

// 广告
import AdEdit from '@/components/AdEdit'
import AdList from '@/components/AdList'

// 管理员
import AdminUserEdit from '@/components/AdminUserEdit'
import AdminUserList from '@/components/AdminUserList'

Vue.use(Router)

const router = new Router({
  routes: [
    // 登录
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {isPublic: true}
    },
    // 后台页面
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        // 分类
        {
          path: '/categories/create',
          component: CategoryEdit
        },
        {
          path: '/categories/list',
          component: CategoryList
        },
        {
          path: '/categories/edit/:id',
          component: CategoryEdit,
          props: true
        },
        // 物品
        {
          path: '/items/create',
          component: ItemEdit
        },
        {
          path: '/items/list',
          component: ItemList
        },
        {
          path: '/items/edit/:id',
          component: ItemEdit,
          props: true
        },
        // 英雄
        {
          path: '/heroes/create',
          component: HeroEdit
        },
        {
          path: '/heroes/list',
          component: HeroList
        },
        {
          path: '/heroes/edit/:id',
          component: HeroEdit,
          props: true
        },
        // 新闻
        {
          path: '/articles/create',
          component: ArticleEdit
        },
        {
          path: '/articles/list',
          component: ArticleList
        },
        {
          path: '/articles/edit/:id',
          component: ArticleEdit,
          props: true
        },
        // 广告
        {
          path: '/ads/create',
          component: AdEdit
        },
        {
          path: '/ads/list',
          component: AdList
        },
        {
          path: '/ads/edit/:id',
          component: AdEdit,
          props: true
        },
        // 管理员
        {
          path: '/admin_users/create',
          component: AdminUserEdit
        },
        {
          path: '/admin_users/list',
          component: AdminUserList
        },
        {
          path: '/admin_users/edit/:id',
          component: AdminUserEdit,
          props: true
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})
export default router
