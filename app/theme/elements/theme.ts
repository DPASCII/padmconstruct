import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '20, 40, 59',
    secondary: '3, 63 , 99',
    hoverBackground: '3, 63, 99',
    button: '3, 63, 99',
    buttonText: '255, 255, 255',
    buttonHover: '20, 40, 59',
    buttonHoverText: '255, 255, 255',
    text: '255, 255, 255',
    secondaryText: '255, 255, 255',
  },
  windowWidth: 1320,
  breakpoints: { desktop: 1320, tablet: 768, mobile: 375 },
};

export default theme;
