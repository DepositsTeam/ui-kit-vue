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

<script>
import DBox from "../d-box/DBox.vue";
import DText from "../d-text/DText.vue";
import ChevronArrowLeftIcon from "../icons/ChevronArrowLeftIcon.vue";
import ChevronArrowRightIcon from "../icons/ChevronArrowRightIcon.vue";
import rangedArray from "../utils/rangedArray";
export default {
  name: "DPagination",
  emits: ["pagechanged"],
  components: {
    DBox,
    ChevronArrowLeftIcon,
    ChevronArrowRightIcon,
    DText,
  },
  props: {
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
  },
  data: () => ({
    initializedCurrentPage: 1,
    renderedPages: [],
  }),
  mounted() {
    this.initializedCurrentPage = this.intCurrentPage;
  },
  computed: {
    disablePrev: function () {
      return this.initializedCurrentPage === 1;
    },
    disableNext: function () {
      return this.initializedCurrentPage === this.intTotalPages;
    },
    intCurrentPage: function () {
      return parseInt(this.currentPage);
    },
    intTotalPages: function () {
      return parseInt(this.totalPages);
    },
    intCurrentPageSiblings: function () {
      return parseInt(this.currentPageSiblings);
    },
    visiblePages: function () {
      const dots = "...";
      let renderedPages = [];
      const doubleVisibleSiblings = this.intCurrentPageSiblings * 2;
      let middleMin = this.initializedCurrentPage - this.intCurrentPageSiblings;
      let middleMax = this.initializedCurrentPage + this.intCurrentPageSiblings;

      if (this.totalPages <= doubleVisibleSiblings + 2) {
        renderedPages = rangedArray(1, this.intTotalPages);
      } else {
        if (this.initializedCurrentPage < doubleVisibleSiblings) {
          renderedPages = [
            ...rangedArray(1, doubleVisibleSiblings),
            dots,
            this.intTotalPages,
          ];
        } else {
          if (
            this.initializedCurrentPage <
            this.intTotalPages - doubleVisibleSiblings
          ) {
            renderedPages = [
              1,
              dots,
              ...rangedArray(middleMin, middleMax),
              dots,
              this.intTotalPages,
            ];
          } else {
            renderedPages = [
              1,
              dots,
              ...rangedArray(
                this.intTotalPages - doubleVisibleSiblings,
                this.intTotalPages
              ),
            ];
          }
        }
      }

      return renderedPages;
    },
  },
  methods: {
    updatePage: function (page) {
      page = parseInt(page);
      if (page > this.intTotalPages || page < 1 || page === "...") {
        return;
      }
      this.initializedCurrentPage = page;
      this.$emit("pagechanged", page);
    },
  },
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

.ui-pagination__page-number__active {
  background: #0db9e9;
  border-radius: 4px;
  height: 32px;
  width: 32px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ui-pagination__page-number {
  margin-right: 12px;
  cursor: pointer;
}

.ui-pagination__page-number_last {
  margin-left: 12px;
  margin-right: 8px;
}

.ui-pagination__left-arrow,
.ui-pagination__right-arrow {
  color: #0db9e9;
}

.ui-pagination__control {
  display: flex;
  align-items: center;
  cursor: pointer;

  .ui-pagination__text {
    color: #0db9e9;
  }

  &.disabled {
    cursor: not-allowed;

    .ui-pagination__left-arrow,
    .ui-pagination__right-arrow {
      color: #8895a7;
    }

    .ui-pagination__text {
      color: #8895a7;
    }
  }

  .ui-text {
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
