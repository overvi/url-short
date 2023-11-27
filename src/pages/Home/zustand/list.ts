import { create } from "zustand";

interface Props {
  openList: boolean;
  setOpenList: (state: boolean) => void;
  copy: boolean;
  setCopy: (state: boolean) => void;
}

export const useList = create<Props>((set) => ({
  openList: false,
  setOpenList: (state: boolean) => set({ openList: state }),

  copy: false,
  setCopy: (state: boolean) => set({ copy: state }),
}));
