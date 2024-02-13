import React from "react";
import styled, { keyframes, css } from "styled-components";
import hamkor1 from "../../assets/images/hamkor1.png";
import hamkor2 from "../../assets/images/hamkor4.png";
import hamkor3 from "../../assets/images/hamkor3.png";
import hamkor4 from "../../assets/images/hamkor4.png";
import hamkor5 from "../../assets/images/hamkor4.png";

function Partners() {
  const row = [hamkor1, hamkor2, hamkor3, hamkor4, hamkor5];
  return (
    <div className="max-w-8xl mx-auto py-10 md:py-20">
      <h1 className="text-xl lg:text-4xl font-bold text-[#004269] text-center">
        Hamkorlarimiz
      </h1>
      <div>
        <Marquee>
          <MarqueeGroup>
            {row.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row.map((el) => (
              <ImageGroup>
                <Image src={el} />
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

{
  /* <div className="h-40 w-40 flex justify-center items-center p-3 rounded-full shadow-md">
  <img src={hamkor3} alt="" />
</div>
<div className="h-40 w-40 flex justify-center items-center p-3 rounded-full shadow-md">
  <img
    src="https://kspi.uz/wp-content/uploads/2022/09/hamkor4.png"
    alt=""
  />
</div>
<div className="h-40 w-40 flex justify-center items-center p-3 rounded-full shadow-md">
  <img
    className="object-cover"
    src="https://kspi.uz/wp-content/uploads/2022/09/hamkor1.png"
    alt=""
  />
</div>
<div className="h-40 w-40 flex justify-center items-center p-3 rounded-full shadow-md">
  <img
    src="https://kspi.uz/wp-content/uploads/2022/09/hamkor2.jpg"
    alt=""
  />
</div>
<div className="h-40 w-40 flex justify-center items-center p-3 rounded-full shadow-md">
  <img
    src="https://kspi.uz/wp-content/uploads/2022/09/hamkor2.jpg"
    alt=""
  />
</div>
<div className="h-40 w-40 flex justify-center items-center p-3 rounded-full shadow-md">
  <img
    src="https://kspi.uz/wp-content/uploads/2022/09/hamkor2.jpg"
    alt=""
  />
</div>
<div className="h-40 w-40 flex justify-center items-center p-5 rounded-full shadow-md">
  <img
    src="https://kspi.uz/wp-content/uploads/2022/09/hamkor2.jpg"
    alt=""
  />
</div> */
}
