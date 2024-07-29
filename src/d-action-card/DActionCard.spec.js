import { mount } from "@vue/test-utils";
import DActionCard from "./DActionCard.vue";
import { expect, test } from "vitest";

test("renders the component", async () => {
  expect(DActionCard).to.not.be.undefined;

  const wrapper = mount(DActionCard, {
    props: {
      title: "Quickbooks",
      description:
        "Connect Renapay to your QuickBooks account to allow seamles synchronisation of your invoices, payments and customers to QuickBooks automatically.",
      logo: "https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn",
      button1Text: "",
      button2Text: "",
    },
  });

  expect(wrapper.get(".d-action-card__header__title").text()).to.be.equal(
    "Quickbooks"
  );

  expect(wrapper.get(".d-action-card__header__description").text()).to.be.equal(
    "Connect Renapay to your QuickBooks account to allow seamles synchronisation of your invoices, payments and customers to QuickBooks automatically."
  );

  expect(wrapper.get(".d-action-card__logo").attributes("src")).to.be.equal(
    "https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
  );

  expect(wrapper.get(".d-action-card__logo").attributes("alt")).to.be.equal(
    "Quickbooks"
  );

  const buttons = wrapper.findAllComponents({ name: "DButton" });

  expect(buttons).to.have.lengthOf(0);
});

test("matches snapshot", async () => {
  const wrapper = mount(DActionCard);
  expect(wrapper.element).toMatchSnapshot();
});

test("renders the component with buttons", async () => {
  const wrapper = mount(DActionCard, {
    props: {
      title: "Quickbooks",
      description:
        "Connect Renapay to your QuickBooks account to allow seamles synchronisation of your invoices, payments and customers to QuickBooks automatically.",
      logo: "https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn",
      button1Text: "Connect",
      button2Text: "Learn more",
    },
  });

  const buttons = wrapper.findAllComponents({ name: "DButton" });

  expect(buttons).to.have.lengthOf(2);
});

test("triggers events on click", async () => {
  const wrapper = mount(DActionCard, {
    props: {
      title: "Quickbooks",
      description:
        "Connect Renapay to your QuickBooks account to allow seamles synchronisation of your invoices, payments and customers to QuickBooks automatically.",
      logo: "https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn",
      button1Text: "Connect",
      button2Text: "Learn more",
    },
  });

  const buttons = wrapper.findAllComponents({ name: "DButton" });

  await buttons[0].trigger("click");

  let emitted = wrapper.emitted("button1Clicked");

  expect(emitted).to.have.lengthOf(1);

  await buttons[1].trigger("click");

  emitted = wrapper.emitted("button2Clicked");

  expect(emitted).to.have.lengthOf(1);
});

test("it renders slots appropriately", async () => {
  const wrapper = mount(DActionCard, {
    props: {
      title: "Quickbooks",
      description:
        "Connect Renapay to your QuickBooks account to allow seamles synchronisation of your invoices, payments and customers to QuickBooks automatically.",
      logo: "https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn",
      button1Text: "Connect",
      button2Text: "Learn more",
    },
    slots: {
      title: "<div id='slottedTitle'>Slotted title</div>",
      description: "<div id='slottedDescription'>Slotted description</div>",
      buttons: "<button>New button</button>",
    },
  });

  expect(wrapper.find(".d-action-card__header__title").exists()).to.be.false;

  expect(wrapper.find(".d-action-card__header__description").exists()).to.be
    .false;

  expect(wrapper.get("#slottedTitle").text()).to.be.equal("Slotted title");

  expect(wrapper.get("#slottedDescription").text()).to.be.equal(
    "Slotted description"
  );

  const buttons = wrapper.findAllComponents({ name: "DButton" });

  expect(buttons).to.have.lengthOf(0);

  expect(wrapper.get("button").text()).to.be.equal("New button");
});

test("individual button slots are rendered appropriately", async () => {
  const wrapper = mount(DActionCard, {
    props: {
      title: "Quickbooks",
      description:
        "Connect Renapay to your QuickBooks account to allow seamles synchronisation of your invoices, payments and customers to QuickBooks automatically.",
      logo: "https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn",
      button1Text: "Connect",
      button2Text: "Learn more",
    },
    slots: {
      button1: "<button id='slottedButton1'>New button</button>",
      button2: "<button id='slottedButton2'>New button</button>",
    },
  });

  const buttons = wrapper.findAllComponents({ name: "DButton" });

  expect(buttons).to.have.lengthOf(0);

  expect(wrapper.find("#slottedButton1").exists()).to.be.true;
  expect(wrapper.find("#slottedButton2").exists()).to.be.true;
});
