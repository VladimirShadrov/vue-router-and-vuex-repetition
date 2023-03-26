import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AppRouterTasks from '../components/AppRouterTasks.vue';
import AppDinamicRoutes from '../components/AppDinamicRoutes.vue';
import AppCarDinamic from '../components/AppCarDinamic.vue';
// import AppCarFullInfo from '../components/AppCarFullInfo.vue';
import AppPage2 from '../components/AppPage2.vue';
import AppPage3 from '../components/AppPage3.vue';
import App404Page from '../components/App404Page.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AppRouterTasks,
  },
  {
    path: '/dinamic-routes',
    component: AppDinamicRoutes,
    children: [
      {
        path: 'cars/:id',
        component: AppCarDinamic,
      },
    ],
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
