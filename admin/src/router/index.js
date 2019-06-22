import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import CategoryEdit from '@/components/CategoryEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/categories/create',
          component: CategoryEdit
        }
      ]
    }
  ]
})
