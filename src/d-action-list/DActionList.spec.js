import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import DActionList from "./DActionList.vue";

test("renders the component", async () => {
  expect(DActionList).to.not.be.undefined;

  const wrapper = mount(DActionList, {
    props: {
      label: "Application",
      list: [
        {
          id: 1,
          title: "example@gmail.com",
          description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
          logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
          buttonText: "Revoke access",
          subtitle: "Granted, July 27, 2021 12:45 PM",
          buttonSize: "large",
        },
        {
          id: 2,
          title: "example@gmail.com",
          description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
          logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
          buttonText: "Revoke access",
          subtitle: "Granted, July 27, 2021 12:45 PM",
          buttonSize: "large",
        },
      ],
    },
  });

  expect(wrapper.get(".ui-action-list__header__left").text()).to.be.equal(
    "Application"
  );

  expect(wrapper.findAll('data-test="action-list-item"]')).to.have.lengthOf(2);
});

test("updates call to action", async () => {
  const wrapper = mount(DActionList, {
    props: {
      label: "Application",
      callToActionText: "Revoke all access",
      list: [
        {
          id: 1,
          title: "example@gmail.com",
          description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
          logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
          buttonText: "Revoke access",
          subtitle: "Granted, July 27, 2021 12:45 PM",
          buttonSize: "large",
        },
        {
          id: 2,
          title: "example@gmail.com",
          description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
          logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
          buttonText: "Revoke access",
          subtitle: "Granted, July 27, 2021 12:45 PM",
          buttonSize: "large",
        },
      ],
    },
  });

  expect(
    wrapper.find('[data-test="call-to-action-button"]').text()
  ).to.be.equal("Revoke all access");
});

test("renders the component without list prop", async () => {
  const wrapper = mount(DActionList, {
    props: {
      label: "Application",
    },
  });

  expect(wrapper.get(".ui-action-list__header__left").text()).to.be.equal(
    "Application"
  );

  expect(wrapper.find('[data-test="action-list-item"]').exists()).to.be.false;
});

test("matches snapshot", async () => {
  const wrapper = mount(DActionList);
  expect(wrapper.element).toMatchSnapshot();
});

test("slots work as expected", async () => {
  const wrapper = mount(DActionList, {
    slots: {
      default: "I am the expanded content",
      callToAction: "Button content",
    },
  });

  expect(wrapper.get(".ui-action-list__body__wrapper").text()).to.be.equal(
    "I am the expanded content"
  );

  expect(wrapper.get(".ui-action-list__header__right").text()).to.be.equal(
    "Button content"
  );
});

test("hides call to action", async () => {
  const wrapper = mount(DActionList, {
    props: {
      label: "Application",
      callToActionText: "Revoke all access",
      hideCallToAction: true,
      list: [
        {
          id: 1,
          title: "example@gmail.com",
          description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
          logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
          buttonText: "Revoke access",
          subtitle: "Granted, July 27, 2021 12:45 PM",
          buttonSize: "large",
        },
        {
          id: 2,
          title: "example@gmail.com",
          description: "Duration: 1hr | Expires: July 27, 2021 12:45 PM",
          logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
          buttonText: "Revoke access",
          subtitle: "Granted, July 27, 2021 12:45 PM",
          buttonSize: "large",
        },
      ],
    },
  });

  expect(wrapper.find('[data-test="call-to-action-button"]').exists()).to.be
    .false;
});
