import React, { ReactNode, useState } from 'react'

interface ModalProps {
  isDisplayed: boolean
  children: ReactNode
  zIndex: 10 | 20 | 30 | 40 | 50 | -10 | -20 | -30 | -40 | -50
}

export const Modal = (props: ModalProps) => {
  const zIndex = `z-${props.zIndex}`
  return (
    <div>
      {props.isDisplayed ? (
        <div
          className={`relative ${zIndex}`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className={`fixed inset-0 ${zIndex} overflow-y-auto`}>
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="p-5">{props.children}</div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"></div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
