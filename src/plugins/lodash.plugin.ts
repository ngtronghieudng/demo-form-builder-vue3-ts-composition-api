import type { App } from 'vue';
import lodash from 'lodash';

export default {
  install: (app: App) => {
    app.config.globalProperties.$lodashPlugin = lodash;
  }
};
