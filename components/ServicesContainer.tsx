import type { NextPage } from "next";
import CardContainer from "./CardContainer";

const ServicesContainer: NextPage = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start pt-32 px-3 pb-0 box-border max-w-[1536px] text-center text-5xl text-darkorange font-space-grotesk">
      <div className="self-stretch flex flex-col items-center justify-center">
        <div className="w-[1512px] flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border">
          <div className="self-stretch flex flex-col items-center justify-start">
            <b className="relative leading-[32px] uppercase">Our Services</b>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-black">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-center justify-center py-0 px-[276px]">
              <img
                className="flex-1 max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/divcanvas@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-row items-center justify-center">
              <CardContainer
                serviceOfferings="GPT-3 | GPT 4"
                serviceDescription="Development"
                serviceCapabilities="Language synthesis"
                knowledgeResponseImageUrl="Knowledge response"
                serviceTitle="Chatbot development"
                serviceSubtitle="Model tuning"
              />
              <CardContainer
                serviceOfferings="AI"
                serviceDescription="Consulting"
                serviceCapabilities="Feasibility assessments"
                knowledgeResponseImageUrl="Use case identification"
                serviceTitle="Performance evaluation"
                serviceSubtitle="Strategy development"
              />
              <CardContainer
                serviceOfferings="Natural Language"
                serviceDescription="Processing"
                serviceCapabilities="Document categorization"
                knowledgeResponseImageUrl="Data mining"
                serviceTitle="Text summarization"
                serviceSubtitle="Entity identification"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContainer;
