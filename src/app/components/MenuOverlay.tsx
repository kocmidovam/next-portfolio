import React from "react";
import NavLink from "./Navlink";
import {Link} from "@/app/components/Navbar";

type Props = {
  links: Link[];
};
const MenuOverlay = ({ links }: Props) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link: Link, index: number) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
