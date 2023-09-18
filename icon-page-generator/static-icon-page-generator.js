const fs = require("fs");
const path = require("path");

const filePath = "IconsPreview.vue"; // Specify the file path and name

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, ``, "utf8");
}

const ejectIconPage = (importCommands, contentCode) => {
  const initialContent = `<template>`;

  const midContent = `\n</template> \n \n <script setup>\n import IconCard from '@/composed-components/IconCard.vue'`;

  const finalContent = `\n</script> \n`;

  return (
    initialContent + contentCode + midContent + importCommands + finalContent
  );
};

let importCommands = "";

let contentCode = "";

function getAllFiles(dirPath, parentDirectory = "") {
  // Get all items (files and directories) in the current directory
  const items = fs.readdirSync(dirPath);

  const filesObj = {};

  // Iterate through each item in the current directory
  items.forEach((item) => {
    // Get the full path of the item
    const itemPath = path.join(dirPath, item);

    // Check if the item is a file or a directory
    if (fs.statSync(itemPath).isFile()) {
      if (item.endsWith(".vue")) {
        filesObj[item] = item;
        const component = item.replace(".vue", "");
        importCommands += `\n import { ${component} } from "@deposits/ui-kit-vue"`;

        contentCode += `\n<icon-card title="${component}"><${component} /></icon-card>`;

        if (parentDirectory) {
          filesObj[item] = parentDirectory + "/" + item;
        }
      }
    } else {
      if (item !== "stories") {
        filesObj[item] = getAllFiles(itemPath, item);
        // directories.push([item, getAllFiles(itemPath)]);
      }
    }
  });

  // Return an array containing files and directories as nested arrays
  return filesObj;
}

const dirPath = "../src/icons"; // Specify the directory path
getAllFiles(dirPath);
const finalCode = ejectIconPage(importCommands, contentCode);
fs.writeFileSync(filePath, finalCode);
