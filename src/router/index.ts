import { route } from 'quasar/wrappers'
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'
import { StateInterface } from '../store'
import routes from './routes'
import { LoginPath, loginStatus } from 'src/service/login'

const createHistory =
  process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory

export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,

  // Leave this as is and make changes in quasar.conf.js instead!
  // quasar.conf.js -> build -> vueRouterMode
  // quasar.conf.js -> build -> publicPath
  history: createHistory(
    process.env.MODE === 'ssr'? void 0: process.env.VUE_ROUTER_BASE,
  ),
})

Router.beforeEach((to, from, next) => {
  if (!loginStatus.isLogin) {
    if (to.path === LoginPath) {
      return next()
    }

    return next(LoginPath)
  }

  if (to.path === LoginPath) {
    return next('/')
  }

  next()
})

export default route<StateInterface>(function (/* { store, ssrContext } */) {
  return Router
})
