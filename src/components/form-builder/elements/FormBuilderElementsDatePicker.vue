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
    <p>{{ currentField.prepend }}</p>
    <el-tooltip class="box-item" effect="dark" :content="currentField.helpText" placement="top-start">
      <el-date-picker
        v-model="currentField.value"
        type="date"
        :class="currentField.class"
        :placeholder="currentField.placeholder"
      >
      </el-date-picker>
    </el-tooltip>
    <p>{{ currentField.append }}</p>
  </el-form-item>
</template>
