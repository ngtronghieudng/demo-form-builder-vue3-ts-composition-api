import { createApp } from 'vue';
import { createPinia } from 'pinia';

import main from '@/layouts/DefaultLayout.vue';
import router from '@/router';
import elementPlus from 'element-plus';

import constants from '@/plugins/constants.plugin';
import baseComponents from '@/plugins/base-components.plugin';
import lodash from '@/plugins/lodash.plugin';

import type { ConstantsProps } from '@/constants';
import '@/assets/styles/common/main.scss';

const app = createApp(main);

app.use(createPinia());
app.use(router);
app.use(elementPlus);

app.use(constants);
app.use(baseComponents);
app.use(lodash);

app.mount('#app');

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $constants: ConstantsProps;
  }
}
