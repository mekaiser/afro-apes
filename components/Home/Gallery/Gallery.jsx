"use client";

import galleries from "@/data/galleries";
import { useState } from "react";
import tw from "tailwind-styled-components";

const galleryBtns = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Picnic 2021",
  },
  {
    id: 3,
    name: "Thailand Tour",
  },
  {
    id: 4,
    name: "Eid Celebration",
  },
  {
    id: 5,
    name: "Pohela Boishakh 2022",
  },
];

const Gallery = () => {
  const [selectedGal, setSelectedGal] = useState(galleries[0]);

  const galleryHandler = (_id) => {
    const foundGal = galleries.find((gal) => gal.id === _id);

    setSelectedGal(foundGal);
  };
  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <Title>Next Venture is a family of brands</Title>
        </TitleContainer>

        <BtnsContainer>
          {galleryBtns.map((btn) => (
            <GalBtn
              key={btn.id}
              $galId={btn.id}
              $selectedGalId={selectedGal.id}
              onClick={() => galleryHandler(btn.id)}
            >
              {btn.name}
            </GalBtn>
          ))}
        </BtnsContainer>

        <GalleryContainer>
          {selectedGal.imgs.map((img, i) => (
            <GalImg
              style={{ backgroundImage: `url(${img})` }}
              $selectedGalLen={selectedGal.imgs.length}
              $index={i}
            />
          ))}
        </GalleryContainer>
      </Container>
    </Wrapper>
  );
};

export default Gallery;

// Tailwind Styled Components

const Wrapper = tw.section`
  py-44
`;

const Container = tw.div`
  w-11/12
  lg:max-w-[100rem] 
  mx-auto
`;

const TitleContainer = tw.div`
  flex
  justify-center
`;

const Title = tw.h1`
  max-w-3xl
  text-6xl
  font-bold
  text-center
`;

const BtnsContainer = tw.div`
  mt-24
  flex
  justify-center
  gap-x-7
`;

const GalBtn = tw.div`
  px-7
  py-2
  text-lg
  font-medium
  rounded-full
  shadow-gray
  text-[#505050]
  cursor-pointer
  border
  border-transparent
  ${(p) => p.$galId === p.$selectedGalId && "text-[#4E55FF] border-[#4E55FF]"}
  transition-all
  ease-out
  duration-300
`;

const GalleryContainer = tw.div`
  mt-40
  h-[35rem]
  grid
  grid-cols-4
  grid-rows-2
  gap-10
`;

const GalImg = tw.div`
  ${(p) => p.$selectedGalLen === 5 && p.$index === 0 && "col-span-2 row-span-2"}
  ${(p) => p.$selectedGalLen === 4 && p.$index === 0 && "col-span-2"}
  ${(p) => p.$selectedGalLen === 4 && p.$index === 1 && "col-span-2"}
  ${(p) => p.$selectedGalLen === 4 && p.$index === 2 && "col-span-2"}
  ${(p) => p.$selectedGalLen === 4 && p.$index === 3 && "col-span-2"}
  ${(p) => p.$selectedGalLen === 3 && p.$index === 0 && "col-span-2 row-span-2"}
  ${(p) => p.$selectedGalLen === 3 && p.$index === 1 && "col-span-2"}
  ${(p) => p.$selectedGalLen === 3 && p.$index === 2 && "col-span-2"}
  ${(p) =>
    p.$selectedGalLen === 2 &&
    (p.$index === 0 || p.$index === 1) &&
    "col-span-2 row-span-2"}
  ${(p) => p.$selectedGalLen === 1 && "col-span-4 row-span-4"}
  bg-cover
  bg-no-repeat
  bg-center
  rounded-xl
`;
