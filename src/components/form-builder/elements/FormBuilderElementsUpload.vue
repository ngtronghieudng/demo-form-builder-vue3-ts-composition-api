<script setup lang="ts">
import { computed, ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';

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
const fileList = ref([]);

const handleRemove = (file: any, fileList: any) => {
  console.log(file, fileList);
};
const handlePreview = (file: any) => {
  console.log(file);
};
const handleExceed = (files: any, fileList: any) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`
  );
};
const beforeRemove = (file: any, fileList: any) => {
  return ElMessageBox.confirm(`Cancel the transfert of ${file.name} ?`);
};
</script>
<template>
  <el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
    <el-upload
      v-model="attributesBinding"
      :action="currentField.uploadURL"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">Click to upload</el-button>
      <template v-slot:tip>
        <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
      </template>
    </el-upload>
  </el-form-item>
</template>
