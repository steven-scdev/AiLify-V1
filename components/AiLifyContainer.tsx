import type { NextPage } from "next";

const AiLifyContainer: NextPage = () => {
  return (
    <section className="w-full flex flex-col items-start justify-start py-0 pr-[188px] pl-3 box-border max-w-[1536px] text-left text-53xl text-gray-100 font-space-grotesk">
      <div className="self-stretch flex flex-col items-start justify-center py-[393px] px-0">
        <div className="self-stretch h-[318px] flex flex-col items-center justify-start gap-[23px]">
          <div className="self-stretch h-36 flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[901px] pl-0">
              <h1 className="m-0 relative text-inherit leading-[72px] font-bold font-inherit inline-block max-w-[1336px]">
                AiLify
              </h1>
            </div>
            <div className="self-stretch" />
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[1px] text-lg font-inter">
            <div className="w-full flex flex-col items-start justify-start py-0 pb-8pr-4 pl-0 box-border max-w-[800px]">
              <div className="w-full relative leading-[28px] inline-block max-w-[800px] ">
                <p className="m-0 font-bold text-5xl">
                  Customized AI Agent that double your sales
                </p>
                <p className="m-0 text-4xl decoration-gray-300">
                  By Talking Less
                </p>
              </div>
            </div>
            <div className="self-stretch h-[88px] flex flex-row items-start justify-start  mt-5 pr-[1030.93994140625px] pl-0 box-border gap-[12px]">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
                <button className="cursor-pointer [border:none] pr-[31.031455993652344px] pl-[31.858543395996094px] bg-darkorange self-stretch rounded-lg flex flex-row items-start justify-start">
                  <div className="relative text-base leading-[24px] font-medium font-inter text-white text-center">
                    Let's talk
                  </div>
                </button>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch rounded-lg bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-start justify-start  pr-[31.322864532470703px] pl-[32.84713363647461px] border-[1px] border-solid border-gray-100">
                  <div className="relative text-base leading-[24px] font-medium font-inter text-gray-100 text-center">
                    Our services
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiLifyContainer;
