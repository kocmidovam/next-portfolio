import React from "react";
import Link from "next/link";
import type { NavLinkProps } from "@/types";

const NavLink = ({ href, title }: NavLinkProps): React.ReactNode => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);

    elem?.scrollIntoView({
      behavior: "smooth"
    })
  };

  return (
    <Link
      href={href}
      onClick={handleScroll}
      className="block py-2 pl-3 pr-4 text-[#8892b0] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
