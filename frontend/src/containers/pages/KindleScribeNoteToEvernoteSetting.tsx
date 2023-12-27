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
    senderEmail: '',
    downloadPaths: [],
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
    if (settingError == null && isSettingLoading != null)
      setSettings(settingData ?? defaultDettings)
    if (settingError != null) {
      setAlertMessage('設定の取得に失敗しました。')
    }
  }, [settingData, settingError, isSettingLoading])

  return (
    <div>
      <KindleScribeNoteToEvernoteForm setting={settings} alertMessage={alertMessage} />
    </div>
  )
}
