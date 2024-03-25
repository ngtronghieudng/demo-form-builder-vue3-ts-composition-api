<script lang="ts" setup>
import { useManageFormBuilderStore } from '@/stores/manage-form-builder';
import { ref } from 'vue';
import { Plus, Delete } from '@element-plus/icons-vue';

const manageFormBuilderStore = useManageFormBuilderStore();

const formData = ref({});
const rules = ref({});
const accessRoles = ref(false);

const deleteOption = (option: any, index: number) => {
  option.splice(index, 1);
};

const addOption = (option: any) => {
  let count = option.length + 1;

  option.push({
    optionLabel: 'Option Label ' + count,
    optionValue: 'Option ' + count
  });
};

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

    <el-form-item label="Inline">
      <base-checkbox v-model="manageFormBuilderStore.activeField.inline" label="Display radio inline" />
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

    <el-form-item label='Enable "Other"'>
      <base-checkbox
        v-model="manageFormBuilderStore.activeField.enableOther"
        label="Let users enter an unlisted option"
      />
    </el-form-item>

    <el-form-item label="Options">
      <ul class="properties__optionsul tw-list-none">
        <li class="properties__optionslist">
          <el-row :gutter="5">
            <el-col :span="10">Label</el-col>
            <el-col :span="10">Value</el-col>
            <el-col :span="4"></el-col>
          </el-row>
        </li>

        <li
          v-for="(item, index) in manageFormBuilderStore.activeField.options"
          :key="index"
          class="properties__optionslist"
        >
          <el-row :gutter="5">
            <el-col :span="10">
              <el-input v-model="item.optionLabel">{{ item.optionLabel }}</el-input>
            </el-col>
            <el-col :span="10">
              <el-input v-model="item.optionValue">{{ item.optionValue }}</el-input>
            </el-col>
            <el-col :span="4">
              <base-button
                @click="deleteOption(manageFormBuilderStore.activeField.options, index)"
                v-show="manageFormBuilderStore.activeField.options.length > 1"
                :icon="Delete"
                type="danger"
              />
            </el-col>
          </el-row>
        </li>
      </ul>

      <base-button type="text" @click="addOption(manageFormBuilderStore.activeField.options)" class="tw-ml-auto">
        Add Option
        <el-icon class="el-icon--right"><Plus /></el-icon>
      </base-button>
    </el-form-item>
  </el-form>
</template>
