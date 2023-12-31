import React, { useEffect, useState } from 'react'
import {
  outputPdfPath,
  KindleScribeNoteToEvernote,
} from '../../domain/KindleScribeNoteToEvernote/types'
import { Controller, set, useFieldArray, useForm } from 'react-hook-form'
import { TextMessage } from '../../components/atoms/TextMessage'
import { AlertMessage } from '../../components/atoms/AlertMessage'
import { useAxios } from '../../util/hooks/useAxios'
import { CsrfToken } from '../../domain/csrf/types'
import useDirectAxios from '../../util/hooks/useDirectAxios'
import { TextboxInHookForm } from '../../components/atoms/TextboxInHookForm'
import { Button } from '../../components/atoms/Button'
import { TextAreaInHookForm } from '../../components/atoms/TextAreaInHookForm'
import { XCircle } from '../../components/Icons/XCircle'
import { Icon } from '../../components/atoms/Icon'
import { LinkItem } from '../../components/atoms/LinkItem'

interface KindleScribeNoteToEvernoteFormProps {
  setting: KindleScribeNoteToEvernote
  alertMessage: string
}

export const KindleScribeNoteToEvernoteForm = (props: KindleScribeNoteToEvernoteFormProps) => {
  const [alertMessage, setAlertMessage] = useState(props.alertMessage)
  const [showAlert, setShowAlert] = useState(props.alertMessage != '' ? true : false)
  const [alertMessageTheme, setAlertMessageTheme] = useState<'danger' | 'success'>('danger')
  const { response, error, loading, sendRequest } = useDirectAxios<
    KindleScribeNoteToEvernote,
    KindleScribeNoteToEvernote
  >()

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
    setValue,
    setError,
  } = useForm<KindleScribeNoteToEvernote>()

  const onSubmit = (data: KindleScribeNoteToEvernote) => {
    if (isCsrfLoading) return
    const csrfToken = csrfData != null ? { [csrfData.headerName]: csrfData.token } : {}
    const encodedData = {
      ...data,
      tokensDirectoryPath: encodeURIComponent(data.tokensDirectoryPath),
      outputPdfPaths: data.outputPdfPaths.map((item) => ({
        initial: item.initial,
        path: encodeURIComponent(item.path),
      })),
    }
    sendRequest({
      url: '/kindleScribeNoteToEvernote/setting',
      method: 'PUT',
      headers: csrfToken,
      data: data,
    })
  }

  useEffect(() => {
    setValue('applicationName', props.setting.applicationName)
    setValue('credentialsJson', props.setting.credentialsJson)
    setValue('mailUserId', props.setting.mailUserId)
    setValue('senderMail', props.setting.senderMail)
    setValue('tokensDirectoryPath', props.setting.tokensDirectoryPath)
    setValue('outputPdfPaths', props.setting.outputPdfPaths)
  }, [props.setting])

  useEffect(() => {
    if (error == null && response != null) {
      setAlertMessage('設定の更新に成功しました。')
      setAlertMessageTheme('success')
      setShowAlert(true)
    }
    if (error != null) {
      setAlertMessage('設定の更新に失敗しました。')
      setAlertMessageTheme('danger')
      setShowAlert(true)
    }
  }, [response, error])

  const { fields, append, remove } = useFieldArray({ control, name: 'outputPdfPaths' })

  return (
    <div className="flex flex-col gap-2 w-full sm:w-2/3 md:w-2/3 lg:w-1/2 xl:1/3">
      <TextMessage text="KindleScribeNoteToEvernoteバッチ設定" theme="primary" size="3xl" />
      <section className="ml-2">
        <TextMessage text="設定変更後、更新ボタンを押下してください。" theme="normal" size="xl" />
        <AlertMessage message={alertMessage} showAlert={showAlert} theme={alertMessageTheme} />
      </section>
      <section className="ml-2">
        <form id="batch-setting-form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="applicationName"
            control={control}
            defaultValue={props.setting.applicationName}
            rules={{ required: true, maxLength: 10 }}
            render={({ field }) => (
              <TextboxInHookForm
                name="applicationName"
                field={field}
                type={'text'}
                label={'アプリケーション名'}
                placeholder={'Googleアプリケーション名を入力してください。'}
                description={''}
                theme={'primary'}
                error={
                  errors.applicationName && errors.applicationName?.type === 'required' ? (
                    <TextMessage
                      text={'アプリケーション名は必須です。'}
                      theme={'danger'}
                      size={'base'}
                      underline={false}
                    />
                  ) : '' + errors.applicationName &&
                    errors.applicationName?.type === 'maxLength' ? (
                    <TextMessage
                      text={'アプリケーション名は10文字以内で入力してください。'}
                      theme={'danger'}
                      size={'base'}
                      underline={false}
                    />
                  ) : '' + errors.applicationName &&
                    errors.applicationName?.type === 'server' &&
                    errors.applicationName?.message != undefined ? (
                    <TextMessage
                      text={errors.applicationName.message}
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
            name="tokensDirectoryPath"
            control={control}
            defaultValue={props.setting.tokensDirectoryPath}
            rules={{ required: true, maxLength: 1024 }}
            render={({ field }) => (
              <TextboxInHookForm
                name="tokensDirectoryPath"
                field={field}
                type={'text'}
                label={'トークンディレクトリパス'}
                placeholder={'トークンを保管するディレクトリを入力してください。'}
                description={''}
                theme={'primary'}
                error={
                  errors.tokensDirectoryPath && errors.tokensDirectoryPath?.type === 'required' ? (
                    <TextMessage
                      text={'トークンディレクトリパスは必須です。'}
                      theme={'danger'}
                      size={'base'}
                      underline={false}
                    />
                  ) : '' + errors.tokensDirectoryPath &&
                    errors.tokensDirectoryPath?.type === 'maxLength' ? (
                    <TextMessage
                      text={'トークンディレクトリパスは1024文字以内で入力してください。'}
                      theme={'danger'}
                      size={'base'}
                      underline={false}
                    />
                  ) : '' + errors.tokensDirectoryPath &&
                    errors.tokensDirectoryPath?.type === 'server' &&
                    errors.tokensDirectoryPath?.message != undefined ? (
                    <TextMessage
                      text={errors.tokensDirectoryPath.message}
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
            name="mailUserId"
            control={control}
            defaultValue={props.setting.mailUserId}
            rules={{ required: true, maxLength: 256 }}
            render={({ field }) => (
              <TextboxInHookForm
                name="mailUserId"
                field={field}
                type={'text'}
                label={'受信ユーザーメールアドレス'}
                placeholder={'受信するユーザーのメールアドレスを入力してください。'}
                description={''}
                theme={'primary'}
                error={
                  errors.mailUserId && errors.mailUserId?.type === 'required' ? (
                    <TextMessage
                      text={'受信ユーザーメールアドレスは必須です。'}
                      theme={'danger'}
                      size={'base'}
                      underline={false}
                    />
                  ) : '' + errors.mailUserId && errors.mailUserId?.type === 'maxLength' ? (
                    <TextMessage
                      text={'受信ユーザーメールアドレスは256文字以内で入力してください。'}
                      theme={'danger'}
                      size={'base'}
                      underline={false}
                    />
                  ) : '' + errors.mailUserId &&
                    errors.mailUserId?.type === 'server' &&
                    errors.mailUserId?.message != undefined ? (
                    <TextMessage
                      text={errors.mailUserId.message}
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
            name="senderMail"
            control={control}
            defaultValue={props.setting.senderMail}
            rules={{ required: true, maxLength: 256 }}
            render={({ field }) => (
              <TextboxInHookForm
                name="senderMail"
                field={field}
                type={'text'}
                label={'送信元メールアドレス'}
                placeholder={'送信元メールアドレスを入力してください。'}
                description={''}
                theme={'primary'}
                error={
                  errors.senderMail && errors.senderMail?.type === 'required' ? (
                    <TextMessage
                      text={'送信元メールアドレスは必須です。'}
                      theme={'danger'}
                      size={'base'}
                      underline={false}
                    />
                  ) : '' + errors.senderMail && errors.senderMail?.type === 'maxLength' ? (
                    <TextMessage
                      text={'送信元メールアドレスは256文字以内で入力してください。'}
                      theme={'danger'}
                      size={'base'}
                      underline={false}
                    />
                  ) : '' + errors.applicationName &&
                    errors.senderMail?.type === 'server' &&
                    errors.senderMail?.message != undefined ? (
                    <TextMessage
                      text={errors.senderMail.message}
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
            name="credentialsJson"
            control={control}
            defaultValue={props.setting.credentialsJson}
            rules={{ required: true, maxLength: 2048 }}
            render={({ field }) => (
              <TextAreaInHookForm
                name="credentialsJson"
                field={field}
                rowLength={5}
                label={'認証情報'}
                placeholder="認証情報を入力してください。"
                description={''}
                theme={'primary'}
                error={
                  errors.credentialsJson && errors.credentialsJson?.type === 'required' ? (
                    <TextMessage
                      text={'認証情報は必須です。'}
                      theme={'danger'}
                      size={'base'}
                      underline={false}
                    />
                  ) : '' + errors.credentialsJson &&
                    errors.credentialsJson?.type === 'maxLength' ? (
                    <TextMessage
                      text={'認証情報は2048文字以内で入力してください。'}
                      theme={'danger'}
                      size={'base'}
                      underline={false}
                    />
                  ) : '' + errors.credentialsJson &&
                    errors.credentialsJson?.type === 'server' &&
                    errors.credentialsJson?.message != undefined ? (
                    <TextMessage
                      text={errors.credentialsJson.message}
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
          <LinkItem
            text={'ダウンロードパス追加'}
            onClick={() => {
              append({ initial: '', path: '' })
            }}
            underline={true}
            theme={'primary'}
            size={'base'}
          />
          <Controller
            name="outputPdfPaths"
            control={control}
            defaultValue={props.setting.outputPdfPaths}
            rules={{ required: true }}
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                {fields.map((item: outputPdfPath, index: number) => (
                  <div key={item.initial} className="flex flex-row gap-2 items-center">
                    <Controller
                      name={`outputPdfPaths.${index}.initial`}
                      control={control}
                      defaultValue={item.initial}
                      rules={{ required: true, maxLength: 1 }}
                      render={({ field }) => (
                        <TextboxInHookForm
                          type={'text'}
                          name={`initial.${index}`}
                          field={field}
                          label={'イニシャル'}
                          placeholder="イニシャルを入力してください。"
                          description={''}
                          theme={'primary'}
                          error={
                            errors.outputPdfPaths &&
                            errors.outputPdfPaths[index]?.initial?.type === 'required' ? (
                              <TextMessage
                                text={'イニシャルは必須です。'}
                                theme={'danger'}
                                size={'base'}
                                underline={false}
                              />
                            ) : '' + errors.outputPdfPaths &&
                              errors.outputPdfPaths?.[index]?.initial?.type === 'maxLength' ? (
                              <TextMessage
                                text={'イニシャルは１文字以内で入力してください。'}
                                theme={'danger'}
                                size={'base'}
                                underline={false}
                              />
                            ) : '' + errors.outputPdfPaths &&
                              errors.outputPdfPaths?.[index]?.type === 'server' ? (
                              <TextMessage
                                text={errors.outputPdfPaths?.[index]?.message ?? ''}
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
                      name={`outputPdfPaths.${index}.path`}
                      control={control}
                      defaultValue={item.path}
                      rules={{ required: true, maxLength: 2048 }}
                      render={({ field }) => (
                        <TextboxInHookForm
                          type={'text'}
                          name={`path.${index}`}
                          field={field}
                          label={'ダウンロードパス'}
                          placeholder="ダウンロードパスを入力してください。"
                          description={''}
                          theme={'primary'}
                          error={
                            errors.outputPdfPaths &&
                            errors.outputPdfPaths?.[index]?.path?.type === 'required' ? (
                              <TextMessage
                                text={'ダウンロードパスは必須です。'}
                                theme={'danger'}
                                size={'base'}
                                underline={false}
                              />
                            ) : '' + errors.outputPdfPaths &&
                              errors.outputPdfPaths?.[index]?.path?.type === 'maxLength' ? (
                              <TextMessage
                                text={'ダウンロードパスは2048文字以内で入力してください。'}
                                theme={'danger'}
                                size={'base'}
                                underline={false}
                              />
                            ) : '' + errors.outputPdfPaths &&
                              errors.outputPdfPaths?.[index]?.path?.type === 'server' &&
                              errors.credentialsJson?.message != undefined ? (
                              <TextMessage
                                text={errors.credentialsJson.message}
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
                    <Icon icon={XCircle} action={() => remove(index)} theme={'primary'} />
                  </div>
                ))}
              </div>
            )}
          />
          <div className="flex flex-row gap-2">
            <Button type={'submit'} label={'更新'} theme={'primary'} action={() => {}} />
            <Button type={'reset'} label={'リセット'} theme={'normal'} action={() => {}} />
          </div>
        </form>
      </section>
    </div>
  )
}
