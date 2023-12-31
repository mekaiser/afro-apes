import galleries from "@/data/galleries";
import { useIsomorphicLayoutEffect } from "@/helpers/isomorphicEffect";
import { Power4, gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  const [isDOMLoaded, setDOMLoaded] = useState(false);
  const [selectedGal, setSelectedGal] = useState(galleries[0]);

  const rootRef = useRef();
  const contentsRef = useRef();

  const titleRef = useRef();

  const galContainer = useRef();
  const imgsRef = useRef([]);

  const tlImgsRef = useRef();

  const galleryHandler = (_id) => {
    tlImgsRef.current.reverse();

    tlImgsRef.current.eventCallback("onReverseComplete", () => {
      const foundGal = galleries.find((gal) => gal.id === _id);
      setSelectedGal(foundGal);
    });
  };

  useIsomorphicLayoutEffect(() => {
    let mm = gsap.matchMedia(),
      breakPoint = 640;

    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
      },
      (context) => {
        if (isDOMLoaded) {
          let { isDesktop, isMobile } = context.conditions;

          const tl = gsap.timeline({ defaults: { ease: "none" } });
          const tlTitle = gsap.timeline({
            scrollTrigger: {
              trigger: titleRef.current,
              start: isMobile ? "top center+=200" : "top center+=300",
              end: isMobile ? "top center+=200" : "top center+=300",
            },
          });

          tl.from(contentsRef.current, { ease: "linear", autoAlpha: 0 });
          tlTitle.from(titleRef.current, {
            y: 120,
            ease: Power4.easeOut,
            duration: 1.5,
          });
        }
      },
      rootRef
    );

    return () => mm.revert();
  }, [isDOMLoaded]);

  useIsomorphicLayoutEffect(() => {
    let gsapCtx = gsap.context(() => {
      if (isDOMLoaded) {
        tlImgsRef.current = gsap.timeline({
          scrollTrigger: {
            trigger: contentsRef.current,
            start: "top center-=100",
            end: "top center-=100",
          },
          paused: true,
          onEnter: () => tlImgsRef.current.play(),
        });

        const imgsGsapArr = gsap.utils.toArray([...imgsRef.current]);

        tlImgsRef.current.from(imgsGsapArr, {
          opacity: 0,
          scale: 0.9,
          stagger: 0.1,
          duration: 0.3,
        });
      }
    }, rootRef);

    return () => gsapCtx.revert();
  }, [isDOMLoaded, selectedGal]);

  useEffect(() => {
    if (isDOMLoaded && selectedGal) {
      tlImgsRef.current.play();
    }
  }, [selectedGal]);

  useEffect(() => {
    setDOMLoaded(true);
  }, []);
  return (
    <Wrapper ref={rootRef}>
      <Container ref={contentsRef}>
        <TitleContainer>
          <Title ref={titleRef}>Next Venture is a family of brands</Title>
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

        <GalleryContainer ref={galContainer}>
          {selectedGal.imgs.map((img, i) => (
            <GalImg
              key={img}
              $selectedGalLen={selectedGal.imgs.length}
              $index={i}
              ref={(el) => (imgsRef.current[i] = el)}
            >
              <Image
                src={img}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 50vw"
                style={{ objectFit: "cover" }}
                alt="gal-img"
                priority
              />
            </GalImg>
          ))}
        </GalleryContainer>
      </Container>
    </Wrapper>
  );
};

export default Gallery;

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
  overflow-hidden
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
`;

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
  xl:mt-36
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
  w-full
  h-full
  ${(p) =>
    p.$selectedGalLen === 5 &&
    p.$index === 0 &&
    "col-span-2 row-span-2 md:col-span-2 md:row-span-2"}
  ${(p) =>
    p.$selectedGalLen === 4 &&
    p.$index === 0 &&
    "max-md:row-span-2 md:col-span-2"}
  ${(p) =>
    p.$selectedGalLen === 4 &&
    p.$index === 1 &&
    "max-md:row-span-2 md:col-span-2"}
  ${(p) =>
    p.$selectedGalLen === 4 &&
    p.$index === 2 &&
    "max-md:row-span-2 md:col-span-2"}
  ${(p) =>
    p.$selectedGalLen === 4 &&
    p.$index === 3 &&
    "max-md:row-span-2 md:col-span-2"}
  ${(p) => p.$selectedGalLen === 3 && p.$index === 0 && "col-span-2 row-span-2"}
  ${(p) =>
    p.$selectedGalLen === 3 &&
    p.$index === 1 &&
    "max-md:row-span-2 md:col-span-2"}
  ${(p) =>
    p.$selectedGalLen === 3 &&
    p.$index === 2 &&
    "max-md:row-span-2 md:col-span-2"}
  ${(p) =>
    p.$selectedGalLen === 2 &&
    (p.$index === 0 || p.$index === 1) &&
    "col-span-2 row-span-2"}
  ${(p) =>
    p.$selectedGalLen === 1 &&
    "max-md:col-span-2 max-md:row-span-4 md:col-span-4 md:row-span-4"}
  rounded-lg
  md:rounded-xl
  overflow-hidden
  relative
`;
