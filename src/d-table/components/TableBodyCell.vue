<template>
  <d-box
    class="ui-table__body__cell"
    :class="{ first }"
    v-bind="widthStyles"
    v-if="$slots.default"
  >
    <slot></slot>
  </d-box>
  <d-box
    v-else
    class="ui-table__body__cell"
    v-bind="widthStyles"
    :class="{ [`text-align-${column.position}`]: column.position }"
  >
    <d-text
      scale="subhead"
      class="text-gray-900"
      font-face="circularSTD"
      v-if="typeof data[column.dataSelector] === 'string'"
      margin-y="0px"
    >
      {{ data[column.dataSelector] }}
    </d-text>
    <component
      v-else-if="data[column.dataSelector].is"
      :is="data[column.dataSelector].is"
      v-bind="data[column.dataSelector]"
    ></component>
    <component v-else :is="data[column.dataSelector]"></component>
  </d-box>
</template>

<script>
import DText from "../../d-text/DText.vue";
import DBox from "../../d-box/DBox.vue";
import { inject, onMounted } from "vue";

export default {
  name: "TableBodyCell",
  components: {
    DText,
    DBox,
  },
  props: {
    data: {
      type: Object,
    },
    column: {
      type: Object,
    },
    first: {
      type: Boolean,
    },
    isCheckbox: {
      type: Boolean,
    },
  },
  computed: {
    widthStyles: function () {
      let returnedStyles = { minWidth: "120px" };
      if (!this.isCheckbox) {
        if (this.column.width) {
          returnedStyles.width = this.column.width;
        }
        if (this.column.maxWidth) {
          returnedStyles.maxWidth = this.column.maxWidth;
        }
        if (this.column.minWidth) {
          returnedStyles.minWidth = this.column.minWidth;
        }
      } else {
        returnedStyles = { width: "50px", minWidth: "50px", maxWidth: "50px" };
      }

      return returnedStyles;
    },
  },
  setup(props) {
    const columns = inject("columns");
    const checkbox = inject("checkbox");
    const selectedRows = inject("selectedRows");

    onMounted(() => {
      if (!props.isCheckbox && props.column.sortable) {
        if (
          typeof props.data[props.column.dataSelector] !== "string" &&
          !props.data[props.column.dataSelector].text
        ) {
          throw new Error(
            "You cannot set a column to be sortable if the corresponding data is not a string and lacks a text property that is a string"
          );
        }
      }
    });

    return {
      columns,
      checkbox,
      selectedRows,
    };
  },
};
</script>

<style lang="scss">
.ui-table__body__cell {
  display: flex;
  align-items: center;
  cursor: pointer;
  flex: 1;
  width: 100%;
  padding: 8px 16px;
  &.first {
    padding-left: 0;
  }
  &.text-align-right {
    text-align: right;
    justify-content: flex-end;
  }
  &.text-align-center {
    text-align: center;
    justify-content: center;
  }
}
.ui-table__body__cell__icon {
  height: 20px;
}
</style>
