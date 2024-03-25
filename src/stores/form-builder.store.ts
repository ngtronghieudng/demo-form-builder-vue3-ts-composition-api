import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useFormBuilderStore = defineStore('formBuilderStore', () => {
  const formElements = ref<any[]>([]);
  const activeField = ref({});

  const getters = () => {
    return {
      getActiveField: computed(() => activeField.value),
      getFormElements: computed(() => formElements.value)
    };
  };

  const setters = () => {
    return {
      setActiveField: () => {},
      setFormElements: () => {}
    };
  };

  return { ...getters(), ...setters() };
});
