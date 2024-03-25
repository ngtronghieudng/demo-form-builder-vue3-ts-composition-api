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
  <div class="block">
    <el-carousel :height="currentField.controlHeight + 'px'" v-model="inputData" v-bind="attributesBinding">
      <el-carousel-item
        :height="currentField.controlHeight + 'px'"
        v-for="(item, index) in currentField.items"
        :key="index"
      >
        <el-image style="width: 100%; height: 100%" :src="item.url" fit="fill"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
