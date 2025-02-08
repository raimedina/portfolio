module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx,html}",
    "./src/features/**/*.{js,jsx,ts,tsx,html}",
    "./src/pages/**/*.{js,jsx,ts,tsx,html}",
    "./src/hooks/**/*.{js,jsx,ts,tsx,html}",
    "./src/styles/**/*.{js,jsx,ts,tsx,html}",
    "./src/context/**/*.{js,jsx,ts,tsx,html}",
    "./src/App.{js,jsx,ts,tsx,html}",
    "./src/index.{js,jsx,ts,tsx,html}",
  ],
  css: [
    "./src/components/**/*.module.css",
    "./src/features/**/*.module.css",
    "./src/pages/**/*.module.css",
    "./src/styles/**/*.module.css",
  ],
  rejected: true,
  safelist: [/^container/, /^button/, /^menu/, /^header$/, /^footer$/, /^nav$/],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
};
