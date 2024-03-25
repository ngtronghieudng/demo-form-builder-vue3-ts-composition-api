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
  <el-form-item :label="props.currentField.label" :label-width="props.currentField.labelWidth + 'px'">
    <el-switch
      v-model="props.currentField.value"
      :active-text="props.currentField.activeText"
      :inactive-text="props.currentField.inActiveText"
    >
    </el-switch>
  </el-form-item>
</template>
