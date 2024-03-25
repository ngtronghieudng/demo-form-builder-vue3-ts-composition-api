<script setup lang="ts">
import { ref } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
import { formBuilderFields } from '@/components/form-builder/form-builder-manager';
import { useConstants } from '@/composables/useConstants';
import { useLodash } from '@/composables/useLodash';

// Icon imported
import IconShowUi from '@/assets/svg/form-builder/IconShowUI.vue';
import IconList from '@/assets/svg/form-builder/IconList.vue';
import IconTextField from '@/assets/svg/form-builder/IconTextField.vue';
import IconTextArea from '@/assets/svg/form-builder/IconTextArea.vue';
import IconUpload from '@/assets/svg/form-builder/IconUpload.vue';
import IconTime from '@/assets/svg/form-builder/IconTime.vue';
import IconRadio from '@/assets/svg/form-builder/IconRadio.vue';
import IconNumber from '@/assets/svg/form-builder/IconNumber.vue';
import IconDate from '@/assets/svg/form-builder/IconDate.vue';
import IconCheckBox from '@/assets/svg/form-builder/IconCheckBox.vue';
import IconButton from '@/assets/svg/form-builder/IconButton.vue';
import IconTable from '@/assets/svg/form-builder/IconTable.vue';
import IconSelect from '@/assets/svg/form-builder/IconSelect.vue';
import IconRating from '@/assets/svg/form-builder/IconRating.vue';
import IconBanner from '@/assets/svg/form-builder/IconBanner.vue';
import IconSwitch from '@/assets/svg/form-builder/IconSwitch.vue';
import IconDateTime from '@/assets/svg/form-builder/IconDateTime.vue';
import IconHeading from '@/assets/svg/form-builder/IconHeading.vue';
import { Grid } from '@element-plus/icons-vue';

const VueDraggable = VueDraggableNext;
const constants = useConstants();
const lodash = useLodash();
const { fields } = formBuilderFields() || {};

const clone = (field: any) => {
  return lodash.cloneDeep(field);
};

const getFieldsBySections = (sectionTypes: string): Record<string, any>[] => {
  return fields.filter((element: Record<string, any>) => {
    return element.sections === sectionTypes;
  });
};

const layoutFields = ref(getFieldsBySections(constants.formBuilder.SECTION_TYPES.LAYOUTS));
const elementFields = ref(getFieldsBySections(constants.formBuilder.SECTION_TYPES.ELEMENTS));
const widgetFields = ref(getFieldsBySections(constants.formBuilder.SECTION_TYPES.WIDGETS));

const getIcons = (name: string) => {
  let icons = {
    [constants.formBuilder.FIELD_TYPES.TEXT_FIELD]: IconTextField,
    [constants.formBuilder.FIELD_TYPES.RADIO]: IconRadio,
    [constants.formBuilder.FIELD_TYPES.TEXT_AREA]: IconTextArea,
    [constants.formBuilder.FIELD_TYPES.CHECKBOX]: IconCheckBox,
    [constants.formBuilder.FIELD_TYPES.DATE_PICKER]: IconDate,
    [constants.formBuilder.FIELD_TYPES.SELECT]: IconSelect,
    [constants.formBuilder.FIELD_TYPES.BUTTON]: IconButton,
    [constants.formBuilder.FIELD_TYPES.NUMBER]: IconNumber,
    [constants.formBuilder.FIELD_TYPES.TABLE]: IconTable,
    [constants.formBuilder.FIELD_TYPES.CAROUSEL]: IconBanner,
    [constants.formBuilder.FIELD_TYPES.DATETIME_PICKER]: IconDateTime,
    [constants.formBuilder.FIELD_TYPES.HTML]: IconHeading,
    [constants.formBuilder.FIELD_TYPES.RATING]: IconRating,
    [constants.formBuilder.FIELD_TYPES.SWITCH]: IconSwitch,
    [constants.formBuilder.FIELD_TYPES.TIME_PICKER]: IconTime,
    [constants.formBuilder.FIELD_TYPES.UPLOAD]: IconUpload,
    [constants.formBuilder.FIELD_TYPES.CONTAINER]: Grid
  };
  return icons[name as any];
};
</script>

<template>
  <div class="el-tabs__inner">
    <el-row v-if="false">
      <el-col :span="24">
        <h3 class="title tw-font-semibold">Layouts</h3>
      </el-col>

      <el-col :span="24">
        <VueDraggable
          :list="layoutFields"
          :clone="clone"
          class="dragArea"
          :group="{ name: 'layouts', pull: 'clone', put: false }"
          :sort="false"
        >
          <template v-for="(element, index) in layoutFields" :key="index">
            <el-button class="button__sidebar">
              <component :is="getIcons(element.fieldType)" class="tw-w-[16px] tw-h-[13px] tw-mr-[10px]" />
              {{ element.text }}
            </el-button>
          </template>
        </VueDraggable>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <h3 class="flex justify-between title tw-font-semibold tw-flex tw-justify-between">
          Elements
          <span v-if="false">
            <IconList class="tw-w-[24px] tw-h-[24px]" />
            <IconShowUi class="tw-w-[24px] tw-h-[24px] tw-ml-[12px]" />
          </span>
        </h3>
      </el-col>

      <el-col :span="24">
        <VueDraggable
          :list="elementFields"
          :clone="clone"
          class="dragArea"
          :group="{ name: 'elements', pull: 'clone', put: false }"
          :sort="false"
        >
          <template v-for="(element, index) in elementFields" :key="index">
            <el-button class="button__sidebar">
              <component :is="getIcons(element.fieldType)" class="tw-w-[16px] tw-h-[13px] tw-mr-[10px]" />
              {{ element.text }}
            </el-button>
          </template>
        </VueDraggable>
      </el-col>
    </el-row>

    <el-row v-if="false">
      <el-col :span="24">
        <h3 class="title tw-font-semibold">Widgets</h3>
      </el-col>

      <el-col :span="24">
        <VueDraggable
          :list="widgetFields"
          :clone="clone"
          class="dragArea"
          :group="{ name: 'widgets', pull: 'clone', put: false }"
          :sort="false"
        >
          <template v-for="(element, index) in widgetFields" :key="index">
            <el-button class="button__sidebar">
              <component :is="getIcons(element.fieldType)" class="tw-w-[16px] tw-h-[13px] tw-mr-[10px]" />
              {{ element.text }}
            </el-button>
          </template>
        </VueDraggable>
      </el-col>
    </el-row>
  </div>
</template>
