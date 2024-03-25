<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(['currentField']);

let multipleSelection = ref([]);

const handleCurrentChange = (row) => {
  row.edit = !row.edit;
};
const handleDelete = () => {
  for (let i = 0; i < multipleSelection.value.length; i++) {
    let ele = multipleSelection[i];
    let index = props.currentField.tableDatas.findIndex(function (element) {
      return ele.id == element.id;
    });
    if (index >= 0) props.currentField.tableDatas.splice(index, 1);
  }
  multipleSelection.value = [];
};
const handleAdd = () => {
  var columns = props.currentField.tableColumns;
  let newEle = {
    id: new Date().getTime(),
    edit: true
  };

  columns.forEach(function (ele) {
    newEle[ele.prop] = '';
  });

  props.currentField.tableDatas.push(newEle);
};
const handleSelectionChange = (val) => {
  multipleSelection.value = val;
};
</script>

<template>
  <div>
    <el-card>
      <el-button size="small" type="primary" @click="handleAdd">Add</el-button>
      <el-button size="small" type="danger" @click="handleDelete">Delete</el-button>
      <el-table
        :data="currentField.tableDatas"
        stripe
        style="width: 100%"
        @row-dblclick="handleCurrentChange"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </el-card>
  </div>
</template>
