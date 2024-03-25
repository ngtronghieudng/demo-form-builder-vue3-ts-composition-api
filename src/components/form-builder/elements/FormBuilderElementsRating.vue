<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  modelValue: string;
  currentField: Record<string, any>;
}>();

const emits = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const inputData = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emits('update:modelValue', value);
  }
});

const attributesBinding = computed(() => {
  let attribute: Record<string, any> = {};

  attribute.disabled = props.currentField.disabled ?? false;
  attribute.name = props.currentField.name ?? '';

  return attribute;
});
</script>
<template>
  <el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
    <el-rate
      v-model="currentField.value"
      :colors="currentField.colors"
      :texts="currentField.texts"
      :show-text="currentField.showText"
      :disabled="currentField.disabled"
      :show-score="currentField.showScore"
      :score-template="'{value} ' + currentField.scoreUnit"
      allow-half
    >
    </el-rate>
  </el-form-item>
</template>
