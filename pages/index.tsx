import type { NextPage } from "next";
import AiLifyContainer from "../components/AiLifyContainer";
import ServicesContainer from "../components/ServicesContainer";
import TeamContainer from "../components/TeamContainer";
import ContactForm from "../components/ContactForm";
import NewsletterForm from "../components/NewsletterForm";
import Header from "../components/Header";

const MorningsideaiByHtmltodesi: NextPage = () => {
  return (
    <div className="relative w-full h-[4781px] flex flex-col items-start justify-start">
      <img
        className="my-0 mx-[!important] absolute top-[0px] left-[0px] max-h-full w-full overflow-hidden object-cover z-[0]"
        alt=""
        src="/divnova@2x.png"
      />
      <main className="w-[1860px] flex flex-col items-center justify-start gap-[40px] z-[1] text-center text-5xl text-darkorange font-space-grotesk sm:flex-col w-full">
        <div className="w-[1863px] flex flex-col items-center justify-start">
          <AiLifyContainer />
          <div className="w-full flex flex-row items-center justify-center py-32 px-3 box-border max-w-[1536px]">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
                <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[698.8171997070312px] pl-[699.1828002929688px]">
                  <b className="w-full relative leading-[32px] uppercase inline-block max-w-[1512px]">
                    About Us
                  </b>
                </div>
                <div className="w-[790px] flex flex-col items-center justify-start py-0 pr-[3.394993782043457px] pl-[3.605006217956543px] box-border max-w-[790px] text-[20px] text-dimgray">
                  <div className="w-full relative leading-[35px] inline-block max-w-[790px]">
                    <p className="m-0">
                      Morningside AI is your full-cycle AI development partner,
                      from concept to
                    </p>
                    <p className="m-0">
                      production and beyond. We're not just machine learning
                      specialists, we're the
                    </p>
                    <p className="m-0">
                      team that helps startups and enterprises create
                      cutting-edge AI products that
                    </p>
                    <p className="m-0">
                      optimize efficiency and accelerate growth. Led by founder
                      Liam Ottley, we guide
                    </p>
                    <p className="m-0">
                      you through the entire process and shape your ideas into
                      ready-to-go solutions.
                    </p>
                    <p className="m-0">
                      With our expertise across multiple industries, we'll help
                      you build an innovative
                    </p>
                    <p className="m-0">
                      product that fosters your company's success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-gray-200 w-[1866px] h-[376px]" />
          <ServicesContainer />
          <TeamContainer />
          <ContactForm />
        </div>
        <NewsletterForm />
      </main>
      <Header />
    </div>
  );
};

export default MorningsideaiByHtmltodesi;
