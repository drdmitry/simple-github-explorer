import type { Preview } from "@storybook/react";
import { SnackbarProvider } from "notistack";
import React, { useEffect } from 'react';

import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
      },
    },
    options: {
      storySort: {
        order: ['Page', 'Header', 'Components', 'Icons'],
      },
    },
  },
  decorators: [
    (Story) => {
      useEffect(() => {
        import('../src/services/api-mock.service').then((module) => {
          // module.resetMocks();
        });
      }, []);
      return (
        <SnackbarProvider>
          <Story />
        </SnackbarProvider>
      );
    },
  ],
};

export default preview;
