import React from "react";
import styled, { keyframes, css } from "styled-components";
import hamkor3 from "../../assets/images/hamkor3.png";

function Partners() {
  const row = [
    hamkor3,
    "https://react.dev/images/home/community/react_india_sunil.webp",
    "../../assets/images/hamkor1.png",
    "../../assets/images/hamkor2.png",
    "../../assets/images/hamkor3.png",
    "../../assets/images/hamkor4.png",
  ];
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 md:py-20">
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-5">
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
        </Marquee>
      </div>
    </div>
  );
}

export default Partners;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: nowrap;
  border: 1px solid red;
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
  width: 100%;

  animation: ${scrollX} 20s linear infinite;
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
  border-radius: 5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
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
