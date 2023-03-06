import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

export const Modal = (props: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 z-50 overflow-x-hidden overflow-y-auto  opacity-10 bg-gray-500 w-full h-full flex items-center justify-center">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700bg-white max-w-2xl md:h-auto">
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        {props.children}
      </div>
    </div>
  );
};
