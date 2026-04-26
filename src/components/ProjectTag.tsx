import React from "react";

type Props = {
  name: string;
  value: string;
  onClick: (value: string) => void;
  isSelected: boolean;
};
const ProjectTag = ({ name, value, onClick, isSelected }: Props) => {
  const buttonStyles = isSelected
    ? "text-white border-brand"
    : "text-subtle border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-4 md:px-6 py-1 md:py-3 md:text-xl cursor-pointer`}
      onClick={() => onClick(value)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
