import { mount } from "@vue/test-utils";
import DAccordion from "./DAccordion.vue";
import { expect, test } from "vitest";

test("renders the component", async () => {
  expect(DAccordion).to.not.be.undefined;

  const wrapper = mount(DAccordion, {
    props: {
      title: "Personal information",
    },
  });

  expect(wrapper.get(".ui-accordion__header__title").text()).to.be.equal(
    "Personal information"
  );

  expect(wrapper.find('[data-test="title-text"]').exists()).to.be.true;
});

test("toggles the accordion on click", async () => {
  const wrapper = mount(DAccordion, {
    props: {
      title: "Personal information",
    },
    slots: {
      default: "I am the expanded content",
    },
  });

  expect(wrapper.find(".ui-accordion__content").exists()).to.be.false;

  expect(wrapper.get(".ui-accordion__header").classes("active")).to.be.false;

  await wrapper.get(".ui-accordion__header").trigger("click");

  expect(wrapper.get(".ui-accordion__content").text()).to.be.equal(
    "I am the expanded content"
  );

  expect(wrapper.get(".ui-accordion__header").classes("active")).to.be.true;

  await wrapper.get(".ui-accordion__header").trigger("click");

  expect(wrapper.find(".ui-accordion__content").exists()).to.be.false;

  expect(wrapper.get(".ui-accordion__header").classes("active")).to.be.false;
});

test("slots work as expected", async () => {
  const wrapper = mount(DAccordion, {
    slots: {
      default: "I am the expanded content",
      title: "I am a slot title",
    },
  });
  expect(wrapper.find('[data-test="title-text"]').exists()).to.be.false;
  expect(wrapper.get(".ui-accordion__header__title").text()).to.be.equal(
    "I am a slot title"
  );
});
