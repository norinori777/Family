import React, { useEffect, useState } from 'react'
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
import { SelectBoxInHookForm } from '../../components/atoms/SelectBoxInHookForm'
import { TextMessage } from '../../components/atoms/TextMessage'
import { AlertMessage } from '../../components/atoms/AlertMessage'

interface UserFormProps {
  user: RegistUser
  isDisplay: boolean
  roleList: { value: string; label: string }[]
  handleModal: () => void
  handleReGet: () => void
}

export const UserForm = (props: UserFormProps) => {
  const [alertMessage, setAlertMessage] = useState('')
  const [showAlert, setShowAlert] = useState(false)
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
    reset,
    setError,
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
  }

  const handleModal = () => {
    props.handleModal()
    setShowAlert(false)
    setAlertMessage('')
    reset()
  }

  const handleReGet = () => {
    props.handleReGet()
  }

  useEffect(() => {
    if (error == null && response != null) {
      handleModal()
      handleReGet()
    }
    if (error != null) {
      if (error.response.status == 400) {
        const { errors } = error.response.data
        for (const [key, value] of Object.entries(errors)) {
          setError(key as 'name' | 'emailAddress' | 'password' | 'roleId', {
            type: 'server',
            message: value as string,
          })
        }
        setAlertMessage('入力情報に誤りがあります。')
        setShowAlert(true)
      }
      if (error.response.status == 500) {
        setAlertMessage('予期せぬエラーが発生しました。')
        setShowAlert(true)
      }
    }
  }, [response, error])

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
          <AlertMessage message={alertMessage} showAlert={showAlert} theme={'danger'} />
          <form id="regist-user-form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="roleId"
              control={control}
              rules={{ required: true }}
              defaultValue={props.roleList[0].value}
              render={({ field }) => (
                <SelectBoxInHookForm
                  name="roleId"
                  field={field}
                  label={'役割'}
                  options={props.roleList ? props.roleList : []}
                  description={''}
                  theme={'primary'}
                  error={
                    errors.roleId && errors.roleId.type === 'required' ? (
                      <TextMessage
                        text={'ロールは必須です。'}
                        theme={'danger'}
                        size={'base'}
                        underline={false}
                      />
                    ) : '' + errors.name &&
                      errors.name?.type === 'server' &&
                      errors.name?.message != undefined ? (
                      <TextMessage
                        text={errors.name.message}
                        theme={'danger'}
                        size={'base'}
                        underline={false}
                      />
                    ) : (
                      ''
                    )
                  }
                />
              )}
            />
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
                    errors.name && errors.name?.type === 'required' ? (
                      <TextMessage
                        text={'名前は必須です。'}
                        theme={'danger'}
                        size={'base'}
                        underline={false}
                      />
                    ) : '' + errors.name && errors.name?.type === 'maxLength' ? (
                      <TextMessage
                        text={'名前は10文字以内で入力してください。'}
                        theme={'danger'}
                        size={'base'}
                        underline={false}
                      />
                    ) : '' + errors.name &&
                      errors.name?.type === 'server' &&
                      errors.name?.message != undefined ? (
                      <TextMessage
                        text={errors.name.message}
                        theme={'danger'}
                        size={'base'}
                        underline={false}
                      />
                    ) : (
                      ''
                    )
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
                    errors.password && errors.password.type === 'required' ? (
                      <TextMessage
                        text={'パスワードは必須です。'}
                        theme={'danger'}
                        size={'base'}
                        underline={false}
                      />
                    ) : '' + errors.password && errors.password?.type === 'maxLength' ? (
                      <TextMessage
                        text={'パスワードは20文字以内で入力してください。'}
                        theme={'danger'}
                        size={'base'}
                        underline={false}
                      />
                    ) : '' + errors.name &&
                      errors.name?.type === 'server' &&
                      errors.name?.message != undefined ? (
                      <TextMessage
                        text={errors.name.message}
                        theme={'danger'}
                        size={'base'}
                        underline={false}
                      />
                    ) : (
                      ''
                    )
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
                    errors.emailAddress && errors.emailAddress.type === 'required' ? (
                      <TextMessage
                        text={'メールアドレスは必須です。'}
                        theme={'danger'}
                        size={'base'}
                        underline={false}
                      />
                    ) : '' + errors.emailAddress && errors.emailAddress?.type === 'maxLength' ? (
                      <TextMessage
                        text={'メールアドレスは255文字以内で入力してください。'}
                        theme={'danger'}
                        size={'base'}
                        underline={false}
                      />
                    ) : '' + errors.name &&
                      errors.name?.type === 'server' &&
                      errors.name?.message != undefined ? (
                      <TextMessage
                        text={errors.name.message}
                        theme={'danger'}
                        size={'base'}
                        underline={false}
                      />
                    ) : (
                      ''
                    )
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
