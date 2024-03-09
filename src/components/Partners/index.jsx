import React from "react";
import styled, { keyframes } from "styled-components";
import hamkor1 from "../../assets/images/hamkor1.png";
import hamkor2 from "../../assets/images/hamkor4.png";
import hamkor3 from "../../assets/images/hamkor3.png";
import hamkor4 from "../../assets/images/hamkor4.png";
import hamkor5 from "../../assets/images/hamkor4.png";

function Partners() {
  const row = [hamkor1, hamkor2, hamkor3, hamkor4, hamkor5];
  return (
    <div className="max-w-8xl mx-auto py-10 md:py-10">
      <h1 className="text-xl lg:text-4xl font-bold text-[#004269] text-center">
        Hamkorlarimiz
      </h1>
      <div className="md:my-10">
        <Marquee>
          <MarqueeGroup>
            {row.map((el, idx) => (
              <ImageGroup className="w-[100px]" key={idx}>
                <Image className="w-[100px] h-[100px]" src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row.map((el, idx) => (
              <ImageGroup className="w-[100px]" key={idx}>
                <Image className="w-[100px] h-[100px]" src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row.map((el, idx) => (
              <ImageGroup className="w-[100px]" key={idx}>
                <Image className="w-[100px] h-[100px]" src={el} />
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
  width: 55%;

  @media (max-width: 1400px) {
    width: 75%;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 992px) {
    width: 120%;
  }

  @media (max-width: 767px) {
    width: 130%;
  }

  @media (max-width: 467px) {
    width: 150%;
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
