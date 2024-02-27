import React from "react";
import { FaCheckSquare } from "react-icons/fa";

export const Icons = {
  ["fa-solid fa-square-check"]: <FaCheckSquare />,
};

export type IconsType = typeof Icons;

type IconsTypeKeys = keyof IconsType;

type IconProps = {
  name: string;
};

export const Icon = ({ name }: IconProps) => {
  return <React.Fragment>{Icons[name as IconsTypeKeys]}</React.Fragment>;
};
