import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AppRouterTasks from '../components/AppRouterTasks.vue';
import AppPage1 from '../components/AppPage1.vue';
import AppPage2 from '../components/AppPage2.vue';
import AppPage3 from '../components/AppPage3.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AppRouterTasks,
  },
  {
    path: '/page1',
    component: AppPage1,
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
