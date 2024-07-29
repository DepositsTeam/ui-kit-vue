import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import DActionListItem from "./DActionListItem.vue";

test("renders the component", async () => {
  expect(DActionListItem).to.not.be.undefined;

  const wrapper = mount(DActionListItem, {
    props: {
      title: "Testing stuff",
      subtitle: "Testing the random stuff out there",
      description: "Random description",
    },
  });

  expect(wrapper.get("[data-test='title']").text()).to.be.equal(
    "Testing stuff"
  );

  expect(wrapper.get("[data-test='subtitle']").text()).to.be.equal(
    "Testing the random stuff out there"
  );

  expect(wrapper.get("[data-test='description']").text()).to.be.equal(
    "Random description"
  );
});

test("matches snapshot", async () => {
  const wrapper = mount(DActionListItem);
  expect(wrapper.element).toMatchSnapshot();
});

test("renders the title", async () => {
  const wrapper = mount(DActionListItem, {
    props: {
      title: "Testing stuff",
      subtitle: "Testing the random stuff out there",
      description: "Random description",
      logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
    },
  });

  expect(wrapper.get("[data-test='title']").text()).to.be.equal(
    "Testing stuff"
  );

  expect(wrapper.get(".ui-action-list__logo").attributes("alt")).to.be.equal(
    "Testing stuff"
  );
});

test("properly renders slots", async () => {
  const wrapper = mount(DActionListItem, {
    props: {
      title: "Testing stuff",
      subtitle: "Testing the random stuff out there",
      description: "Random description",
      logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
    },
    slots: {
      action: "<button>Revoke Access</button>",
      subtitle: "<p id='subtitle-test'>Testing the random stuff out there</p>",
      description: "<h2>Random description</h2>",
      title: "<h1>Testing stuff</h1>",
      icon: "<img src='https://assets.ondeposits.com/img/logo/deposits/svg/logo_main.svg' />",
    },
  });

  expect(wrapper.find("button").exists()).to.be.true;
  expect(wrapper.find("button").text()).to.be.equal("Revoke Access");
  expect(wrapper.find("#subtitle-test").text()).to.be.equal(
    "Testing the random stuff out there"
  );
  expect(wrapper.find("h2").text()).to.be.equal("Random description");
  expect(wrapper.find("h1").text()).to.be.equal("Testing stuff");
  expect(wrapper.find("img").attributes("src")).to.be.equal(
    "https://assets.ondeposits.com/img/logo/deposits/svg/logo_main.svg"
  );
});

test("Emits event on click", async () => {
  const wrapper = mount(DActionListItem, {
    props: {
      title: "Testing stuff",
      subtitle: "Testing the random stuff out there",
      description: "Random description",
      logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
      buttonText: "Revoke access",
    },
  });

  await wrapper.find("button").trigger("click");

  const emittedEvent = wrapper.emitted("click");

  expect(emittedEvent).to.have.lengthOf(1);
});
