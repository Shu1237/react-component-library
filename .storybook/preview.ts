import type { Preview } from "@storybook/react-vite";
import "../src/tailwind.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    docs: {
      autodocs: "tag",
    },
  },
};

export default preview;
