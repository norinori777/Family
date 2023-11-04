import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { Controller, set, useForm } from 'react-hook-form'
import useDirectAxios from '../../util/hooks/useDirectAxios'
import { ChatRoom, RegistChatRoom } from '../../domain/chatRoom/types'
import { Modal } from '../../components/atoms/Modal'
import { ModalDescription } from '../../components/atoms/ModalDescription'
import { ModalHeader } from '../../components/atoms/ModalHeader'
import { TextboxInHookForm } from '../../components/atoms/TextboxInHookForm'
import { Button } from '../../components/atoms/Button'
import { useCsrfToken } from '../../util/hooks/useCsrfToken'
import { TextAreaInHookForm } from '../../components/atoms/TextAreaInHookForm'
import { LinkItem } from '../../components/atoms/LinkItem'
import { AlertMessage } from '../../components/atoms/AlertMessage'
import { ChoiceChatRoomMemeberModalContainer } from '../../containers/organisms/ChoiceChatRoomMemeberModalContainer'
import { isDisplayChoiceChatRoomMemberModal } from '../../domain/modal/atoms'
import { useAxios } from '../../util/hooks/useAxios'
import { RestResponse } from '../../domain/Rest/types'
import { ListForOnAction } from '../../components/molecules/ListForOnAction'
import { DeleteItem } from '../../components/molecules/DeleteItem'
import { ChatRoomMemberUser } from '../../domain/user/types'
import { ListChild } from '../../components/molecules/ListChild'
import { TextMessage } from '../../components/atoms/TextMessage'
import { convertChatRoomMemberUserToTextMessage } from '../../domain/user/operation'

interface ChatRoomFormProps {
  chatRoom?: ChatRoom
  isDisplay: boolean
  editMode: boolean
  selectedMembers: ChatRoomMemberUser[]
  handleModal: () => void
  handleReGet: () => void
  setChatRoomMembers: (chatRoomMembers: ChatRoomMemberUser[]) => void
  deleteChatRoomMember: (emailAddress: string) => void
}

export const ChatRoomForm = (props: ChatRoomFormProps) => {
  const [chatRoom, setChatRoom] = useState<ChatRoom>()
  const [mode, setMode] = useState<string>(props.editMode ? '編集' : '登録')
  const [url, setUrl] = useState<string>(props.editMode ? 'update' : 'add')
  const [method, setMethod] = useState<string>(props.editMode ? 'PUT' : 'POST')

  if (props.editMode) {
    const {
      data: chatRoomMembers,
      error: chatRoomMemberError,
      isLoading: chatRoomMemberIsLoading,
    } = useAxios<RestResponse<ChatRoomMemberUser[]>>({
      url: '/chatroom/members/' + props.chatRoom?.roomId,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      reGet: 0,
    })
    useEffect(() => {
      if (chatRoomMemberError == null && chatRoomMembers != null) {
        props.setChatRoomMembers(chatRoomMembers.data)
        return
      }
    }, [chatRoomMembers, chatRoomMemberError, chatRoomMemberIsLoading])
  }

  const [alertMessage, setAlertMessage] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const { response, error, loading, sendRequest } = useDirectAxios<ChatRoom, RegistChatRoom>()
  const { csrfToken, isLoading } = useCsrfToken()

  const [isDisplayChoiceChatRoomMemberModalAtom, setIsDisplayChoiceChatRoomMemberModalAtom] =
    useRecoilState(isDisplayChoiceChatRoomMemberModal)

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<RegistChatRoom>()

  const handleModal = () => {
    props.handleModal()
    setShowAlert(false)
    setAlertMessage('')
    reset()
  }

  const handleReGet = () => {
    props.handleReGet()
  }

  const handleMemberModal = () => {
    setIsDisplayChoiceChatRoomMemberModalAtom(!isDisplayChoiceChatRoomMemberModalAtom)
  }

  const handleClickDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    props.deleteChatRoomMember(e.currentTarget.value)
  }

  const onSubmit = (data: RegistChatRoom) => {
    if (isLoading || csrfToken == null) return
    sendRequest({
      url: '/chatroom/' + url,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken.token,
      },
      data: { ...data, chatRoomMembers: props.selectedMembers },
    })
  }
  useEffect(() => {
    if (error == null && response != null) {
      handleModal()
      handleReGet()
      return
    }
    if (error != null) {
      if (error.response.status === 400) {
        const { errors } = error.response.data
        for (const [key, value] of Object.entries(errors)) {
          setError(key as 'roomName' | 'roomDescription', {
            type: 'server',
            message: value as string,
          })
        }
        setAlertMessage('入力情報に誤りがあります。')
        setShowAlert(true)
      }
    }
  }, [error, response])

  return (
    <>
      <ChoiceChatRoomMemeberModalContainer />
      <Modal isDisplayed={props.isDisplay} zIndex={10}>
        {loading ? (
          <div>loading...</div>
        ) : (
          <article className="flex flex-col gap-1">
            <ModalHeader title={`チャットルーム${mode}`} theme={'primary'} />
            <ModalDescription
              description={`チャットルーム情報を入力して、${mode}ボタンをクリックしてください。`}
              theme={'normal'}
            />
            <AlertMessage message={alertMessage} showAlert={showAlert} theme={'danger'} />
            <form id="regist-chatRoom-form" onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="roomName"
                control={control}
                defaultValue={props.editMode ? props.chatRoom?.roomName : ''}
                rules={{ required: true, maxLength: 32 }}
                render={({ field }) => (
                  <TextboxInHookForm
                    name="roomName"
                    field={field}
                    type="text"
                    label={'チャットルーム名'}
                    placeholder="チャットルーム名を入力してください。"
                    description={''}
                    theme={'primary'}
                    error={
                      errors.roomName && errors.roomName?.type === 'required'
                        ? 'チャットルーム名は必須です。'
                        : '' + errors.roomName && errors.roomName?.type === 'maxLength'
                        ? 'チャットルーム名は32文字以内で入力してください。'
                        : ''
                    }
                  />
                )}
              />
              <Controller
                name="roomDescription"
                control={control}
                defaultValue={props.editMode ? props.chatRoom?.roomDescription : ''}
                rules={{ required: false, maxLength: 256 }}
                render={({ field }) => (
                  <TextAreaInHookForm
                    name="roomDescription"
                    field={field}
                    rowLength={5}
                    label={'チャットルーム説明'}
                    placeholder="チャットルームの説明を入力してください。"
                    description={''}
                    theme={'primary'}
                    error={
                      errors.roomDescription && errors.roomDescription?.type === 'maxLength'
                        ? 'チャットルーム名は256文字以内で入力してください。'
                        : ''
                    }
                  />
                )}
              />
              <div className="ml-2 mb-2">
                <LinkItem
                  text={'メンバーを追加・削除する'}
                  onClick={handleMemberModal}
                  underline={true}
                  theme={'primary'}
                  size={'base'}
                />
              </div>
              <div className="ml-4 mt-2 mb-4">
                <ListChild<
                  ChatRoomMemberUser,
                  {
                    text: string
                    theme:
                      | 'primary'
                      | 'secondary'
                      | 'success'
                      | 'danger'
                      | 'warning'
                      | 'normal'
                      | 'white'
                      | 'black'
                    size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
                    underline?: boolean
                  }
                >
                  direction={'column'}
                  items={props.selectedMembers ?? []}
                  children={TextMessage}
                  convert={convertChatRoomMemberUserToTextMessage}
                />
              </div>
              <div className="flex flex-row gap-2">
                <Button type={'submit'} label={mode} theme={'primary'} action={() => {}} />
                <Button type={'button'} label={'閉じる'} theme={'normal'} action={handleModal} />
              </div>
            </form>
          </article>
        )}
      </Modal>
    </>
  )
}
