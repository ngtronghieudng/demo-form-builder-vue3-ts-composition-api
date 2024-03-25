<script lang="ts" setup>
import { useManageFormBuilderStore } from '@/stores/manage-form-builder';
import { ref } from 'vue';

const manageFormBuilderStore = useManageFormBuilderStore();

const formData = ref({});
const rules = ref({});
const accessRoles = ref(false);

const typeOptions = [
  {
    value: 'text',
    label: 'Text Field'
  },
  {
    value: 'password',
    label: 'Password'
  },
  {
    value: 'email',
    label: 'Email'
  },
  {
    value: 'color',
    label: 'Color'
  },
  {
    value: 'tel',
    label: 'Telephone'
  },
  {
    value: 'time',
    label: 'Time'
  }
];

const accessRolesOptions = [
  {
    value: 'submitter',
    label: 'Submitter'
  },
  {
    value: 'approver',
    label: 'Approver'
  }
];
</script>

<template>
  <el-form :model="formData" :rules="rules" label-position="top" ref="formData">
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
      <base-checkbox v-model="accessRoles" label="Limit access to one or more of the following roles:" />
      <base-checkbox-group
        v-if="accessRoles"
        v-model="manageFormBuilderStore.activeField.accessRoles"
        :options="accessRolesOptions"
      />
    </el-form-item>

    <el-form-item label="Value">
      <base-input v-model="manageFormBuilderStore.activeField.value" />
    </el-form-item>

    <el-form-item label="Type">
      <base-select v-model="manageFormBuilderStore.activeField.type" :options="typeOptions" />
    </el-form-item>

    <el-form-item label="Max Length">
      <base-input-number v-model="manageFormBuilderStore.activeField.maxlength" :min="0" />
    </el-form-item>

    <el-form-item label="Prepend">
      <base-input v-model="manageFormBuilderStore.activeField.prepend" />
    </el-form-item>

    <el-form-item label="Append">
      <base-input v-model="manageFormBuilderStore.activeField.append" />
    </el-form-item>
  </el-form>
</template>
