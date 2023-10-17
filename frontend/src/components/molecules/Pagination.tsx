import React from 'react'
import { Previous } from '../../components/Icons/Previous'
import { Next } from 'components/Icons/Next'

const Pagination = () => {
  return (
    <div>
      <a
        href="#"
        className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Previous
        <Previous theme={'primary'} />
      </a>
      <a
        href="#"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Next
        <Next theme={'primary'} />
      </a>
    </div>
  )
}
