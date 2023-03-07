import { addons } from "@storybook/addons";
import yourTheme from "./DepositsTheme";

addons.setConfig({
  theme: yourTheme,
});


if (window.location.hostname !== "localhost") {
  const iconsSidebar = document.getElementById("icons");
  console.log(iconsSidebar);

  // iconsSidebar.classList.add("hidden");
}
