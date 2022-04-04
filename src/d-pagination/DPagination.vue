<template>
  <d-box class="ui-pagination">
    <d-box @click="updatePage(initializedCurrentPage - 1)">
      <ChevronArrowLeftIcon />
      <d-text font-face="circularSTD" scale="subhead">Previous</d-text>
    </d-box>
    <d-box v-for="visiblePage in visiblePages" @click="updatePage(visiblePage)"
      >{{ visiblePage }}
    </d-box>
    <d-box @click="updatePage(initializedCurrentPage + 1)">
      <ChevronArrowRightIcon />
      <d-text font-face="circularSTD" scale="subhead">Next</d-text>
    </d-box>
  </d-box>
</template>

<script>
import DBox from "../d-box/DBox.vue";
import DText from "../d-text/DText.vue";
import ChevronArrowLeftIcon from "../icons/ChevronArrowLeftIcon.vue";
import ChevronArrowRightIcon from "../icons/ChevronArrowRightIcon.vue";
export default {
  name: "DPagination",
  emits: ["onPageChanged"],
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
    visibleSiblings: {
      type: [Number, String],
      default: 4,
    },
  },
  data: () => ({
    initializedCurrentPage: 1,
    renderedPages: [],
  }),
  mounted() {
    this.initializedCurrentPage = this.currentPage;
  },
  computed: {
    visiblePages: function () {
      const renderedPages = [];
      if (this.totalPages <= this.visibleSiblings * 2 + 2) {
        for (let i = 0; i < this.totalPages; i++) {
          renderedPages.push(i + 1);
        }
      } else {
        if (this.initializedCurrentPage < this.visibleSiblings * 2) {
          for (let i = 0; i < this.visibleSiblings * 2; i++) {
            renderedPages.push(i + 1);
          }
          renderedPages.push("...");
          renderedPages.push(this.totalPages);
        } else if (
          this.initializedCurrentPage >=
          this.totalPages - this.visibleSiblings
        ) {
          renderedPages.push(...["1", "..."]);
          for (
            let i = this.totalPages - this.visibleSiblings * 2;
            i > this.totalPages + 1;
            i++
          ) {
            renderedPages.push(i);
          }
        } else {
          renderedPages.push(1);
          renderedPages.push("...");
          for (
            let i = this.initializedCurrentPage - this.visibleSiblings;
            i < this.initializedCurrentPage + this.visibleSiblings;
            i++
          ) {
            renderedPages.push(i);
          }
          renderedPages.push("...");
          renderedPages.push(this.totalPages);
        }
      }
      return renderedPages;
    },
  },
  methods: {
    updatePage: function (page) {
      this.initializedCurrentPage = page;
    },
  },
};
</script>

<style scoped></style>
