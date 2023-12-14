const fs = require("fs");
const currentIcons = require("../constants/icons.json");
const icons = "/../icons";
const iconsJson = "/../constants/icons.json";

try {
  const iconStrings = fs
    .readdirSync(__dirname + icons)
    .filter((icon) => icon.includes(".svg"))
    .map((file) => `${file.substring(0, file.length - 4)}`);

  if (iconStrings === "") throw new Error("No icons to merge into sprite");

  fs.writeFileSync(
    __dirname + iconsJson,
    JSON.stringify({
      icons: iconStrings,
    })
  );
} catch (error) {
  console.error(error);
}
