/* @/recoil/atoms.ts */

import { atom } from "recoil";
import { ModalProps } from "@/types";

export const modalState = atom<ModalProps[]>({
  key: "modalState",
  default: [],
});
