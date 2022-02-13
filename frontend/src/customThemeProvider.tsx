import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';

type CustomStylesProps = {
  children: React.ReactNode;
};
const theme = createTheme({
  palette: {
    primary: indigo,
  },
});

export default function CustomStyles(
  props: CustomStylesProps
): React.ReactElement {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
