import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",

  // jsxFramework
  jsxFramework: "react",

  // presets
  presets: [
    "@pandacss/preset-base",
    
"@pandacss/preset-panda",    "@park-ui/panda-preset",
    // Create a custom preset
    // https://park-ui.com/ - Place the settings created by “Make it yours” here
    createPreset({ accentColor: "blue", grayColor: "neutral", borderRadius: "xs" })
  ]
});
