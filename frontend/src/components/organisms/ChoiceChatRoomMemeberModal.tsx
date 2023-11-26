import React, { useState, CompositionEvent, ChangeEvent } from 'react'
import { Modal } from '../../components/atoms/Modal'
import { ModalDescription } from '../../components/atoms/ModalDescription'
import { ModalHeader } from '../../components/atoms/ModalHeader'
import { Textbox } from '../../components/atoms/Textbox'
import { ListForOnAction } from '../molecules/ListForOnAction'
import { Button } from '../../components/atoms/Button'
import { CheckListChatRoomMember } from '../../domain/user/types'
import { CheckBoxContainer } from '../../containers/atoms/CheckBoxContainer'

interface ChoiceChatRoomMemeberModalProps {
  isDisplayed: boolean
  items: CheckListChatRoomMember[]
  filter: string
  handleCancel: () => void
  handleUpdate: () => void
  handleChangeFilter: (e: ChangeEvent<HTMLInputElement>) => void
  handleDoubleByteChangeFilter: (e: CompositionEvent<HTMLInputElement>) => void
  handleSelectingMember: (e: ChangeEvent<HTMLInputElement>, userId: number) => void
  theme: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'normal'
}

export const ChoiceChatRoomMemeberModal = (props: ChoiceChatRoomMemeberModalProps) => {
  const handleDoubleByteChangeFilter = (e: CompositionEvent<HTMLInputElement>) => {
    props.handleDoubleByteChangeFilter(e)
  }

  const handleChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    props.handleChangeFilter(e)
  }

  return (
    <Modal isDisplayed={props.isDisplayed} zIndex={20}>
      <div className="flex flex-col gap-2">
        <ModalHeader title={'ルームメンバー選択'} theme={props.theme} />
        <ModalDescription description={'ルームメンバーを選択してください。'} theme={'normal'} />
        <Textbox
          label={'フィルター'}
          value={props.filter}
          placeholder={'メンバー候補のフィルター条件を入力してください。'}
          description={''}
          theme={props.theme}
          handleDoubleByteChange={handleDoubleByteChangeFilter}
          handleChange={handleChangeFilter}
        />
      </div>
      <ListForOnAction<CheckListChatRoomMember, ChangeEvent<HTMLInputElement>, number>
        direction={'column'}
        items={props.items}
        children={CheckBoxContainer}
        action={props.handleSelectingMember}
      />

      <div className="flex flex-row gap-2 justify-center mt-4">
        <Button type={'button'} label={'キャンセル'} theme={'normal'} action={props.handleCancel} />
        <Button type={'button'} label={'選択'} theme={props.theme} action={props.handleUpdate} />
      </div>
    </Modal>
  )
}
