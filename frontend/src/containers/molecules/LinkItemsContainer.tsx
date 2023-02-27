import React from "react";
import { useSetRecoilState } from "recoil";
import { LinkItem } from "../../components/atoms/LinkItem";
import { viewContent } from "../../domain/contents/atoms";

interface LinkItemProps {
  text: string;
  link: string;
}

export const LinkItemsContainer = (props: LinkItemProps) => {
  const setSelect = useSetRecoilState(viewContent);
  const setSelectOne = (selected: string) => setSelect(selected);
  return (
    <>
      <LinkItem text={props.text} link={props.link} select={setSelectOne} />
    </>
  );
};
