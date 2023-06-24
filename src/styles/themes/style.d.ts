import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    tema: string;
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
