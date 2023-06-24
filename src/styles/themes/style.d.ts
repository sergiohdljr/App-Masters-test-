import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    contentBackground: string;
    text: string;
    textAlt: string;
    shadow: string;
    btn: string;
    btnHover: string;
    error: string;
  }
}
