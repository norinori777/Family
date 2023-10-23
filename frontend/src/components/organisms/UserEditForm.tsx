import React, { useEffect, useState } from 'react'
import { Controller, set, useForm } from 'react-hook-form'
import { Modal } from '../../components/atoms/Modal'
import { EditUser } from '../../domain/user/types'
import { ModalHeader } from '../../components/atoms/ModalHeader'
import { ModalDescription } from '../../components/atoms/ModalDescription'
import { TextboxInHookForm } from '../../components/atoms/TextboxInHookForm'
import { Button } from '../../components/atoms/Button'
import { useAxios } from '../../util/hooks/useAxios'
import useDirectAxios from '../../util/hooks/useDirectAxios'
import { CsrfToken } from '../../domain/csrf/types'
import { User } from '../../domain/user/types'
import { AlertMessage } from '../../components/atoms/AlertMessage'
import { TextMessage } from '../../components/atoms/TextMessage'

interface UserEditForm {
  user: EditUser
  isDisplay: boolean
  handleModal: () => void
  handleReGet: () => void
}

export const UserEditForm = (props: UserEditForm) => {
  const [alertMessage, setAlertMessage] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const handleModal = () => {
    props.handleModal()
    setShowAlert(false)
    setAlertMessage('')
    reset()
  }

  const handleReGet = () => {
    props.handleReGet()
  }
  const { response, error, loading, sendRequest } = useDirectAxios<User, EditUser>()
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
    reset,
    formState: { errors },
    setError,
  } = useForm<EditUser>()

  const onSubmit = async (data: EditUser) => {
    if (isCsrfLoading) return
    const csrfToken = csrfData != null ? { [csrfData.headerName]: csrfData.token } : {}

    const putData: EditUser = {
      name: data.name,
      emailAddress: data.emailAddress,
      beforeEmailAddress: props.user.emailAddress,
      version: props.user.version,
    }
    console.log(putData)
    await sendRequest({
      url: '/user/update',
      method: 'PUT',
      headers: csrfToken,
      params: putData,
    })
  }

  useEffect(() => {
    if (error == null && response != null) {
      handleModal()
      handleReGet()
    }
    if (error != null) {
      if (error.response.status === 400) {
        const { errors } = error.response.data
        for (const [key, value] of Object.entries(errors)) {
          setError(
            key as
              | 'name'
              | 'emailAddress'
              | 'beforeEmailAddress'
              | 'version'
              | `root.${string}`
              | 'root',
            { type: 'server', message: value as string }
          )
        }
        setAlertMessage('入力情報に誤りがあります。')
        setShowAlert(true)
      }
      if (error.response.status === 409) {
        setAlertMessage('すでに更新されています。再度読み込んでください。')
        setShowAlert(true)
      }
    }
  }, [error, response])

  return (
    <Modal isDisplayed={props.isDisplay}>
      {loading ? (
        <div>loading...</div>
      ) : (
        <article className="flex flex-col gap-1">
          <ModalHeader title={'ユーザー編集'} theme={'primary'} />
          <ModalDescription
            description="ユーザー情報を入力して、更新ボタンをクリックしてください。"
            theme={'normal'}
          />
          <AlertMessage message={alertMessage} showAlert={showAlert} theme={'danger'} />
          <form id="regist-user-form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              defaultValue={props.user.name}
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
                      <TextMessage text={'名前は必須です'} theme={'danger'} size={'base'} />
                    ) : '' + errors.name && errors.name?.type === 'maxLength' ? (
                      <TextMessage
                        text={'名前は10文字以内で入力してください。'}
                        theme={'danger'}
                        size={'base'}
                      />
                    ) : '' + errors.name &&
                      errors.name?.type === 'server' &&
                      errors.name?.message != undefined ? (
                      <TextMessage text={errors.name.message} theme={'danger'} size={'base'} />
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
              defaultValue={props.user.emailAddress}
              rules={{ required: true, maxLength: 255 }}
              render={({ field }) => (
                <TextboxInHookForm
                  name="emailAddress"
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
                      />
                    ) : '' + errors.emailAddress && errors.emailAddress?.type === 'maxLength' ? (
                      <TextMessage
                        text={'メールアドレスは255文字以内で入力してください。'}
                        theme={'danger'}
                        size={'base'}
                      />
                    ) : '' + errors.emailAddress &&
                      errors.emailAddress?.type === 'server' &&
                      errors.emailAddress?.message != undefined ? (
                      <TextMessage
                        text={errors.emailAddress.message}
                        theme={'danger'}
                        size={'base'}
                      />
                    ) : (
                      ''
                    )
                  }
                />
              )}
            />
            <div className="flex flex-row gap-2">
              <Button type={'submit'} label={'更新'} theme={'primary'} action={() => {}} />
              <Button type={'button'} label={'閉じる'} theme={'normal'} action={handleModal} />
            </div>
          </form>
        </article>
      )}
    </Modal>
  )
}
