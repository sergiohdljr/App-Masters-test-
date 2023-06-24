import { create } from "zustand";
import { lightTheme, darkTheme } from "../styles/themes";

export interface theme {
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

interface ITheme {
  theme: theme;
  setTheme: () => void;
}

export const useThemeStore = create<ITheme>()((set) => ({
  theme: lightTheme,
  setTheme: () =>
    set({ theme: lightTheme.tema === "claro" ? darkTheme : lightTheme }),
}));
