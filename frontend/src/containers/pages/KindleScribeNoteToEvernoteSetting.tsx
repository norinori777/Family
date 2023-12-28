import React, { useEffect, useState } from 'react'
import { KindleScribeNoteToEvernoteForm } from '../../components/organisms/KindleScribeNoteToEvernoteForm'
import { KindleScribeNoteToEvernote } from '../../domain/KindleScribeNoteToEvernote/types'
import { useAxios } from '../../util/hooks/useAxios'

export const KindleScribeNoteToEvernoteSetting = () => {
  const defaultDettings: KindleScribeNoteToEvernote = {
    applicationName: '',
    credentialsJson: '',
    tokensDirectoryPath: '',
    mailUserId: '',
    senderMail: '',
    outputPdfPaths: [],
  }

  const [settings, setSettings] = useState<KindleScribeNoteToEvernote>(defaultDettings)
  const [alertMessage, setAlertMessage] = useState('')

  const {
    data: settingData,
    error: settingError,
    isLoading: isSettingLoading,
  } = useAxios<KindleScribeNoteToEvernote>({
    url: '/kindleScribeNoteToEvernote/setting',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    reGet: 0,
  })

  useEffect(() => {
    if(isSettingLoading) return
    if (settingError == null && settingData != null)
      setSettings(settingData ?? defaultDettings)
    if (settingError != null) {
      // TODO: エラーメッセージのリソースからの取か
      setAlertMessage('設定の取得に失敗しました。')
    }
  }, [isSettingLoading, settingData, settingError])

  return (
    <div>
      <KindleScribeNoteToEvernoteForm setting={settings} alertMessage={alertMessage} />
    </div>
  )
}
