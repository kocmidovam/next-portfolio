import Link from "next/link";

type Props = {
  href: string;
  title: string;
};
const NavLink = ({ href, title }: Props) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
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
