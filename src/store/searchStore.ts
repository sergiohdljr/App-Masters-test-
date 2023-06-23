import { create } from "zustand";

interface Ibusca {
  buscaValue?: string | undefined;
  setBuscaValue: (text: string) => void;
}

export const useBusca = create<Ibusca>()((set) => ({
  buscaValue: "",
  setBuscaValue: (NewErrorMessage: string) =>
    set({ buscaValue: NewErrorMessage }),
}));
