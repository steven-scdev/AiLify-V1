import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <header className="self-stretch my-0 mx-[!important] absolute w-full top-[0px] right-[0%] left-[0%] h-[90px] flex flex-col items-center justify-start py-0 px-48 box-border z-[2] text-left text-base text-black font-inter">
      <div className="w-full h-[100px] flex flex-row items-center justify-between py-5 pr-[11.999969482421875px] pl-3 box-border max-w-[1536px]">
        <div className="flex flex-row items-center justify-center">
          <img
            className="max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/div@2x.png"
          />
        </div>
        <div className="w-[368.34px] flex flex-row items-start justify-start">
          <div className="self-stretch flex-1 rounded-lg flex flex-col items-start justify-start py-3 pr-[30.169998168945312px] pl-8">
            <div className="relative leading-[24px] font-medium">
              Our services
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-darkorange flex flex-col items-start justify-start py-3 pr-[29.169998168945312px] pl-8 text-white">
            <div className="relative leading-[24px] font-medium">
              Join our newsletter
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
