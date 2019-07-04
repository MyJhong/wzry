import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import CategoryEdit from '@/components/CategoryEdit'
import CategoryList from '@/components/CategoryList'
import ItemEdit from '@/components/ItemEdit'
import ItemList from '@/components/ItemList'
import HeroEdit from '@/components/HeroEdit'
import HeroList from '@/components/HeroList'

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
        }
      ]
    }
  ]
})
