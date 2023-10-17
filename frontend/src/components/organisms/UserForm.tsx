import React from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { TextboxInHookForm } from '../../components/atoms/TextboxInHookForm'
import { User } from '../../domain/user/types'
import { Modal } from '../../components/atoms/Modal'
import { Button } from '../../components/atoms/Button'
import { ModalHeader } from '../../components/atoms/ModalHeader'
import { ModalDescription } from '../../components/atoms/ModalDescription'
import useDirectAxios from '../../util/hooks/useDirectAxios'
import { RegistUser } from '../../domain/registUser/types'
import { useAxios } from '../../util/hooks/useAxios'
import { CsrfToken } from '../../domain/csrf/types'

interface UserFormProps {
  user: RegistUser
  isDisplay: boolean
  handleModal: () => void
  handleReGet: () => void
}

export const UserForm = (props: UserFormProps) => {
  const { response, error, loading, sendRequest } = useDirectAxios<User, RegistUser>()
  const {
    data: csrfData,
    error: csrfError,
    isLoading: isCsrfLoading,
  } = useAxios<CsrfToken>({
    url: '/csrf',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    reGet: 0,
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistUser>()

  const onSubmit = (data: RegistUser) => {
    if (isCsrfLoading) return
    const csrfToken = csrfData != null ? { [csrfData.headerName]: csrfData.token } : {}
    sendRequest({
      url: '/user/add',
      method: 'POST',
      headers: csrfToken,
      params: data,
    })
      .then((response) => {
        console.log(response)
        handleModal()
        handleReGet()
      })
      .catch((error) => console.log(error))
  }

  const handleModal = () => {
    props.handleModal()
  }

  const handleReGet = () => {
    props.handleReGet()
  }

  return (
    <Modal isDisplayed={props.isDisplay}>
      {loading ? (
        <div>loading...</div>
      ) : (
        <article className="flex flex-col gap-1">
          <ModalHeader title={'ユーザー登録'} theme={'primary'} />
          <ModalDescription
            description="ユーザー情報を入力して、登録ボタンをクリックしてください。"
            theme={'normal'}
          />
          <form id="regist-user-form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: true, maxLength: 10 }}
              render={({ field }) => (
                <TextboxInHookForm
                  name="name"
                  field={field}
                  type={'text'}
                  label={'名前'}
                  placeholder={'名前を入力してください。'}
                  description={''}
                  theme={'primary'}
                  error={
                    errors.name && errors.name?.type === 'required'
                      ? '名前は必須です。'
                      : '' + errors.name && errors.name?.type === 'maxLength'
                      ? '名前は10文字以内で入力してください。'
                      : ''
                  }
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: true, maxLength: 20 }}
              render={({ field }) => (
                <TextboxInHookForm
                  name="password"
                  field={field}
                  type={'password'}
                  label={'パスワード'}
                  placeholder={'パスワードを入力してください。'}
                  description={''}
                  theme={'primary'}
                  error={
                    errors.password && errors.password.type === 'required'
                      ? 'パスワードは必須です。'
                      : '' + errors.password && errors.password?.type === 'maxLength'
                      ? 'パスワードは20文字以内で入力してください。'
                      : ''
                  }
                />
              )}
            />
            <Controller
              name="emailAddress"
              control={control}
              defaultValue=""
              rules={{ required: true, maxLength: 255 }}
              render={({ field }) => (
                <TextboxInHookForm
                  name="email"
                  field={field}
                  type={'text'}
                  label={'Email'}
                  placeholder={'メールアドレスを入力してください。'}
                  description={''}
                  theme={'primary'}
                  error={
                    errors.emailAddress && errors.emailAddress.type === 'required'
                      ? 'メールアドレスは必須です。'
                      : '' + errors.emailAddress && errors.emailAddress?.type === 'maxLength'
                      ? 'メールアドレスは255文字以内で入力してください。'
                      : ''
                  }
                />
              )}
            />
            <div className="flex flex-row gap-2">
              <Button type={'submit'} label={'登録'} theme={'primary'} action={() => {}} />
              <Button type={'button'} label={'閉じる'} theme={'normal'} action={handleModal} />
            </div>
          </form>
        </article>
      )}
    </Modal>
  )
}
