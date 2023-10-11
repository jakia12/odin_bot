import { Link } from "react-router-dom";

import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Positional Trading", "Market Making", "AI Observer"];

const LandingSection = () => {
  // const texts = ["Positional Trading", "Market Making", "AI Observer"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className="firstBg flex flex-col justify-center">
      <div className="">
        <div className="text-center text-[17px]">
          <Link
            to="#"
            className="bg-black border border-[#B7E5FF] px-8 py-2 rounded-3xl"
          >
            ✦ Try Odin Now
          </Link>
        </div>
        <h2 className="font-medium text-center text-xl md:text-[42px] md:leading-[50px] lg:leading-[59px] my-10">
          Enter Odin, a Telegram Based <br />
          <br className="block lg:hidden" />
          <div className="flex items-center justify-center ">
            <TextTransition springConfig={presets.stiff} direction="up">
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
            <span className="ml-3"> Bot On Ethereum</span>
          </div>
        </h2>
        <div className="flex justify-center gap-10">
          <button className="px-8 bg-[#B7E5FF] text-black text-[17px] font-medium py-2 rounded-3xl font">
            <Link to="#">Buy $ODIN</Link>
          </button>
          <button className="px-8 bg-[#B7E5FF] text-black text-[17px] font-medium py-2 rounded-3xl font">
            <Link to="#">Learn More</Link>
          </button>
        </div>
      </div>

      <div className="absolute w-[97vw] right-0 left-0 mx-auto bottom-12 px-10 flex justify-between items-end">
        <ul className="flex flex-col gap-2">
          <li className="text-xs">
            <span className="text-[#676767]">/ </span>BENEFITS
          </li>
          <li className="text-xs">
            <span className="text-[#676767]">/</span> AUDITS
          </li>
          <li className="text-xs">
            <span className="text-[#676767]">/</span> MANIFESTO
          </li>
        </ul>
        <button className="hidden lg:block">
          <a href="#introSection">
            <img src="icons/downArrow.svg" alt="" />
          </a>
        </button>
        <p className="text-xs text-[#fff]">Version 1.0.0</p>
      </div>
    </section>
  );
};

export default LandingSection;
