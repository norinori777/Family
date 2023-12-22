import React, { useState } from 'react'
import {
  DownloadPath,
  KindleScribeNoteToEvernote,
} from '../../domain/KindleScribeNoteToEvernote/types'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
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
}

export const KindleScribeNoteToEvernoteForm = (props: KindleScribeNoteToEvernoteFormProps) => {
  const [alertMessage, setAlertMessage] = useState('')
  const [showAlert, setShowAlert] = useState(false)
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
    setError,
  } = useForm<KindleScribeNoteToEvernote>()

  const onSubmit = (data: KindleScribeNoteToEvernote) => {
    if (isCsrfLoading) return
    const csrfToken = csrfData != null ? { [csrfData.headerName]: csrfData.token } : {}
    sendRequest({
      url: '/batch/setting',
      method: 'POST',
      headers: csrfToken,
      params: data,
    })
  }

  const { fields, append, remove } = useFieldArray({ control, name: 'downloadPaths' })

  return (
    <div className="flex flex-col gap-2 w-full sm:w-2/3 md:w-2/3 lg:w-1/2 xl:1/3">
      <TextMessage text="KindleScribeNoteToEvernoteバッチ設定" theme="primary" size="3xl" />
      <section className="ml-2">
        <TextMessage text="設定変更後、更新ボタンを押下してください。" theme="normal" size="xl" />
        <AlertMessage message={alertMessage} showAlert={showAlert} theme={'danger'} />
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
                name="name"
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
            rules={{ required: true, maxLength: 10 }}
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
            name="senderEmail"
            control={control}
            defaultValue={props.setting.senderEmail}
            rules={{ required: true, maxLength: 10 }}
            render={({ field }) => (
              <TextboxInHookForm
                name="senderEmail"
                field={field}
                type={'text'}
                label={'送信元メールアドレス'}
                placeholder={'送信元メールアドレスを入力してください。'}
                description={''}
                theme={'primary'}
                error={
                  errors.senderEmail && errors.senderEmail?.type === 'required' ? (
                    <TextMessage
                      text={'送信元メールアドレスは必須です。'}
                      theme={'danger'}
                      size={'base'}
                      underline={false}
                    />
                  ) : '' + errors.senderEmail && errors.senderEmail?.type === 'maxLength' ? (
                    <TextMessage
                      text={'送信元メールアドレスは256文字以内で入力してください。'}
                      theme={'danger'}
                      size={'base'}
                      underline={false}
                    />
                  ) : '' + errors.applicationName &&
                    errors.senderEmail?.type === 'server' &&
                    errors.senderEmail?.message != undefined ? (
                    <TextMessage
                      text={errors.senderEmail.message}
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
            name="downloadPaths"
            control={control}
            defaultValue={props.setting.downloadPaths}
            rules={{ required: true }}
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                {fields.map((item: DownloadPath, index: number) => (
                  <div key={item.initial} className="flex flex-row gap-2 items-center">
                    <Controller
                      name={`downloadPaths.${index}.initial`}
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
                            errors.downloadPaths &&
                            errors.downloadPaths[index]?.initial?.type === 'required' ? (
                              <TextMessage
                                text={'イニシャルは必須です。'}
                                theme={'danger'}
                                size={'base'}
                                underline={false}
                              />
                            ) : '' + errors.downloadPaths &&
                              errors.downloadPaths?.[index]?.initial?.type === 'maxLength' ? (
                              <TextMessage
                                text={'イニシャルは１文字以内で入力してください。'}
                                theme={'danger'}
                                size={'base'}
                                underline={false}
                              />
                            ) : '' + errors.downloadPaths &&
                              errors.downloadPaths?.[index]?.type === 'server' ? (
                              <TextMessage
                                text={errors.downloadPaths?.[index]?.message ?? ''}
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
                      name={`downloadPaths.${index}.path`}
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
                            errors.downloadPaths &&
                            errors.downloadPaths?.[index]?.path?.type === 'required' ? (
                              <TextMessage
                                text={'ダウンロードパスは必須です。'}
                                theme={'danger'}
                                size={'base'}
                                underline={false}
                              />
                            ) : '' + errors.downloadPaths &&
                              errors.downloadPaths?.[index]?.path?.type === 'maxLength' ? (
                              <TextMessage
                                text={'ダウンロードパスは2048文字以内で入力してください。'}
                                theme={'danger'}
                                size={'base'}
                                underline={false}
                              />
                            ) : '' + errors.downloadPaths &&
                              errors.downloadPaths?.[index]?.path?.type === 'server' &&
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
