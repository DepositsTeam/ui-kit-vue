import { mount } from "@vue/test-utils";
import DActionCard2 from "./DActionCard2.vue";
import { expect, test } from "vitest";

test("renders the component", async () => {
  expect(DActionCard2).to.not.be.undefined;

  const wrapper = mount(DActionCard2, {
    props: {
      title: "Setup your program",
      description:
        "Select a use case, configure your fintech programs and generate API keys.",
      illustration:
        "https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn",
      buttonText: "Get Started",
    },
  });

  expect(wrapper.get("h5").text()).to.be.equal("Setup your program");

  expect(wrapper.get('[data-test="description"]').text()).to.be.equal(
    "Select a use case, configure your fintech programs and generate API keys."
  );

  expect(wrapper.get("button").text()).to.be.equal("Get Started");

  expect(wrapper.get("img").attributes("src")).to.be.equal(
    "https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
  );
});

test("it emits the correct event", async () => {
  const wrapper = mount(DActionCard2, {
    props: {
      title: "Setup your program",
      description:
        "Select a use case, configure your fintech programs and generate API keys.",
      illustration:
        "https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn",
      buttonText: "Get Started",
    },
  });

  await wrapper.get("button").trigger("click");

  const event = wrapper.emitted("buttonClick");

  expect(event).to.have.lengthOf(1);
});

test("sets the correct button size", async () => {
  const wrapper = mount(DActionCard2, {
    props: {
      title: "Setup your program",
      description:
        "Select a use case, configure your fintech programs and generate API keys.",
      illustration:
        "https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn",
      buttonText: "Get Started",
      buttonSize: "small",
    },
  });

  expect(wrapper.get("button").classes("size__small")).to.be.true;
});

test("renders slots", async () => {
  const wrapper = mount(DActionCard2, {
    slots: {
      title: "Setup your program",
      description:
        "Select a use case, configure your fintech programs and generate API keys.",
      illustration:
        "https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn",
      button: "A button",
    },
  });

  expect(wrapper.find("img").exists()).to.be.false;
  expect(wrapper.find("h5").exists()).to.be.false;
  expect(wrapper.find("[data-test='description']").exists()).to.be.false;
  expect(wrapper.html()).contains("Setup your program");
  expect(wrapper.html()).contains(
    "Select a use case, configure your fintech programs and generate API keys."
  );
  expect(wrapper.html()).contains(
    "https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
  );
  expect(wrapper.html()).contains("A button");
});
