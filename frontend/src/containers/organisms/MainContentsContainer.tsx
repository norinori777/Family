import React from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { MainContents } from '../../components/organisms/MainContents'
import { nowChapterContents } from '../../domain/contents/atoms'
import { useSearchContents } from '../../domain/contents/operations'

export const MainContantsContainer = () => {
  const contentItems = useRecoilValue(nowChapterContents)
  const searchContent = useSearchContents()
  const location = useLocation()
  searchContent(location.pathname)

  return (
    <main className="flex-auto h-full w-full">
      <MainContents contentItems={contentItems} />
    </main>
  )
}
