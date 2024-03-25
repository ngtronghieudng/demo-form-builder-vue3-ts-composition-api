<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
// import { formBuilderComponents } from '@/components/form-builder/form-builder-manager';
import FormBuilderElements from '@/components/form-builder/FormBuilderElements.vue';
import { useFormBuilderStore } from '@/stores/form-builder.store';
import { VueDraggableNext } from 'vue-draggable-next';
// import ManageFormBuilderMenu from '@/components/pages/manage-form-builder/ManageFormBuilderMenu.vue';
// import ManageFormBuilderProperties from '@/components/pages/manage-form-builder/manage-form-builder-properties/ManageFormBuilderProperties.vue';
// import { useLodash } from '@/composables/useLodash';

// const lodash = useLodash();
const VueDraggable = VueDraggableNext;
const formBuilderStore = useFormBuilderStore();

let tabIndex = 1;
const formNameRef = ref({
  title: 'Untitled',
  edit: false
});
const editableTabsValue = ref('1');
const editableTabs = ref([
  {
    label: formNameRef.value.title,
    name: `${tabIndex}`
  }
]);

const newForm = () => {
  const _formObj = {
    title: formNameRef.value.title,
    fields: []
  };
};

onMounted(() => {
  newForm();
});

const editElementProperties = (field: any) => {
  const isGeneratedUniqId = field?.id?.substring(field?.id?.indexOf('-') + 1);

  if (!isGeneratedUniqId) {
    field.id = field.id + Date.now();
  }
};

const _handleTabsEdit = (targetName: string, action: 'remove' | 'add') => {
  if (action === 'add') {
    const newTabName = `${++tabIndex}`;
    editableTabs.value.push({
      label: `Untitled ${newTabName}`,
      name: newTabName
    });
    editableTabsValue.value = newTabName;
  } else if (action === 'remove') {
    const tabs = editableTabs.value;
    let activeName = editableTabsValue.value;
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            activeName = nextTab.name;
          }
        }
      });
    }

    editableTabsValue.value = activeName;
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
  }
};

watch(
  () => formNameRef.value.title,
  (newVal: string) => {
    editableTabs.value[0].label = newVal;
  }
);

const deleteElement = (index: any, form: any) => {
  form.splice(index, 1);
};
</script>

<template>
  <el-tabs v-model="editableTabsValue" type="card" editable class="wrapper-tabs">
    <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.label" :name="item.name">
      <el-container>
        <!-- <el-header class="tw-p-0 tw-h-[43px]">
          <ManageFormBuilderMenu :mode="$constants.manageFormBuilder.MODE_TYPES.CREATE" />
        </el-header> -->

        <div class="layout">
          <el-aside width="auto">
            <el-card class="custom-sidebar">
              <FormBuilderElements />
            </el-card>
          </el-aside>

          <el-main>
            <div class="wrapper--forms tw-min-h-0">
              <el-form class="demo-form-inline" label-position="top" @submit.prevent>
                <template v-for="(data, index) in formBuilderStore.getFormElements" :key="`div-${index}`">
                  <div class="section-block" style="margin-bottom: 10px">
                    <div class="meta">
                      <el-row>
                        <input
                          v-if="formNameRef.edit"
                          v-model="formNameRef.title"
                          @blur="formNameRef.edit = false"
                          @keyup.enter="formNameRef.edit = false"
                          v-focus
                          class="form-builder-name tw-bg-transparent tw-border-none tw-outline-none"
                        />
                        <div v-else>
                          <div @click="formNameRef.edit = true" class="form-builder-name">
                            {{ formNameRef.title }}
                          </div>
                        </div>

                        <VueDraggable
                          :list="data.fields"
                          class="dragArea"
                          :group="{ name: 'formBuilder', pull: false, put: true }"
                          :sort="true"
                          ghost-class="sortable__ghost"
                        >
                          <el-col
                            v-for="(field, index) in data.fields"
                            :key="index"
                            v-bind="field"
                            :span="field.span"
                            :class="[
                              'form__group',
                              {
                                'is--active': field === formBuilderStore.getActiveField
                              }
                            ]"
                          >
                            <div @click="editElementProperties(field)">
                              <component
                                :is="field.fieldType"
                                :currentField="field"
                                v-model="field.value"
                                class="form__field"
                              />
                            </div>

                            <div class="form__actiongroup">
                              <el-button-group class="form__actionlist">
                                <el-button size="mini" @click="deleteElement(index, data.fields)"> - </el-button>
                              </el-button-group>
                            </div>
                          </el-col>
                        </VueDraggable>
                      </el-row>
                    </div>
                  </div>
                </template>
              </el-form>
            </div>
          </el-main>

          <el-aside width="100%">
            <el-card class="custom-sidebar tw-relative">
              <ManageFormBuilderProperties v-show="Object.keys(formBuilderStore.getActiveField).length > 0" />
            </el-card>
          </el-aside>
        </div>
      </el-container>
    </el-tab-pane>
  </el-tabs>
</template>
