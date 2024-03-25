<script lang="ts" setup>
import { useManageFormBuilderStore } from '@/stores/manage-form-builder';
import { ref } from 'vue';

const manageFormBuilderStore = useManageFormBuilderStore();

const formData = ref({});
const labelPosition = ref('top');
const fieldProperties = ref({});
const rules = ref({});
</script>

<template>
  <el-form :model="formData" :rules="rules" :label-position="labelPosition" ref="fieldProperties">
    <el-form-item label="ID">
      <div>{{ manageFormBuilderStore.activeField.id }}</div>
    </el-form-item>

    <el-form-item label="Layout - Max value is 24">
      <base-input-number v-model="manageFormBuilderStore.activeField.span" :min="8" :max="24" />
    </el-form-item>

    <el-form-item label="Required">
      <base-checkbox v-model="manageFormBuilderStore.activeField.isRequired" />
    </el-form-item>

    <el-form-item label="Label">
      <base-input v-model="manageFormBuilderStore.activeField.label" />
    </el-form-item>

    <el-form-item label="Help Text">
      <base-input v-model="manageFormBuilderStore.activeField.helpText" />
    </el-form-item>

    <el-form-item label="Placeholder">
      <base-input v-model="manageFormBuilderStore.activeField.placeholder" />
    </el-form-item>

    <el-form-item label="Class">
      <base-input v-model="manageFormBuilderStore.activeField.class" />
    </el-form-item>

    <el-form-item label="Name">
      <base-input v-model="manageFormBuilderStore.activeField.name" />
    </el-form-item>

    <el-form-item label="Access">
      <base-input v-model="manageFormBuilderStore.activeField.access" />
    </el-form-item>

    <el-form-item label="Value">
      <base-input v-model="manageFormBuilderStore.activeField.value" />
    </el-form-item>

    <el-form-item label="Prepend">
      <base-input v-model="manageFormBuilderStore.activeField.prepend" />
    </el-form-item>

    <el-form-item label="Append">
      <base-input v-model="manageFormBuilderStore.activeField.append" />
    </el-form-item>
  </el-form>
</template>
