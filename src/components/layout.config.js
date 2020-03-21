import { createMuiTheme } from '@material-ui/core/styles';
import { green, yellow, lime } from '@material-ui/core/colors';

export const bottomBarHeight = '64px';
export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: green,
    secondary: lime,
    text: yellow,
  },
  typography: {
    fontSize: 18,
  },
});
