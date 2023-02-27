import React from "react";
import { ReactNode } from "react";

export const Header = ({ children }: { children?: ReactNode }) => {
  return (
    <header className="flex flex-row h-16 border-b border-gray-200">
      {children}
    </header>
  );
};
