<template>
  <d-box class="ui-table__active-filters-dropdown">
    <d-box class="filter__row">
      <d-select
        size="medium"
        placeholder="Select filter"
        label="Filter"
        font-face="circularSTD"
        v-model="filter1"
      />
      <d-textfield
        size="medium"
        label="Value"
        font-face="circularSTD"
        placeholder="Type something"
        v-model="value1"
      />
    </d-box>
    <d-box v-if="showSecondOptions" class="filter__radios">
      <d-radio ringed>
        <d-text
          my0
          scale="subhead"
          class="text-grey-700"
          font-face="circularSTD"
          v-model="join"
          value="and"
          >And</d-text
        >
      </d-radio>
      <d-radio ringed>
        <d-text
          my0
          scale="subhead"
          class="text-grey-700"
          font-face="circularSTD"
          v-model="join"
          value="or"
          >Or</d-text
        >
      </d-radio>
    </d-box>
    <d-box v-if="showSecondOptions" class="filter__row grey">
      <d-select
        size="medium"
        placeholder="Select filter"
        label="Filter"
        font-face="circularSTD"
        v-model="filter2"
      />
      <d-textfield
        size="medium"
        label="Value"
        font-face="circularSTD"
        placeholder="Type something"
        v-model="value2"
      />
      <d-box @click="hideOtherOptions">
        <close-icon />
      </d-box>
    </d-box>
    <d-box display="flex" margin-top="16px">
      <d-button color-scheme="primary" size="medium">Apply filter</d-button>
      <d-button margin-left="16px" size="medium">Cancel</d-button>
    </d-box>
    <d-box
      v-if="!showSecondOptions"
      @click="showOtherOptions"
      class="condition"
    >
      <d-box class="text-blue-500 text"
        ><add-icon />
        <d-text my0 scale="footnote" font-face="heroNew"
          >Add condition</d-text
        ></d-box
      >
    </d-box>
  </d-box>
</template>

<script setup>
import {
  DBox,
  DTextfield,
  DSelect,
  DButton,
  DRadio,
  CloseIcon,
  AddIcon,
  DText,
} from "../../main";
import { ref } from "vue";

const filter1 = ref("");
const value1 = ref("");
const join = ref("");
const filter2 = ref("");
const value2 = ref("");
const showSecondOptions = ref(false);

const showOtherOptions = () => (showSecondOptions.value = true);
const hideOtherOptions = () => (showSecondOptions.value = false);
</script>

<style lang="scss">
.ui-table__active-filters-dropdown {
  background: #ffffff;
  border: 1px solid #e1e7ec;
  box-shadow: 0 4px 8px rgba(3, 47, 60, 0.14);
  border-radius: 6px;
  display: flex;
  position: absolute;
  flex-direction: column;
  z-index: 100;
  min-width: 600px;
  padding: 24px;
  .filter__row {
    display: flex;
    align-items: center;
    & > * {
      flex: 1;
      &:first-child {
        margin-right: 16px;
      }
    }
    &.grey {
      padding: 16px;
      background: #f5f8fa;
      border-radius: 8px;
      align-items: flex-start;
      & > * {
        flex: 3;
        &:last-child {
          flex: 1;
        }
      }
    }
  }
  .filter__radios {
    display: flex;
    margin-top: 16px;
    margin-bottom: 16px;
    & > *:first-child {
      margin-right: 16px;
    }
  }
  .condition {
    margin-top: 16px;
    .text {
      display: flex;
      align-items: center;
    }
  }
}
</style>
