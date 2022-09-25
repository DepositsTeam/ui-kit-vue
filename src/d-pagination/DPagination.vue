<template>
  <d-box class="ui-pagination">
    <d-box
      :class="{ disabled: disablePrev }"
      class="ui-pagination__control"
      @click="updatePage(initializedCurrentPage - 1)"
    >
      <ChevronArrowLeftIcon class="ui-pagination__left-arrow" />
      <d-text
        class="ui-pagination__text-previous ui-pagination__text"
        font-face="circularSTD"
        scale="subhead"
        >Previous</d-text
      >
    </d-box>
    <d-box
      v-for="(visiblePage, index) in visiblePages"
      :key="`visiblePages_${index}`"
      @click="updatePage(visiblePage)"
      class="ui-pagination__page-number"
      :class="{
        'ui-pagination__page-number__active':
          this.initializedCurrentPage === visiblePage,
      }"
    >
      <d-text font-face="circularSTD" scale="subhead">
        {{ visiblePage }}
      </d-text>
    </d-box>
    <d-box
      class="ui-pagination__control"
      :class="{ disabled: disableNext }"
      @click="updatePage(initializedCurrentPage + 1)"
    >
      <d-text
        class="ui-pagination__text-next ui-pagination__text"
        font-face="circularSTD"
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
import { ref, computed, onMounted } from "vue";

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
});

const initializedCurrentPage = ref(1);

const intTotalPages = computed(() => parseInt(props.totalPages));

const intCurrentPage = computed(() => parseInt(props.currentPage));

const intCurrentPageSiblings = computed(() =>
  parseInt(props.currentPageSiblings)
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

const disablePrev = computed(() => initializedCurrentPage.value === 1);

const disableNext = computed(
  () => initializedCurrentPage.value === intTotalPages.value
);

onMounted(() => {
  initializedCurrentPage.value = intCurrentPage.value;
});

const updatePage = (page) => {
  if (page === "...") return;
  page = parseInt(page);
  if (page > intTotalPages.value || page < 1 || isNaN(page)) {
    return;
  }
  initializedCurrentPage.value = page;
  emit("page-changed", page);
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
  &.dark_mode {
    .ui-text {
      color: var(--dark-background-color);
    }
  }
}

.ui-pagination__page-number_last {
  margin-left: 12px;
  margin-right: 8px;
}

.ui-pagination__left-arrow,
.ui-pagination__right-arrow {
  color: var(--light-primary-action-color);
}

.ui-pagination__control {
  display: flex;
  align-items: center;
  cursor: pointer;

  .ui-pagination__text {
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
