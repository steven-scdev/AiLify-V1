import type { NextPage } from "next";

type CardContainerType = {
  serviceOfferings?: string;
  serviceDescription?: string;
  serviceCapabilities?: string;
  knowledgeResponseImageUrl?: string;
  serviceTitle?: string;
  serviceSubtitle?: string;
};

const CardContainer: NextPage<CardContainerType> = ({
  serviceOfferings,
  serviceDescription,
  serviceCapabilities,
  knowledgeResponseImageUrl,
  serviceTitle,
  serviceSubtitle,
}) => {
  return (
    <div className="self-stretch w-[504px] flex flex-col items-start justify-start py-0 px-10 box-border text-center text-5xl text-black font-space-grotesk">
      <div className="self-stretch rounded-2xl bg-gray-300 shadow-[0px_4px_8px_-2px_rgba(0,_0,_0,_0.1),_0px_1px_4px_-2px_rgba(0,_0,_0,_0.06)] overflow-hidden flex flex-col items-start justify-end pt-0 px-[17px] pb-[33px] gap-[16px] border-[1px] border-solid border-lightgray-100">
        <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[118.40000915527344px] pl-[118.59999084472656px]">
          <b className="w-full relative leading-[32px] inline-block max-w-[390px]">
            <p className="m-0">{serviceOfferings}</p>
            <p className="m-0">{serviceDescription}</p>
          </b>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start text-base text-dimgray font-inter">
          <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[119.4050064086914px] pl-[119.5949935913086px]">
            <div className="w-full relative leading-[24px] inline-block max-w-[390px]">
              {serviceCapabilities}
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[115.39999389648438px] pl-[115.60000610351562px]">
            <div className="w-full relative leading-[24px] inline-block max-w-[390px]">
              {knowledgeResponseImageUrl}
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[112.41000366210938px] pl-[112.58999633789062px]">
            <div className="w-full relative leading-[24px] inline-block max-w-[390px]">
              {serviceTitle}
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[145.39999389648438px] pl-[145.60000610351562px]">
            <div className="w-full relative leading-[24px] inline-block max-w-[390px]">
              {serviceSubtitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
