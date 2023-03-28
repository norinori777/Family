import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextboxInHookForm } from "../../components/atoms/TextboxInHookForm";
import { User } from "../../domain/user/types";
import { Modal } from "../../components/atoms/Modal";
import { Button } from "../../components/atoms/Button";
import { ModalHeader } from "../../components/atoms/ModalHeader";
import { ModalDescription } from "../../components/atoms/ModalDescription";
import useDirectAxios from "util/hooks/useDirectAxios";

interface UserFormProps {
  user: User;
  isDisplay: boolean;
  handleModal: () => void;
}

export const UserForm = (props: UserFormProps) => {
  const [response, error, loading, sendRequest] = useDirectAxios();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = (data: User) => {

    console.log(data);
  };

  const handleModal = () => {
    props.handleModal();
  };

  // const handleRegist:SubmitHandler<User> = (data) => {
  //   const config: AxiosRequestConfig = {
  //     url: "/user/add",
  //     method: "POST",
  //     data: {}

  //   };
  //   sendRequest()
  // }

  return (
    <Modal isDisplayed={props.isDisplay}>
      <article className="flex flex-col gap-1">
        <ModalHeader title={"ユーザー登録"} theme={"primary"} />
        <ModalDescription
          description="ユーザー情報を入力して、登録ボタンをクリックしてください。"
          theme={"normal"}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextboxInHookForm
                name="name"
                field={field}
                type={"text"}
                label={"名前"}
                placeholder={"名前を入力してください。"}
                description={""}
                theme={"primary"}
                error={errors.name}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextboxInHookForm
                name="password"
                field={field}
                type={"password"}
                label={"パスワード"}
                placeholder={"パスワードを入力してください。"}
                description={""}
                theme={"primary"}
                error={errors.password}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextboxInHookForm
                name="email"
                field={field}
                type={"text"}
                label={"Email"}
                placeholder={"メールアドレスを入力してください。"}
                description={""}
                theme={"primary"}
                error={errors.email}
              />
            )}
          />
          <div className="flex flex-row gap-2">
            <Button
              type={"submit"}
              label={"登録"}
              theme={"primary"}
              action={() => {}}
            />
            <Button
              type={"button"}
              label={"閉じる"}
              theme={"normal"}
              action={handleModal}
            />
          </div>
        </form>
      </article>
    </Modal>
  );
};
