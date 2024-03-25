import { createRouter, createWebHistory } from 'vue-router';
import { formBuilderRoute } from '@/router/form-builder.route';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...formBuilderRoute]
});

export default router;
