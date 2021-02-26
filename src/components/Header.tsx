import React from "react";
export interface HeaderProps {
  title: string;
}
export const Header: React.FC<HeaderProps> = ({ title, ...props }) => {
  return <h1>{title}</h1>;
};
