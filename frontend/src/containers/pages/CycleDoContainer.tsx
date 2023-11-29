import React from 'react'
import { useAxios } from '../../util/hooks/useAxios'
import { Notebook } from '../../domain/evernote/notebook/types'

export const CycleDoContainer = () => {
  const { data, error, isLoading } = useAxios<Notebook[]>({
    url: '/cycledo/list',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    reGet: 1,
  })

  return (
    <div>
      <h1>サイクル実行</h1>
      <div>{data?.map((notebook) => <div key={notebook.guid}>{notebook.name}</div>)}</div>
    </div>
  )
}
