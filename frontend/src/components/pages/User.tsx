import React from "react";
import { UserForm } from "../organisms/UserForm";
import { ContainIconButton } from "../molecules/ContainIconButton";
import { Plus } from "../Icons/Plus";
import { Table } from "../molecules/Table";

const items = [
  { "No.": 1, name: "山田太郎", email: "Tarou@co.jp" },
  { "No.": 2, name: "山田次郎", email: "Jirou@co.jp" },
  { "No.": 3, name: "山田三郎", email: "Saburou@co.jp" },
  { "No.": 4, name: "山田四郎", email: "Sirou@co.jp" },
  { "No.": 5, name: "山田五郎", email: "Gorou@co.jp" },
];

interface UserProps {
  openHandle: () => void;
  isDisplay: boolean;
}

export const User = (props: UserProps) => {
  const openHandle = () => {
    props.openHandle();
  };

  return (
    <div>
      <ContainIconButton
        type={"button"}
        label={"ユーザー登録"}
        theme={"primary"}
        icon={Plus}
        action={openHandle}
      />
      <UserForm
        isDisplay={props.isDisplay}
        user={{
          name: "",
          password: "",
          email: "",
        }}
        handleModal={props.openHandle}
      />
      <Table titleHeader={["No.", "name", "email"]} items={items} />
    </div>
  );
};
