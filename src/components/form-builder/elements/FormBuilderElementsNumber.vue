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
  attribute.min = props.currentField.min ?? 0;
  attribute.max = props.currentField.max ?? 10;
  attribute.step = props.currentField.step ?? 1;
  attribute.value = props.currentField.value ?? 0;

  return attribute;
});
</script>

<template>
  <el-form-item :label="currentField.label" :label-width="currentField.labelWidth" :required="currentField.isRequired">
    <p>{{ currentField.prepend }}</p>
    <el-tooltip class="box-item" effect="dark" :content="currentField.helpText" placement="bottom-start">
      <el-input-number v-model="inputData" v-bind="attributesBinding" :placeholder="currentField.placeholder">
      </el-input-number>
    </el-tooltip>

    <p>{{ currentField.append }}</p>
  </el-form-item>
</template>
