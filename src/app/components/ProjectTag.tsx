import React from "react";

type Props = {
  name: string;
  onClick: (name:string) => void;
  isSelected: boolean;
};
const ProjectTag = ({ name, onClick, isSelected }: Props) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-4 md:px-6 py-1 md:py-3 md:text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
