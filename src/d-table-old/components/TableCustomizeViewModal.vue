<template>
  <d-modal
    class="table-customize-view-modal"
    rounded-borders
    grey-header
    header-classes="grey-header"
    :show="shouldShowCustomizeModal"
    @close-modal="$emit('close-modal')"
  >
    <template #heading>
      <d-text my0 scale="subhead">Customize view</d-text>
    </template>
    <d-box class="table-customize-view-modal__controls">
      <d-text my0 scale="subhead">View</d-text>
      <d-box class="table-customize-view-modal__controls-views">
        <span>
          <PieIcon />
        </span>
        <span>
          <BarChartIcon />
        </span>
        <span>
          <TableIcon />
        </span>
      </d-box>
    </d-box>
    <d-box margin-top="16px">
      <d-card
        v-for="(column, index) in columns"
        checkbox
        :key="`card_${index}`"
        :desc="column.display"
        title=""
        wrapper-class="column_selector"
        :icon="ExpandIcon"
      >
      </d-card>
    </d-box>
    <d-box class="modal__actions">
      <d-button margin-right="16px" size="medium" color-scheme="primary"
        >Save</d-button
      >
      <d-button @click="$emit('close-modal')" size="medium">Cancel</d-button>
    </d-box>
  </d-modal>
</template>

<script>
import DModal from "../../d-modal/DModal.vue";
import PieIcon from "../../icons/PieIcon.vue";
import BarChartIcon from "../../icons/BarChartIcon.vue";
import DText from "../../d-text/DText.vue";
import DBox from "../../d-box/DBox.vue";
import TableIcon from "../../icons/TableIcon.vue";
import ExpandIcon from "../../icons/ExpandIcon.vue";
import { inject } from "vue";
import DCard from "../../d-card/DCard.vue";
import DButton from "../../d-button/DButton.vue";
export default {
  name: "TableCustomizeViewModal",
  emits: ["close-modal"],
  components: {
    DButton,
    DCard,
    TableIcon,
    BarChartIcon,
    PieIcon,
    DModal,
    DText,
    DBox,
  },
  props: {
    shouldShowCustomizeModal: {
      type: Boolean,
    },
  },
  setup() {
    const columns = inject("columns");

    return { columns, ExpandIcon };
  },
};
</script>

<style lang="scss">
.table-customize-view-modal__controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.table-customize-view-modal__controls-views {
  display: flex;
  color: #b8c4ce;
  & > * {
    cursor: pointer;
    display: flex;
    border-radius: 8px;
    height: 32px;
    width: 32px;
    align-items: center;
    justify-content: center;
    background: transparent;
    &:hover,
    &.selected {
      color: #0db9e9;
      background: #f2fafc;
    }
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}
.column_selector {
  margin: 0 0 16px;
}
.modal__actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > *:not(:last-child) {
    margin-right: 16px;
  }
}
</style>
