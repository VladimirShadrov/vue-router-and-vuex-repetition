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
import AppSetup from '../components/composition/pages/AppSetup.vue';
import AppMethods from '../components/composition/pages/AppMethods.vue';
import AppObjects from '../components/composition/pages/AppObjects.vue';
import AppComputed from '../components/composition/pages/AppComputed.vue';
import AppWatch from '../components/composition/pages/AppWatch.vue';
import AppDom from '../components/composition/pages/AppDom.vue';
import AppVModel from '../components/composition/pages/AppVModel.vue';
import AppProps from '../components/composition/pages/AppProps.vue';
import AppEmit from '../components/composition/pages/AppEmit.vue';

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
    name: 'composition',
    children: [
      {
        path: 'setup',
        component: AppSetup,
        name: 'setup',
      },
      {
        path: 'methods',
        component: AppMethods,
        name: 'methods',
      },
      {
        path: 'reactive-objects',
        component: AppObjects,
        name: 'reactive-objects',
      },
      {
        path: 'computed',
        component: AppComputed,
        name: 'computed',
      },
      {
        path: 'watch',
        component: AppWatch,
        name: 'watch',
      },
      {
        path: 'dom',
        component: AppDom,
        name: 'dom',
      },
      {
        path: 'v-model',
        component: AppVModel,
        name: 'v-model',
      },
      {
        path: 'props',
        component: AppProps,
        name: 'props',
      },
      {
        path: 'emit',
        component: AppEmit,
        name: 'emit',
      },
    ],
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
