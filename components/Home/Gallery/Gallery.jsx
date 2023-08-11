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
          <BtnsMainContainer>
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
          </BtnsMainContainer>
        </BtnsContainer>

        <GalleryContainer>
          {selectedGal.imgs.map((img, i) => (
            <GalImg
              key={img}
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
  py-24
  md:py-32
  lg:py-48
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

const Title = tw.h2`
  max-w-3xl
  text-4xl
  md:text-5xl
  lg:text-6xl
  font-bold
  text-center
`;

const BtnsContainer = tw.div`  
  mt-8
  sm:mt-12
  lg:mt-14
  xl:mt-24
  flex
  justify-center
`;

const BtnsMainContainer = tw.div`
  max-sm:px-3
  max-lg:px-6
  max-lg:pt-8
  max-lg:pb-5
  max-xl:px-6
  max-xl:pt-8
  max-xl:pb-8
  flex
  gap-x-3
  sm:gap-x-4
  lg:gap-x-6
  max-xl:overflow-x-scroll
  scrollbar 
  scrollbar-thumb-[#4e55ff]
  scrollbar-track-transparent
  scrollbar-h-[0.3rem]
  scrollbar-rounded-[1px]
`

const GalBtn = tw.div`
  px-5
  xl:px-7
  py-2
  text-sm
  sm:text-base
  lg:text-lg
  font-medium
  whitespace-nowrap
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
  mt-16
  sm:mt-24
  md:mt-20
  lg:mt-24
  xl:mt-44
  h-[30rem]
  lg:h-[35rem]
  grid
  grid-cols-2
  md:grid-cols-4
  grid-rows-4
  md:grid-rows-2
  gap-5
  md:gap-6
  lg:gap-9
`;

const GalImg = tw.div`
  ${(p) => p.$selectedGalLen === 5 && p.$index === 0 && "col-span-2 row-span-2 md:col-span-2 md:row-span-2"}
  ${(p) => p.$selectedGalLen === 4 && p.$index === 0 && "max-md:row-span-2 md:col-span-2"}
  ${(p) => p.$selectedGalLen === 4 && p.$index === 1 && "max-md:row-span-2 md:col-span-2"}
  ${(p) => p.$selectedGalLen === 4 && p.$index === 2 && "max-md:row-span-2 md:col-span-2"}
  ${(p) => p.$selectedGalLen === 4 && p.$index === 3 && "max-md:row-span-2 md:col-span-2"}
  ${(p) => p.$selectedGalLen === 3 && p.$index === 0 && "col-span-2 row-span-2"}
  ${(p) => p.$selectedGalLen === 3 && p.$index === 1 && "max-md:row-span-2 md:col-span-2"}
  ${(p) => p.$selectedGalLen === 3 && p.$index === 2 && "max-md:row-span-2 md:col-span-2"}
  ${(p) =>
    p.$selectedGalLen === 2 &&
    (p.$index === 0 || p.$index === 1) &&
    "col-span-2 row-span-2"}
  ${(p) => p.$selectedGalLen === 1 && "max-md:col-span-2 max-md:row-span-4 md:col-span-4 md:row-span-4"}
  bg-cover
  bg-no-repeat
  bg-center
  rounded-lg
  md:rounded-xl
`;
