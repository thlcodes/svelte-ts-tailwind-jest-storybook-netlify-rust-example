import "style-loader!css-loader!../public/build/bundle.css";

import "@storybook/addon-console";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
