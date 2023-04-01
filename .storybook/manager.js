import { addons } from "@storybook/addons";
import yourTheme from "./DepositsTheme";

addons.setConfig({
  theme: yourTheme,
});


if (window.location.hostname !== "localhost") {
  const iconsSidebar = document.getElementById("icons");

  // iconsSidebar.classList.add("hidden");
}
