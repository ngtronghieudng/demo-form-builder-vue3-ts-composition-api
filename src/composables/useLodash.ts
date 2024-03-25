import { getCurrentInstance } from 'vue';

export function useLodash() {
  return getCurrentInstance()!.appContext.config.globalProperties.$lodashPlugin;
}
