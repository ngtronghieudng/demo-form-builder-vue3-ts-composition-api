import { getCurrentInstance } from 'vue';

export function useConstants() {
  return getCurrentInstance()!.appContext.config.globalProperties.$constantsPlugin;
}
