import { create } from "zustand";

interface IbuscaGenre {
  genreBuscaValue?: string | undefined;
  setGenreBuscaValue: (text: string) => void;
}

export const useBuscaGenre = create<IbuscaGenre>()((set) => ({
  genreBuscaValue: "Shooter",
  setGenreBuscaValue: (NewValueGenre: string) =>
    set({ genreBuscaValue: NewValueGenre }),
}));
