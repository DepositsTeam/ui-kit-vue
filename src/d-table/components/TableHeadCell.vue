<template>
  <d-box
    @click="togglePopover"
    class="ui-table__head__cell"
    :class="{ first }"
    v-bind="widthStyles"
    v-if="$slots.default"
    ref="reference"
  >
    <slot></slot>
    <table-head-cell-actions ref="actions" />
  </d-box>
  <d-box
    v-else
    class="ui-table__head__cell"
    v-bind="widthStyles"
    :class="{ [`text-align-${column.position}`]: column.position, showActions }"
    ref="reference"
  >
    <span class="ui-table__head__cell__content" @click="togglePopover">
      <d-text
        scale="subhead"
        font-face="circularSTD"
        :class="{
          uppercase: column.uppercase,
          [`text-cyan-500`]: showActions,
          [`text-gray-900`]: !showActions,
        }"
        v-if="typeof column.display === 'string'"
        margin-y="0px"
      >
        {{ column.display }}
      </d-text>
      <component
        :is="column.display.is"
        v-else-if="column.display"
        v-bind="column.display"
      ></component>
      <ChevronFilledDownIcon
        v-if="column.sortable"
        class="ui-table__head__cell__icon"
        :smart-color="smartColor"
      />
    </span>
    <table-head-cell-actions
      @toggle-popover="togglePopover"
      :show="showActions"
      ref="popper"
    />
  </d-box>
</template>

<script>
import DText from "../../d-text/DText.vue";
import DBox from "../../d-box/DBox.vue";
import ChevronFilledDownIcon from "../../icons/ChevronFilledDownIcon.vue";
import { inject, provide, ref, computed } from "vue";
import TableHeadCellActions from "./TableHeadCellActions.vue";
import TableFilterOptions from "./TableFilterOptions.vue";
import { computePosition, flip, shift, offset } from "@floating-ui/dom";

export default {
  name: "TableHeadCell",
  emits: ["recently-opened", "recently-closed"],
  props: {
    column: {
      type: Object,
      default: () => ({
        minWidth: "120px",
        position: "left",
      }),
    },
    first: {
      type: Boolean,
    },
    isCheckbox: {
      type: Boolean,
    },
    index: {
      type: Number,
    },
    currentlyOpenIndex: {
      type: Number,
    },
  },
  components: {
    TableFilterOptions,
    TableHeadCellActions,
    DText,
    ChevronFilledDownIcon,
    DBox,
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
  setup(props, { emit }) {
    const checkbox = inject("checkbox");
    const popper = ref(null);
    const reference = ref(null);
    const showActions = ref(false);

    const togglePopover = () => {
      if (!props.isCheckbox && props.column.sortable) {
        showActions.value = !showActions.value;

        computePosition(reference.value.$el, popper.value.$el, {
          placement: "bottom",
          middleware: [offset(6), flip(), shift({ padding: 5 })],
        }).then(({ x, y }) => {
          Object.assign(popper.value.$el.style, {
            left: `${x}px`,
            top: `${y}px`,
          });
        });
      }
    };

    const smartColor = computed(() => {
      return showActions.value ? "#0DB9E9" : "#8895A7";
    });

    provide("togglePopOver", togglePopover);
    provide("column", props.column);

    return {
      checkbox,
      popper,
      reference,
      showActions,
      togglePopover,
      smartColor,
    };
  },
};
</script>

<style lang="scss">
.ui-table__head__cell__content {
  display: flex;
  align-items: center;
  padding: 3px 8px;
  border-radius: 4px;
}
.ui-table__head__cell {
  display: flex;
  align-items: center;
  cursor: pointer;
  flex: 1;
  padding: 0 16px;
  position: relative;
  &.first {
    padding-left: 0;
  }
  &.showActions {
    .ui-table__head__cell__content {
      box-shadow: 0 0 0 3px rgba(67, 210, 250, 0.25);
    }
  }
}
.ui-table__head__cell__icon {
  height: 20px;
}
</style>
