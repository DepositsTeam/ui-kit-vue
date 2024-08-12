<template>
  <d-box
    class="ui-pagination"
    :style="{
      '--smart-color': smartColor,
      '--smart-text-color': getTextColor(smartColor),
    }"
  >
    <d-box
      :class="{ disabled: disablePrev || disabled, smartColor }"
      class="ui-pagination__control"
      @click="updatePage(initializedCurrentPage - 1, true)"
    >
      <ChevronArrowLeftIcon class="ui-pagination__left-arrow" />
      <d-text
        margin-y="0"
        class="ui-pagination__text-previous ui-pagination__text"
        font-face="circularSTD"
        scale="subhead"
        >Previous</d-text
      >
    </d-box>
    <d-auto-layout v-if="!hidePages" alignment="center-left" item-spacing="4px">
      <d-box
        v-for="(visiblePage, index) in visiblePages"
        :key="`visiblePages_${index}`"
        @click="updatePage(visiblePage)"
        class="ui-pagination__page-number"
        :class="{
          'ui-pagination__page-number__active':
            initializedCurrentPage === visiblePage,
          disabled,
          smartColor,
        }"
      >
        <d-text margin-y="0" font-face="circularSTD" scale="subhead">
          {{ visiblePage }}
        </d-text>
      </d-box>
    </d-auto-layout>

    <d-box
      class="ui-pagination__control"
      :class="{ disabled: disableNext || disabled, smartColor, hidePages }"
      @click="updatePage(initializedCurrentPage + 1, false)"
    >
      <d-text
        class="ui-pagination__text-next ui-pagination__text"
        font-face="circularSTD"
        margin-y="0"
        scale="subhead"
        >Next</d-text
      >
      <ChevronArrowRightIcon class="ui-pagination__right-arrow" />
    </d-box>
  </d-box>
</template>

<script setup>
import {
  DBox,
  DText,
  ChevronArrowLeftIcon,
  ChevronArrowRightIcon,
} from "../main";
import rangedArray from "../utils/rangedArray";
import { getTextColor } from "../utils/colorManager";
import { ref, computed, onMounted, watch } from "vue";
import DAutoLayout from "@/d-auto-layout/DAutoLayout.vue";

const emit = defineEmits(["page-changed"]);

const props = defineProps({
  totalPages: {
    type: [Number, String],
    default: 30,
  },
  currentPage: {
    type: [Number, String],
    default: 1,
  },
  currentPageSiblings: {
    type: [Number, String],
    default: 3,
  },
  smartColor: {
    type: String,
  },
  hidePages: {
    type: Boolean,
  },
  nextDisabled: {
    type: Boolean,
  },
  prevDisabled: {
    type: Boolean,
  },
  asyncPrevNext: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
});

const initializedCurrentPage = ref(1);

const intTotalPages = computed(() => parseInt(props.totalPages));

const intCurrentPage = computed(() => parseInt(props.currentPage));

const intCurrentPageSiblings = computed(() =>
  parseInt(props.currentPageSiblings)
);

watch(
  () => props.currentPage,
  () => {
    initializedCurrentPage.value = props.currentPage;
  }
);

const visiblePages = computed(() => {
  const dots = "...";
  let renderedPages = [];
  const doubleVisibleSiblings = intCurrentPageSiblings.value * 2;
  let middleMin = initializedCurrentPage.value - intCurrentPageSiblings.value;
  let middleMax = initializedCurrentPage.value + intCurrentPageSiblings.value;

  if (props.totalPages <= doubleVisibleSiblings + 2) {
    renderedPages = rangedArray(1, intTotalPages.value);
  } else {
    if (initializedCurrentPage.value < doubleVisibleSiblings) {
      renderedPages = [
        ...rangedArray(1, doubleVisibleSiblings),
        dots,
        intTotalPages.value,
      ];
    } else {
      if (
        initializedCurrentPage.value <
        intTotalPages.value - doubleVisibleSiblings
      ) {
        const rangedArrayHolder = rangedArray(middleMin, middleMax);
        const sub = rangedArrayHolder.includes(1)
          ? [...rangedArrayHolder, dots]
          : [1, dots, ...rangedArrayHolder, dots];
        renderedPages = [...sub, intTotalPages.value];
      } else {
        renderedPages = [
          1,
          dots,
          ...rangedArray(
            intTotalPages.value - doubleVisibleSiblings,
            intTotalPages.value
          ),
        ];
      }
    }
  }

  return renderedPages;
});

const disablePrev = computed(
  () =>
    props.prevDisabled ||
    props.disabled ||
    (!props.asyncPrevNext && initializedCurrentPage.value === 1)
);

const disableNext = computed(
  () =>
    props.nextDisabled ||
    props.disabled ||
    (!props.asyncPrevNext &&
      initializedCurrentPage.value === intTotalPages.value)
);

onMounted(() => {
  initializedCurrentPage.value = intCurrentPage.value;
});

const updatePage = (page, nextPrev = undefined) => {
  if (props.disabled) {
    return;
  }
  if (nextPrev !== undefined && props.asyncPrevNext) {
    if (nextPrev && disablePrev.value) {

    } else if (!nextPrev && disableNext.value) {

    } else {
      emit("page-changed", nextPrev ? "previous" : "next");
    }
  } else {
    if (page === "...") return;
    page = parseInt(page);
    if (page > intTotalPages.value || page < 1 || isNaN(page)) {
      return;
    }
    initializedCurrentPage.value = page;
    emit("page-changed", page);
  }
};
</script>

<style lang="scss" scoped>
.ui-pagination {
  display: flex;
  align-items: center;
}

.ui-pagination__text-previous {
  margin-right: 8px;
}

.ui-pagination__page-number {
  margin-right: 12px;
  cursor: pointer;
  &.dark_mode {
    .ui-text {
      color: #f1f5f9;
    }
  }
  &.disabled {
    cursor: not-allowed;
    opacity: 80%;
  }
}

.ui-pagination__page-number__active {
  background: var(--light-primary-action-color);
  border-radius: 4px;
  height: 32px;
  width: 32px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &.smartColor {
    background: var(--smart-color);
    color: var(--smart-text-color);
  }
  &.dark_mode:not(.smartColor) {
    .ui-text {
      color: var(--dark-background-color);
    }
  }
}

.ui-pagination__page-number_last {
  margin-left: 12px;
  margin-right: 8px;
}

.ui-pagination__control {
  display: flex;
  align-items: center;
  cursor: pointer;

  &.hidePages {
    margin-left: 1rem;
  }

  &.smartColor:not(.disabled) {
    .ui-pagination__text {
      color: var(--smart-color);
    }

    .ui-pagination__left-arrow,
    .ui-pagination__right-arrow {
      color: var(--smart-color);
    }
  }

  .ui-pagination__text {
    color: var(--light-primary-action-color);
  }

  .ui-pagination__left-arrow,
  .ui-pagination__right-arrow {
    color: var(--light-primary-action-color);
  }

  &.disabled {
    cursor: not-allowed;

    .ui-pagination__left-arrow,
    .ui-pagination__right-arrow {
      color: #8895a7;
    }

    .ui-pagination__text {
      color: #8895a7;
      &.dark_mode {
        color: #64748b;
      }
    }
  }

  .ui-text {
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
