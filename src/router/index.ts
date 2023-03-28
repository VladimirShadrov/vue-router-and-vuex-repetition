import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
/**
 * ROUTER
 */
import AppRouterTasks from '../components/vueRouter/AppRouterTasks.vue';
import AppDinamicRoutes from '../components/vueRouter/AppDinamicRoutes.vue';
import AppCarDinamic from '../components/vueRouter/AppCarDinamic.vue';
import AppCarFullInfo from '../components/vueRouter/AppCarFullInfo.vue';
import App404Page from '../components/vueRouter/App404Page.vue';

/**
 * COMPOSITION API
 */
import AppCompositionApi from '../components/composition/AppCompositionApi.vue';

/**
 *
 */
import AppPage3 from '../components/AppPage3.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AppRouterTasks,
    name: 'main',
  },
  {
    path: '/dinamic-routes',
    component: AppDinamicRoutes,
  },
  {
    path: '/composition',
    component: AppCompositionApi,
  },
  {
    path: '/page3',
    component: AppPage3,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
