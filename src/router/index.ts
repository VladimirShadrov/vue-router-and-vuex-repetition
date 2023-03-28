import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AppRouterTasks from '../components/router/AppRouterTasks.vue';
import AppDinamicRoutes from '../components/router/AppDinamicRoutes.vue';
import AppCarDinamic from '../components/router/AppCarDinamic.vue';
import AppCarFullInfo from '../components/router/AppCarFullInfo.vue';
import AppPage2 from '../components/router/AppPage2.vue';
import AppPage3 from '../components/router/AppPage3.vue';
import App404Page from '../components/router/App404Page.vue';

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
    path: '/page2',
    component: AppPage2,
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
