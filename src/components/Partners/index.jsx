import React from "react";
import styled, { keyframes } from "styled-components";
import hamkor1 from "../../assets/images/xalqaroHamkorlar/hamkor1.png";
import hamkor2 from "../../assets/images/xalqaroHamkorlar/hamkor2.png";
import hamkor3 from "../../assets/images/xalqaroHamkorlar/hamkor3.png";
import hamkor4 from "../../assets/images/xalqaroHamkorlar/hamkor4.png";
import hamkor5 from "../../assets/images/xalqaroHamkorlar/hamkor5.png";
import hamkor6 from "../../assets/images/xalqaroHamkorlar/hamkor6.png";
import hamkor7 from "../../assets/images/xalqaroHamkorlar/hamkor7.png";
import hamkor8 from "../../assets/images/xalqaroHamkorlar/hamkor8.png";

function Partners() {
  const row = [
    hamkor1,
    hamkor2,
    hamkor3,
    hamkor4,
    hamkor5,
    hamkor6,
    hamkor7,
    hamkor8,
  ];
  return (
    <div className="max-w-8xl mx-auto py-10 bg-slate-100">
      <h1 className="text-xl lg:text-4xl font-bold text-[#004269] text-center">
        Hamkorlarimiz
      </h1>
      <div>
        <Marquee>
          <MarqueeGroup>
            {row.map((el, idx) => (
              <ImageGroup className="w-[100px]" key={idx}>
                <Image className="w-[100px] h-[100px] bg-white" src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row.map((el, idx) => (
              <ImageGroup className="w-[100px]" key={idx}>
                <Image className="w-[100px] h-[100px] bg-white" src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row.map((el, idx) => (
              <ImageGroup className="w-[100px]" key={idx}>
                <Image className="w-[100px] h-[100px] bg-white" src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </div>
    </div>
  );
}

export default Partners;

const Marquee = styled.div`
  display: flex;
  overflow: hidden;
  user-select: none;
`;

const scrollX = keyframes`
  from{
    left:translateX(0);
  }
  to{
    transform: translateX(-100%);
  }`;

const MarqueeGroup = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 80%;

  @media (max-width: 1400px) {
    width: 110%;
  }

  @media (max-width: 1024px) {
    width: 150%;
  }

  @media (max-width: 767px) {
    width: 180%;
  }

  @media (max-width: 467px) {
    width: 220%;
  }

  animation: ${scrollX} 15s linear infinite;
`;
const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 15rem;
  aspect-ratio: 16/16;
  padding: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0;
`;
