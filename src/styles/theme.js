import { createTheme, lighten } from "@material-ui/core";

const GREEN_COLOUR = "#009F33";
const BACKGROUND_COLOUR = "#F5F5F5";

export const theme = createTheme({
  palette: {
    primary: {
      light: lighten(GREEN_COLOUR, 0.2),
      main: GREEN_COLOUR
    },
    background: {
      default: BACKGROUND_COLOUR
    }
  }
});
