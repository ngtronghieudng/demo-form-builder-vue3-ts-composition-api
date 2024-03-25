<script lang="ts" setup>
import { useManageFormBuilderStore } from '@/stores/manage-form-builder';
import { ref } from 'vue';

const manageFormBuilderStore = useManageFormBuilderStore();

const labelPosition = ref('top');
const fieldProperties = ref({});
const rules = ref({});

const showTextChange = (value: any) => {
  if (value && manageFormBuilderStore.activeField.showScore) {
    manageFormBuilderStore.activeField.showScore = false;
  }
};
const showScoreChange = (value: any) => {
  if (value && manageFormBuilderStore.activeField.showText) {
    manageFormBuilderStore.activeField.showText = false;
  }
};
</script>

<template>
  <el-form :model="fieldProperties" :rules="rules" :label-position="labelPosition" ref="fieldProperties">
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
    <el-form-item>
      <el-form-item label="Colors">
        <el-row :gutter="3">
          <el-col :span="7" v-for="(color, index) in manageFormBuilderStore.activeField.colors" :key="index">
            <base-input v-model="manageFormBuilderStore.activeField.colors[index]" />
          </el-col>
        </el-row>
      </el-form-item>
    </el-form-item>
    <el-form-item label="Show Text">
      <el-switch @change="showTextChange" v-model="manageFormBuilderStore.activeField.showText"></el-switch>
    </el-form-item>
    <el-form-item label="Disabled">
      <el-switch v-model="manageFormBuilderStore.activeField.disabled"></el-switch>
    </el-form-item>

    <el-form-item label="Texts" v-show="manageFormBuilderStore.activeField.showText">
      <el-row :gutter="3">
        <el-col :span="4" v-for="(text, index) in manageFormBuilderStore.activeField.texts" :key="index">
          <base-input v-model="manageFormBuilderStore.activeField.texts[index]"></base-input>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item label="Show Score">
      <el-switch @change="showScoreChange" v-model="manageFormBuilderStore.activeField.showScore"></el-switch>
    </el-form-item>
    <el-form-item label="Score Unit" v-show="manageFormBuilderStore.activeField.showScore">
      <base-input v-model="manageFormBuilderStore.activeField.scoreUnit"></base-input>
    </el-form-item>
  </el-form>
</template>
