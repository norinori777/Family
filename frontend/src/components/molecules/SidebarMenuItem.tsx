import React from "react";
import { Link } from "react-router-dom";

interface SidebarMenuItemProps {
  icon: React.ElementType;
  text: string;
  link: string;
}

export const SidebarMenuItem = (props: SidebarMenuItemProps) => {
  return (
    <nav className="flex flex-row gap-4">
      <span className="text-white text-2xl">
        {React.createElement(props.icon)}
      </span>
      <Link className="text-white" to={props.link}>
        {props.text}
      </Link>
    </nav>
  );
};
