import { atom } from "recoil";

export const reGetFlag = atom<number>({
    key: "reGetFlag",
    default: 0,
});