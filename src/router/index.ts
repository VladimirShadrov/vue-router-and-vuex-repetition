import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AppRouterTasks from '../components/AppRouterTasks.vue';
import AppDinamicRoutes from '../components/AppDinamicRoutes.vue';
import AppCarDinamic from '../components/AppCarDinamic.vue';
import AppCarFullInfo from '../components/AppCarFullInfo.vue';
import AppPage2 from '../components/AppPage2.vue';
import AppPage3 from '../components/AppPage3.vue';

// type ForScroll = {
//   [key: string]: number;
// };

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
        path: 'car/:id',
        component: AppCarDinamic,
        name: 'car',
        children: [
          {
            path: 'full-info',
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
  },
});

export default router;
