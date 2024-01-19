import { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";

export default function MUIThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const theme: ThemeOptions = createTheme({
    palette: {
      primary: {
        main: "#234A83",
      },
      secondary: {
        main: "#B83955",
      },
      background: {
        default: "#F2F2F2",
      },
      text: {
        primary: "#252725",
      },
      grey: {
        50: "#8E8E96",
        900: "#494953",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
