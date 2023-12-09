import React from 'react'
import { KindleScribeNoteToEvernoteForm } from '../../components/organisms/KindleScribeNoteToEvernoteForm'
import { KindleScribeNoteToEvernote } from '../../domain/KindleScribeNoteToEvernote/types'

export const KindleScribeNoteToEvernoteSetting = () => {
  const setting: KindleScribeNoteToEvernote = {
    applicationName: '',
    credentialsJson: '',
    tokensDirectoryPath: '',
    mailUserId: '',
    senderEmail: '',
    downloadPaths: [],
  }
  return (
    <div>
      <KindleScribeNoteToEvernoteForm setting={setting} />
    </div>
  )
}
