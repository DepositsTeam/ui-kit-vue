import { addons } from "@storybook/addons";
import yourTheme from "./DepositsTheme";

addons.setConfig({
  theme: yourTheme,
});

if (!process.env.VITE_LOCAL) {
  const iconsSidebar = document.getElementById("icons");
  iconsSidebar.classList.add("hidden");
}
