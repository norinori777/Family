import React, { useEffect } from "react";
import { UserForm } from "../organisms/UserForm";
import { ContainIconButton } from "../molecules/ContainIconButton";
import { Plus } from "../Icons/Plus";
import { Table } from "../molecules/Table";
import { useAxios } from "../../util/hooks/useAxios";
import { ResponseUserData, User } from "../../domain/user/types";

interface UserProps {
  openHandle: () => void;
  isDisplay: boolean;
}

export const ListUsers = (props: UserProps) => {
  const openHandle = () => {
    props.openHandle();
  };
  const {data, error, isLoading} = useAxios<User[]>({
    url: "/user/list",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return (
    isLoading ? <div>loading...</div> :
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
          emailAddress: "",
        }}
        handleModal={props.openHandle}
      />
      <Table<User> titleHeader={["name", "emailAddress", "state", "createAt", "updateAt"]} items={data} />
    </div>
  );
};