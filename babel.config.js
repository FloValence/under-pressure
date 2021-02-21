module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@components": "./src/components",
          "@containers": "./src/containers",
          "@modules": "./src/modules",
          "@styles": "./styles",
        },
      },
    ],
    [
      "babel-plugin-styled-components",
      {
        ssr: true,
      },
    ],
  ],
};
