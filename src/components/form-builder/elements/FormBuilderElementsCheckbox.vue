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
  <el-form-item :label="currentField.label" :label-width="currentField.labelWidth" :required="currentField.isRequired">
    <el-tooltip class="box-item" effect="dark" :content="currentField.helpText" placement="bottom-start">
      <el-checkbox-group v-model="inputData" v-bind="attributesBinding">
        <el-checkbox
          v-for="item in currentField.options"
          :key="item.optionValue"
          :label="item.optionLabel"
          :disabled="item.disabled"
        >
        </el-checkbox>
      </el-checkbox-group>
    </el-tooltip>
  </el-form-item>
</template>
