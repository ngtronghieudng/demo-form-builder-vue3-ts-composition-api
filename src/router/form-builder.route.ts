import constants from '@/constants';

export const formBuilderRoute = [
  {
    path: constants.routePages.HOME,
    component: () => import('@/pages/HomePage.vue')
  }
];
