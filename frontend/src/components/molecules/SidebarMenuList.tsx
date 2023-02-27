import React from "react";
import { SidebarMenuItem } from "./SidebarMenuItem";

interface SidebarMenuListProps {
  items: {
    icon: React.ComponentType;
    text: string;
    link: string;
  }[];
}

export const SidebarMenuList = (prorps: SidebarMenuListProps) => {
  return (
    <div className="flex flex-col gap-10">
      {prorps.items.map((item) => {
        return (
          <SidebarMenuItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            link={item.link}
          />
        );
      })}
    </div>
  );
};
