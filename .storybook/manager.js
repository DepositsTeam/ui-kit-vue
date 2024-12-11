import { addons } from "@storybook/manager-api";
import yourTheme from "./DepositsTheme";

addons.setConfig({
  theme: yourTheme,
});


if (window.location.hostname !== "localhost") {
  const iconsSidebar = document.getElementById("icons");

  // iconsSidebar.classList.add("hidden");
}
