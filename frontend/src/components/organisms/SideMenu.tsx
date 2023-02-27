import { SidebarMenuItem } from "components/molecules/SidebarMenuItem";
import React from "react";
import { Sidebar } from "../atoms/Sidebar";
import { SidebarMenuList } from "../molecules/SidebarMenuList";

interface SideMenuProps {
  menuItems: {
    icon: React.ComponentType;
    text: string;
    link: string;
  }[];
}

export const SideMenu = (props: SideMenuProps) => {
  return (
    <Sidebar>
      <SidebarMenuList items={props.menuItems} />
    </Sidebar>
  );
};
