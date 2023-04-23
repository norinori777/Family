import { User } from "../../domain/user/types";
import { atom } from "recoil";
export const listUser = atom<User[]>({key: "listUser", default: []});
export const isDisplayRegistUserModal = atom<boolean>({
  key: "isDisplayRegsitUserModal",
  default: false,
});
