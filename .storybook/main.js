const path = require("path");
const tailwindcss = require("tailwindcss");
const sveltePreprocess = require("svelte-preprocess");

async function webpackFinal(webpackConfig, options) {
  //Svelteloader
  const svelteLoader = webpackConfig.module.rules.find(
    (r) => r.loader && r.loader.includes("svelte-loader")
  );
  svelteLoader.options = {
    ...svelteLoader.options,
    preprocess: sveltePreprocess(),
    hotReload: false,
    emitCss: true,
  };

  const { module: origModule = {} } = webpackConfig;

  const module = {
    ...origModule,
    rules: [
      ...origModule.rules.filter((rule) => {
        return !rule instanceof RegExp || !rule.test.test(".css");
      }),
      // TailwindCSS config
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "../src"),
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: "./.storybook/",
              },
              plugins: () => [
                tailwindcss("./tailwind.config.js"),
                require("autoprefixer"),
              ],
            },
          },
        ],
      },
    ],
  };

  return {
    ...webpackConfig,
    module,
  };
}

module.exports = {
  webpackFinal,
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-storysource",
      options: {
        rule: {
          test: /\.stories\.ts$/,
        },
      },
    },
  ],
};
