import { mount } from "@vue/test-utils";
import DAlert from "./DAlert.vue";
import { expect, test } from "vitest";

test("renders the component", () => {
  expect(DAlert).to.not.be.undefined;

  const wrapper = mount(DAlert, {
    props: {
      message: "Alert title",
      description: "Alert description",
    },
  });

  expect(wrapper.get('[data-test="call-to-action-button"]').text()).to.be(
    "Alert title"
  );
  expect(wrapper.get('[data-test="call-to-action-button"]').text()).to.be(
    "Alert description"
  );
});

test("matches snapshot", async () => {
  const wrapper = mount(DAlert);
  expect(wrapper.element).toMatchSnapshot();
});
