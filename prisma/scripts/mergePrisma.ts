const fs = require("fs");
const path = require("path");

const modelsDir = path.join(__dirname, "../prisma/models");
const schemaFile = path.join(__dirname, "../prisma/schema.prisma");

let schemaContent = `generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

`;

fs.readdirSync(modelsDir).forEach((file : any) => {
  const modelContent = fs.readFileSync(path.join(modelsDir, file), "utf8");
  schemaContent += `\n${modelContent}\n`;
});

fs.writeFileSync(schemaFile, schemaContent);
console.log("Merged Prisma schema successfully!");
