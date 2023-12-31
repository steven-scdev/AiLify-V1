import type { NextPage } from "next";

const ContactForm: NextPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-32 px-3 pb-0 box-border max-w-[1536px] text-center text-5xl text-darkorange font-space-grotesk">
      <div className="w-[1512px] flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border">
        <div className="self-stretch flex flex-col items-center justify-start">
          <b className="relative leading-[32px] uppercase">
            Let's get in touch
          </b>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-[378px] text-left text-lg text-darkgray font-inter">
        <div className="self-stretch bg-white flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col items-start justify-start py-16 px-4">
            <div className="self-stretch flex flex-col items-center justify-start gap-[20px] min-w-[250px]">
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-5 gap-[20px]">
                <div className="self-stretch box-border w-[352px] flex flex-col items-start justify-start pt-[3px] px-0 pb-[6.5px] border-b-[1px] border-solid border-lightgray-200">
                  <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 pr-[287px] pl-0">
                    <div className="self-stretch relative">Subject</div>
                  </div>
                </div>
                <div className="self-stretch box-border w-[352px] flex flex-col items-start justify-start pt-[3px] px-0 pb-[6.5px] border-b-[1px] border-solid border-lightgray-200">
                  <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 pr-[263px] pl-0">
                    <div className="self-stretch relative">Your email</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch relative box-border h-[152px] border-b-[1px] border-solid border-lightgray-200" />
              <div className="self-stretch relative box-border h-[64.5px] border-b-[1px] border-solid border-lightgray-200">
                <div className="absolute h-[calc(100%_-_36.5px)] w-[calc(100%_-_429px)] top-[-1px] right-[429px] bottom-[37.5px] left-[0px] flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[28px]">
                    What is you budget for this project
                  </div>
                </div>
                <div className="absolute top-[28px] left-[0px] w-[724px] overflow-hidden flex flex-row items-center justify-start">
                  <div className="flex-1 bg-whitesmoke flex flex-col items-start justify-center pt-3 pb-px pr-8 pl-0 border-b-[1px] border-solid border-gainsboro">
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 pr-[549px] pl-0">
                      <div className="w-full relative leading-[22.5px] inline-block max-w-[692px] max-h-[22.5px]">
                        less than $5,000
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-center justify-start py-[9.75px] px-0 ml-[-16px]">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/svg.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center pt-5 pb-0 pr-[310.59002685546875px] pl-[310.5799865722656px]">
                <button className="cursor-pointer [border:none] py-3 pr-[31.196792602539062px] pl-[31.633209228515625px] bg-darkorange self-stretch rounded-lg flex flex-col items-center justify-start">
                  <div className="relative text-base leading-[24px] font-medium font-inter text-white text-center">
                    Send
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
