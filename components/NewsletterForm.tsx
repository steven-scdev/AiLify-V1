import type { NextPage } from "next";

const NewsletterForm: NextPage = () => {
  return (
    <div className="w-[1536px] flex flex-col items-center justify-start pt-10 px-3 pb-0 box-border max-w-[1536px] text-left text-sm text-dimgray font-inter">
      <div className="w-[1512px] flex flex-col items-start justify-start">
        <div className="self-stretch relative box-border h-px overflow-hidden shrink-0 border-t-[1px] border-solid border-gainsboro" />
        <div className="self-stretch flex flex-row items-center justify-between py-8 px-0">
          <div className="w-[756px] flex flex-col items-start justify-start py-0 pr-[644px] pl-0 box-border">
            <div className="relative leading-[20px] inline-block max-w-[756px]">
              ©Morningside AI
            </div>
          </div>
          <div className="w-[756px] flex flex-row items-start justify-end py-0 pr-0 pl-[399.9800109863281px] box-border gap-[23.9px] text-gray-100">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative leading-[20px]">Privacy Policy</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative leading-[20px]">Terms of Service</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative leading-[20px]">Cookie Settings</div>
            </div>
          </div>
        </div>
        <div className="w-[1512px] h-[326px] flex flex-row items-end justify-end pt-[100px] px-0 pb-8 box-border text-base text-black">
          <div className="w-[1512px] h-[294px] overflow-hidden shrink-0 flex flex-row items-center justify-end">
            <div className="w-[294px] flex flex-row items-center justify-start py-5 pr-[1312px] pl-0 box-border [align-self:start]">
              <img
                className="relative w-[200px] h-[60px] object-cover max-w-[1512px]"
                alt=""
                src="/logopng@2x.png"
              />
            </div>
            <div className="w-[756px] flex flex-col items-start justify-start pt-0 pb-6 pr-[296px] pl-0 box-border ml-[-1512px]">
              <div className="w-full flex flex-col items-start justify-start max-w-[460px]">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-6 pr-[310px] pl-0">
                  <div className="relative leading-[24px] font-semibold inline-block max-w-[460px]">
                    Join our newsletter
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-6 pr-[318.27001953125px] pl-0">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start">
                    <div className="rounded-lg bg-darkorange shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-start justify-start py-[13px] pr-[31.181167602539062px] pl-[32.548828125px] border-[1px] border-solid border-gainsboro">
                      <div className="relative text-base leading-[24px] font-medium font-inter text-white text-center">
                        Subscribe
                      </div>
                    </div>
                  </button>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-1 pl-0 text-xs text-dimgray">
                  <div className="relative leading-[16px] inline-block max-w-[460px]">
                    <p className="m-0">
                      Gain a competitive edge with the latest AI breakthroughs
                      and updates - all in a 5
                    </p>
                    <p className="m-0">
                      minute email. Our AI experts sift through the clutter,
                      honing in on the news that
                    </p>
                    <p className="m-0">truly matters.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[756px] flex flex-row items-start justify-start gap-[32px] ml-[-756px]">
            <div className="self-stretch w-[362px] flex flex-row items-start justify-start py-0 pr-[277px] pl-0 box-border">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[130px]">
                <div className="self-stretch flex flex-col items-start justify-start py-2 px-0">
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[19.779998779296875px] pl-0">
                    <div className="relative leading-[24px] font-semibold">
                      Address
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-slategray">
                  <div className="relative leading-[24px]">Dubai, UAE</div>
                </div>
              </div>
            </div>
            <div className="self-stretch w-[362px] flex flex-col items-start justify-start pt-2 px-0 pb-[130px] box-border gap-[8px]">
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[300px] pl-0">
                <div className="relative leading-[24px] font-semibold inline-block max-w-[362px]">
                  Contact
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[161px] pl-0 text-slategray">
                <div className="relative leading-[24px] inline-block max-w-[362px]">
                  Email:josh@morningside.ai
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
