import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AppRouterTasks from '../components/AppRouterTasks.vue';
import AppDinamicRoutes from '../components/AppDinamicRoutes.vue';
import AppCarDinamic from '../components/AppCarDinamic.vue';
import AppCarFullInfo from '../components/AppCarFullInfo.vue';
import AppPage2 from '../components/AppPage2.vue';
import AppPage3 from '../components/AppPage3.vue';
import App404Page from '../components/App404Page.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AppRouterTasks,
    name: 'main',
  },
  {
    path: '/dinamic-routes',
    component: AppDinamicRoutes,
    children: [
      {
        path: 'cars/:id',
        component: AppCarDinamic,
        name: 'cars',
        children: [
          {
            path: 'fullInfo',
            component: AppCarFullInfo,
            name: 'fullInfo',
          },
        ],
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
  {
    path: '/not',
    redirect: '/dinamic-routes',
  },
  {
    path: '/:pathMatch(.*)*',
    component: App404Page,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }

    return {
      left: 0,
      top: 0,
    };
  },
});

export default router;
