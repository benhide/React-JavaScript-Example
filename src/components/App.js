import React from "react";

import { ThemeProvider } from "@material-ui/core";

import { PageComponent } from "./PageComponent";

import { theme } from "../styles/theme";

export const App = () => {
  return (
    // Passing values not defined as valid agruments, in this case to the Mui context provider.
    // (this 'notAValidProp' isn't doing anything!)
    <ThemeProvider theme={theme} notAValidProp={{ size: 100 }}>
      <PageComponent />
    </ThemeProvider>
  );
};
