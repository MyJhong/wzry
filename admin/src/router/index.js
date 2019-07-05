import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

import CategoryEdit from '@/components/CategoryEdit'
import CategoryList from '@/components/CategoryList'

import ItemEdit from '@/components/ItemEdit'
import ItemList from '@/components/ItemList'

import HeroEdit from '@/components/HeroEdit'
import HeroList from '@/components/HeroList'

import ArticleEdit from '@/components/ArticleEdit'
import ArticleList from '@/components/ArticleList'

import AdEdit from '@/components/AdEdit'
import AdList from '@/components/AdList'

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
        },
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
        }
      ]
    }
  ]
})
