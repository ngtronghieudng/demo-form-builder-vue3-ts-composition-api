<script lang="ts" setup>
import { useManageFormBuilderStore } from '@/stores/manage-form-builder';
import { ref } from 'vue';

const manageFormBuilderStore = useManageFormBuilderStore();

const labelPosition = ref('top');
const fieldProperties = ref({});
const rules = ref({});
</script>

<template>
  <el-form :model="fieldProperties" :rules="rules" :label-position="labelPosition" ref="fieldProperties">
    <el-form-item label="ID">
      <div>{{ manageFormBuilderStore.activeField.id }}</div>
    </el-form-item>

    <el-form-item label="Layout - Max value is 24">
      <base-input-number v-model="manageFormBuilderStore.activeField.span" :min="8" :max="24" />
    </el-form-item>

    <el-form-item label="Label">
      <base-input v-model="manageFormBuilderStore.activeField.label" />
    </el-form-item>

    <el-form-item label="Type">
      <base-input v-model="manageFormBuilderStore.activeField.type" />
    </el-form-item>

    <el-form-item label="Style">
      <base-input v-model="manageFormBuilderStore.activeField.style" />
    </el-form-item>

    <el-form-item label="Class">
      <base-input v-model="manageFormBuilderStore.activeField.class" />
    </el-form-item>

    <el-form-item label="Name">
      <base-input v-model="manageFormBuilderStore.activeField.name" />
    </el-form-item>

    <el-form-item label="Value">
      <base-input v-model="manageFormBuilderStore.activeField.buttonText" />
    </el-form-item>

    <el-form-item label="Access">
      <base-input v-model="manageFormBuilderStore.activeField.access" />
    </el-form-item>
  </el-form>
</template>
