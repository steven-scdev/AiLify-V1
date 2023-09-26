import type { NextPage } from "next";
import CardContainer1 from "./CardContainer1";

const TeamContainer: NextPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-0 px-3 box-border max-w-[1536px] text-center text-5xl text-darkorange font-space-grotesk">
      <div className="flex flex-row items-center justify-center pt-32 px-0 pb-6">
        <div className="flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-center justify-start">
            <b className="relative leading-[32px] uppercase">Meet The Team</b>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between text-left text-13xl text-gray-100">
        <CardContainer1
          userImageUrl="/1png@2x.png"
          employeeTitle="Liam Ottley"
          executiveImageUrl="CEO"
        />
        <CardContainer1
          userImageUrl="/2png@2x.png"
          employeeTitle="Josh Brown"
          executiveImageUrl="Head of Operations"
        />
        <CardContainer1
          userImageUrl="/3png@2x.png"
          employeeTitle="Spencer Porter"
          executiveImageUrl="CTO"
        />
      </div>
    </div>
  );
};

export default TeamContainer;
