import type { NextPage } from "next";

type CardContainer1Type = {
  userImageUrl?: string;
  employeeTitle?: string;
  executiveImageUrl?: string;
};

const CardContainer1: NextPage<CardContainer1Type> = ({
  userImageUrl,
  employeeTitle,
  executiveImageUrl,
}) => {
  return (
    <div className="w-[440px] flex flex-col items-start justify-start text-left text-13xl text-gray-100 font-space-grotesk">
      <div className="self-stretch rounded-11xl bg-darkorange flex flex-col items-start justify-start py-0 px-12">
        <img
          className="w-full relative max-w-[440px] overflow-hidden h-[344px] shrink-0 object-cover"
          alt=""
          src={userImageUrl}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-5 pb-0 pr-[244px] pl-0">
        <b className="relative leading-[48px] uppercase inline-block max-w-[440px]">
          {employeeTitle}
        </b>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[402px] pl-0 text-lg text-darkorange font-inter">
        <div className="relative leading-[28px] uppercase inline-block max-w-[440px]">
          {executiveImageUrl}
        </div>
      </div>
    </div>
  );
};

export default CardContainer1;
