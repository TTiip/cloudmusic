import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = () => import(/* webpackChunkName: 'Recommend' */ 'components/Recommend')
const MusicList = () => import(/* webpackChunkName: 'MusicList' */ 'components/MusicList')
const Singer = () => import(/* webpackChunkName: 'Singer' */ 'components/Singer')
const SingerDetail = () => import(/* webpackChunkName: 'SingerDetail' */ 'components/SingerDetail')
const Rank = () => import(/* webpackChunkName: 'Rank' */ 'components/Rank')
const RankDetail = () => import(/* webpackChunkName: 'RankDetail' */ 'components/RankDetail')
const Search = () => import(/* webpackChunkName: 'Search' */ 'components/Search')
const User = () => import(/* webpackChunkName: 'User' */ 'components/User')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: MusicList
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: RankDetail
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: 'singer/:id',
          component: SingerDetail
        },
        {
          path: 'list/:id',
          component: MusicList
        }
      ]
    },
    {
      path: '/user',
      component: User
    }
  ]
})
