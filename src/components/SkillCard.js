import React from "react";

const SkillCard = ({ iconUrl, title }) => {
  return (
    <div className="flex flex-wrap flex-col gap-2 items-center mr-[20px]">
      <div className="w-[40px] h-[40px]">
        <img src={iconUrl} alt={title}></img>
      </div>
      <div className="text-[16px] font-medium text-gray-600">{title}</div>
    </div>
  );
};

export default SkillCard;
