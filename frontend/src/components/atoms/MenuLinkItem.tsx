import React from "react";
import { Link } from "react-router-dom";

interface LinkItemProps {
  text: string;
  link: string;
}

export const MenuLinkItem = (props: LinkItemProps) => {

  return (
    <>
      <Link
        data-testid="linkItem"
        className="font-medium"
        to={props.link}
      >
        {props.text}
      </Link>
    </>
  );
};
