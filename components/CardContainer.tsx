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
      <div className="rounded-2xl bg-gray-300 shadow-[0px_4px_8px_-2px_rgba(0,_0,_0,_0.1),_0px_1px_4px_-2px_rgba(0,_0,_0,_0.06)] box-border w-[424px] h-[242px] overflow-hidden shrink-0 flex flex-col items-start justify-end pt-0 px-[17px] pb-[33px] gap-[16px] border-[1px] border-solid border-lightgray-100">
        <div className="w-[390px] flex flex-col items-center justify-start py-0 pr-[118.40000915527344px] pl-[118.59999084472656px] box-border">
          <b className="relative leading-[32px] inline-block max-w-[390px]">
            <p className="m-0">{serviceOfferings}</p>
            <p className="m-0">{serviceDescription}</p>
          </b>
        </div>
        <div className="w-[390px] overflow-hidden flex flex-col items-center justify-start text-base text-dimgray font-inter">
          <div className="w-[390px] flex flex-col items-center justify-start py-0 pr-[119.4050064086914px] pl-[119.5949935913086px] box-border">
            <div className="relative leading-[24px] inline-block max-w-[390px]">
              {serviceCapabilities}
            </div>
          </div>
          <div className="w-[390px] flex flex-col items-center justify-start py-0 pr-[115.39999389648438px] pl-[115.60000610351562px] box-border">
            <div className="relative leading-[24px] inline-block max-w-[390px]">
              {knowledgeResponseImageUrl}
            </div>
          </div>
          <div className="w-[390px] flex flex-col items-center justify-start py-0 pr-[112.41000366210938px] pl-[112.58999633789062px] box-border">
            <div className="relative leading-[24px] inline-block max-w-[390px]">
              {serviceTitle}
            </div>
          </div>
          <div className="w-[390px] flex flex-col items-center justify-start py-0 pr-[145.39999389648438px] pl-[145.60000610351562px] box-border">
            <div className="relative leading-[24px] inline-block max-w-[390px]">
              {serviceSubtitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
