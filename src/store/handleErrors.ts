import { create } from "zustand";

interface IhandleError {
  errorMessage?: string | undefined;
  setErrorMessage: (text: string) => void;
}

export const useHandleErrorMessage = create<IhandleError>()((set) => ({
  errorMessage: "",
  setErrorMessage: (NewErrorMessage: string) =>
    set({ errorMessage: NewErrorMessage }),
}));
