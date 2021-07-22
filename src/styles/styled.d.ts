import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary?: string;

      background: string;
      text: string;

      headerBackground: string;
      headerText: string;
    };
  }
}
