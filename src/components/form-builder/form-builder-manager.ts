import constants from '@/constants';
import FormBuilderElementsTimePicker from '@/components/form-builder/elements/FormBuilderElementsTimePicker.vue';
import FormBuilderElementsHtml from '@/components/form-builder/elements/FormBuilderElementsHtml.vue';
import FormBuilderElementsUpload from '@/components/form-builder/elements/FormBuilderElementsUpload.vue';
import FormBuilderElementsCarousel from '@/components/form-builder/elements/FormBuilderElementsCarousel.vue';
import FormBuilderElementsSwitch from '@/components/form-builder/elements/FormBuilderElementsSwitch.vue';
import FormBuilderElementsRating from '@/components/form-builder/elements/FormBuilderElementsRating.vue';
import FormBuilderElementsDatetimePicker from '@/components/form-builder/elements/FormBuilderElementsDatetimePicker.vue';
import FormBuilderElementsButton from '@/components/form-builder/elements/FormBuilderElementsButton.vue';
import FormBuilderElementsTextField from '@/components/form-builder/elements/FormBuilderElementsTextField.vue';
import FormBuilderElementsRadio from '@/components/form-builder/elements/FormBuilderElementsRadio.vue';
import FormBuilderElementsTable from '@/components/form-builder/elements/FormBuilderElementsTable.vue';
import FormBuilderElementsTextArea from '@/components/form-builder/elements/FormBuilderElementsTextArea.vue';
import FormBuilderElementsDatePicker from '@/components/form-builder/elements/FormBuilderElementsDatePicker.vue';
import FormBuilderElementsNumber from '@/components/form-builder/elements/FormBuilderElementsNumber.vue';
import FormBuilderElementsCheckbox from '@/components/form-builder/elements/FormBuilderElementsCheckbox.vue';
import FormBuilderElementsSelect from '@/components/form-builder/elements/FormBuilderElementsSelect.vue';
import FormBuilderElementsContainer from '@/components/form-builder/elements/FormBuilderElementsContainer.vue';

export const formBuilderComponents = () => {
  return {
    FormBuilderElementsTimePicker,
    FormBuilderElementsHtml,
    FormBuilderElementsUpload,
    FormBuilderElementsCarousel,
    FormBuilderElementsSwitch,
    FormBuilderElementsRating,
    FormBuilderElementsDatetimePicker,
    FormBuilderElementsTable,
    FormBuilderElementsNumber,
    FormBuilderElementsRadio,
    FormBuilderElementsButton,
    FormBuilderElementsTextArea,
    FormBuilderElementsDatePicker,
    FormBuilderElementsTextField,
    FormBuilderElementsCheckbox,
    FormBuilderElementsSelect,
    FormBuilderElementsContainer
  };
};

export const formBuilderFields = () => {
  return {
    fields: [
      {
        fieldType: constants.formBuilder.FIELD_TYPES.TABLE,
        text: 'Table',
        label: 'Table',
        group: 'layouts',
        isUnique: false,
        span: 24,
        sections: 'layouts',
        tableColumns: [
          {
            prop: 'date',
            label: 'Date',
            width: 180
          },
          {
            prop: 'name',
            label: 'Name',
            width: 180
          },
          {
            prop: 'address',
            label: 'Address'
          }
        ],
        tableDatas: [
          {
            id: 1,
            edit: false,
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }
        ]
      },
      {
        fieldType: 'ManageFormBuilderContainer',
        text: 'Container',
        label: 'Container',
        isUnique: false,
        value: '',
        group: 'layouts',
        span: 24,
        advancedOptions: '',
        sections: 'layouts'
      },
      {
        fieldType: constants.formBuilder.FIELD_TYPES.TEXT_FIELD,
        label: 'Text Field',
        text: 'Text Field',
        group: 'elements',
        value: null,
        isRequired: false,
        isUnique: false,
        span: 24,
        labelWidth: '100px',
        showPassword: false,
        disabled: false,
        clearable: false,
        prepend: '',
        append: '',
        maxlength: 10,
        showWordLimit: true,
        sections: 'elements',
        name: '',
        type: '',
        accessRoles: [],
        helpText: '',
        id: 'txtfield-'
      },

      {
        fieldType: constants.formBuilder.FIELD_TYPES.NUMBER,
        label: 'Number',
        text: 'Number',
        value: 0,
        placeholder: '',
        helpText: '',
        group: 'elements',
        isRequired: false,
        isUnique: false,
        span: 24,
        labelWidth: '100px',
        advancedOptions: true,
        disabled: false,
        stepStrictly: false,
        step: 1,
        hasMinValue: true,
        min: 1,
        hasMaxValue: true,
        max: 10,
        sections: 'elements',
        prepend: '',
        append: '',
        id: 'number-'
      },
      {
        fieldType: constants.formBuilder.FIELD_TYPES.TEXT_AREA,
        label: 'Text Area',
        value: null,
        text: 'Text Area',
        group: 'elements',
        isRequired: false,
        isUnique: false,
        span: 24,
        labelWidth: '100px',
        maxlength: 10,
        sections: 'elements',
        rows: 2,
        prepend: '',
        append: '',
        type: '',
        name: '',
        disabled: false,
        accessRoles: [],
        id: 'txtarea-'
      },
      {
        fieldType: constants.formBuilder.FIELD_TYPES.SELECT,
        label: 'Select',
        value: null,
        text: 'Select',
        group: 'elements',
        isRequired: false,
        isHelpBlockVisible: false,
        isPlaceholderVisible: false,
        isUnique: false,
        span: 24,
        labelWidth: '100px',
        isFromUrl: false,
        dataUrl: '',
        sections: 'elements',
        options: [
          {
            optionLabel: 'Option Label 1',
            optionValue: 'Option 1'
          },
          {
            optionLabel: 'Option Label 2',
            optionValue: 'Option 2'
          }
        ],
        advancedOptions: true,
        labelField: 'label',
        valueField: 'value',
        clearable: false,
        multiple: false,
        filterable: false,
        remote: false,
        disabled: false,
        name: '',
        accessRoles: [],
        id: 'select-'
      },
      {
        fieldType: constants.formBuilder.FIELD_TYPES.RADIO,
        label: 'Radio',
        value: '1',
        text: 'Radio',
        group: 'elements',
        isRequired: false,
        isUnique: false,
        span: 24,
        labelWidth: '100px',
        isFromUrl: false,
        options: [
          {
            optionLabel: 'Option Label 1',
            optionValue: 'Option 1'
          },
          {
            optionLabel: 'Option Label 2',
            optionValue: 'Option 2'
          }
        ],
        advancedOptions: true,
        dataUrl: '',
        labelField: 'label',
        valueField: 'value',
        sections: 'elements',
        name: '',
        enableOther: false,
        inline: false,
        accessRoles: [],
        helpText: '',
        class: '',
        id: 'radio-'
      },
      {
        fieldType: constants.formBuilder.FIELD_TYPES.CHECKBOX,
        label: 'Checkbox',
        value: [0],
        text: 'Checkbox',
        helpText: '',
        group: 'elements',
        isRequired: false,
        isHelpBlockVisible: false,
        isPlaceholderVisible: false,
        isUnique: false,
        span: 24,
        labelWidth: 100,
        isFromUrl: false,
        options: [
          {
            optionLabel: 'Option Label 1',
            optionValue: 'Option 1'
          },
          {
            optionLabel: 'Option Label 2',
            optionValue: 'Option 2'
          }
        ],
        advancedOptions: true,
        dataUrl: '',
        labelField: 'label',
        valueField: 'value',
        sections: 'elements',
        name: '',
        enableOther: false,
        inline: false,
        accessRoles: [],
        toggle: false,
        id: 'chbox-'
      },
      {
        fieldType: constants.formBuilder.FIELD_TYPES.BUTTON,
        text: 'Button',
        label: 'Button',
        group: 'elements',
        buttonText: 'Submit',
        isRequired: false,
        isUnique: true,
        span: 24,
        labelWidth: '100px',
        sections: 'elements',
        type: '',
        style: '',
        class: '',
        name: '',
        id: 'btn-'
      },
      {
        fieldType: constants.formBuilder.FIELD_TYPES.DATE_PICKER,
        label: 'Date Picker',
        text: 'Date Picker',
        value: null,
        group: 'elements',
        helpText: '',
        placeholder: '',
        isRequired: false,
        isHelpBlockVisible: false,
        isPlaceholderVisible: false,
        isUnique: false,
        span: 24,
        labelWidth: 100,
        sections: 'elements',
        prepend: '',
        append: '',
        name: '',
        id: 'dpicker-'
      },
      {
        fieldType: constants.formBuilder.FIELD_TYPES.TIME_PICKER,
        label: 'Time',
        value: null,
        text: 'Time',
        group: 'elements',
        isRequired: false,
        isHelpBlockVisible: false,
        isPlaceholderVisible: false,
        isUnique: false,
        span: 24,
        labelWidth: 100,
        sections: 'elements',
        placeholder: '',
        id: 'tpicker-'
      },
      {
        fieldType: constants.formBuilder.FIELD_TYPES.DATETIME_PICKER,
        label: 'Date time',
        text: 'Date-Time',
        value: null,
        group: 'elements',
        isRequired: false,
        isHelpBlockVisible: false,
        isPlaceholderVisible: false,
        isUnique: false,
        span: 24,
        labelWidth: 100,
        sections: 'elements',
        id: 'dtpicker-'
      },
      {
        fieldType: constants.formBuilder.FIELD_TYPES.RATING,
        value: null,
        label: 'Rating',
        text: 'Rating',
        group: 'elements',
        isRequired: false,
        isHelpBlockVisible: false,
        isPlaceholderVisible: false,
        isUnique: false,
        span: 24,
        labelWidth: 100,
        advancedOptions: true,
        rateValue: 0,
        showText: true,
        disabled: false,
        showScore: false,
        scoreUnit: 'points',
        colors: ['#AAAAAA', '#F7BA2A', '#FF9900'],
        texts: ['oops', 'disappointed', 'normal', 'good', 'great'],
        sections: 'elements',
        id: 'rating-'
      },
      {
        fieldType: constants.formBuilder.FIELD_TYPES.SWITCH,
        label: 'Switch',
        value: true,
        text: 'Switch',
        group: 'elements',
        isUnique: false,
        span: 24,
        labelWidth: 100,
        activeText: '',
        inActiveText: '',
        sections: 'elements',
        id: 'switch-'
      },
      {
        fieldType: constants.formBuilder.FIELD_TYPES.CAROUSEL,
        text: 'Carousel',
        group: 'elements',
        isUnique: false,
        span: 24,
        labelWidth: 100,
        controlHeight: 150,
        itemsNumber: 4,
        sections: 'elements',
        items: [
          {
            url: ''
          }
        ],
        id: 'carousel-'
      },
      {
        fieldType: constants.formBuilder.FIELD_TYPES.UPLOAD,
        text: 'UploadFiles',
        group: 'elements',
        isUnique: false,
        span: 24,
        sections: 'elements',
        uploadURL: 'https://jsonplaceholder.typicode.com/posts/',
        id: 'upload-'
      },
      {
        fieldType: constants.formBuilder.FIELD_TYPES.HTML,
        text: 'Html',
        value: '',
        group: 'elements',
        isUnique: false,
        span: 24,
        isRequired: false,
        htmlContent: '<h3>Hello World</h3>',
        advancedOptions: '',
        sections: 'elements',
        id: 'html-'
      },
      {
        fieldType: constants.formBuilder.FIELD_TYPES.CUSTOM,
        text: 'Custom',
        label: 'Custom',
        value: '',
        group: 'widgets',
        isUnique: false,
        span: 24,
        advancedOptions: '',
        sections: 'widgets'
      }
    ],
    sortElementOptions: {
      group: {
        name: 'formbuilder',
        pull: false,
        put: true
      },
      sort: true
    },
    dropElementOptions: {
      group: {
        name: 'formbuilder',
        pull: 'clone',
        put: false
      },
      sort: false,
      filter: '.is-disabled'
    }
  };
};
