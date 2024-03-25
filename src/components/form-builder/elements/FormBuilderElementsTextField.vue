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

  attribute.maxlength = props.currentField.maxlength ?? 10;
  attribute['show-word-limit'] = props.currentField.showWordLimit ?? true;
  attribute.disabled = props.currentField.disabled ?? false;
  attribute.placeholder = props.currentField.placeholder ?? '';
  attribute.name = props.currentField.name ?? '';
  attribute.type = props.currentField.type.value ?? 'text';

  return attribute;
});
</script>

<template>
  <el-form-item :label="currentField.label" :label-width="currentField.labelWidth" :required="currentField.isRequired">
    <el-tooltip class="box-item" effect="dark" :content="currentField.helpText" placement="bottom-start">
      <el-input v-model="inputData" v-bind="attributesBinding" :class="currentField.class">
        <template v-if="currentField.prepend !== ''" #prepend>
          {{ currentField.prepend }}
        </template>

        <template v-if="currentField.append !== ''" #append>
          {{ currentField.append }}
        </template>
      </el-input>
    </el-tooltip>
  </el-form-item>
</template>
