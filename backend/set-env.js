const { writeFileSync, mkdirSync, existsSync } = require('fs');
require('dotenv').config();

const targetDir = './environments';
const targetPath = `${targetDir}/environment.ts`;

// Crear carpeta si no existe
if (!existsSync(targetDir)) {
  mkdirSync(targetDir, { recursive: true });
}

const envConfigFile = `export const environment = {
  production: false,
  openaiApiKey: '${process.env["OPENAI_API_KEY"] ?? ""}'
};
`;

writeFileSync(targetPath, envConfigFile);

console.log('✅ environment.ts generado correctamente.');