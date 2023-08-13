import stats from "@/data/stats";
import { useIsomorphicLayoutEffect } from "@/helpers/isomorphicEffect";
import { Elastic, Power4, gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import Globe from "./Globe";
import Stat from "./Stat";

const Stats = ({ globeLoadHandler }) => {
  const [isDOMLoaded, setDOMLoaded] = useState(false);
  const [startCount, setStartCount] = useState(false);

  const rootRef = useRef();
  const contentsRef = useRef();

  const titleRef = useRef();
  const subtitleRef = useRef();

  const globeContainerRef = useRef();
  const statsContainerRef = useRef();
  const statsRef = useRef([]);

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
          const tlTitleAndSubtitle = gsap.timeline({
            scrollTrigger: {
              trigger: titleRef.current,
              start: isMobile ? "top center+=200" : "top center+=300",
              end: isMobile ? "top center+=200" : "top center+=300",
            },
          });
          const tlGlobe = gsap.timeline({
            scrollTrigger: {
              trigger: contentsRef.current,
              start: "top center",
              end: "top center",
            },
          });
          const tlStats = gsap.timeline({
            scrollTrigger: {
              trigger: globeContainerRef.current,
              start: () => (isMobile ? "top bottom-=280" : "top bottom-=350"),
              end: () => (isMobile ? "top bottom-=280" : "top bottom-=350"),
              onEnter: () => {
                setStartCount(true);
              },
            },
          });

          const statsGsapArr = gsap.utils.toArray([...statsRef.current]);

          tl.from(contentsRef.current, { ease: "linear", autoAlpha: 0 });
          tlTitleAndSubtitle
            .from(titleRef.current, {
              y: 100,
              ease: Power4.easeOut,
              duration: 1.5,
            })
            .from(
              subtitleRef.current,
              { opacity: 0, x: -80, ease: Power4.easeOut, duration: 1.5 },
              "<20%"
            );

          tlGlobe.from(globeContainerRef.current, {
            opacity: 0,
            scale: 0.5,
            ease: Elastic.easeOut.config(1, 0.5),
            duration: 1.5,
          });
          tlStats.from(statsGsapArr, {
            opacity: 0,
            y: 60,
            ease: Elastic.easeOut.config(1, 0.5),
            stagger: 0.12,
            duration: 1.5,
          });
        }
      },
      rootRef
    );

    return () => mm.revert();
  }, [isDOMLoaded]);

  useEffect(() => {
    setDOMLoaded(true);
  }, []);

  return (
    <Wrapper ref={rootRef}>
      <Container ref={contentsRef}>
        <TitleAndSubContainer>
          <TitleContainer>
            <Title ref={titleRef}>
              <TitleWords>Next Ventures</TitleWords> so far....
            </Title>
          </TitleContainer>

          <Subtitle ref={subtitleRef}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia
          </Subtitle>
        </TitleAndSubContainer>
        <GlobeContainer>
          <GlobeMainContainer ref={globeContainerRef}>
            <Globe globeLoadHandler={globeLoadHandler} />
          </GlobeMainContainer>
        </GlobeContainer>
        <StatsContainer>
          <StatsMainContainer ref={statsContainerRef}>
            {stats.map((stat, i) => (
              <Stat
                key={stat.title}
                title={stat.title}
                num={stat.num}
                suffix={stat.suffix}
                startCount={startCount}
                index={i}
                ref={statsRef}
              />
            ))}
          </StatsMainContainer>
        </StatsContainer>
      </Container>
    </Wrapper>
  );
};

export default Stats;

const Wrapper = tw.section`
  pt-24
  sm:pt-24
  md:pt-32
  lg:pt-40
`;

const Container = tw.div``;

const TitleAndSubContainer = tw.div`
  w-11/12
  lg:max-w-[110rem] 
  mx-auto
`;

const TitleContainer = tw.div`
  overflow-hidden
`;

const Title = tw.h2`
  text-3xl
  md:text-[2.5rem]
  text-center
  font-bold
`;

const TitleWords = tw.span`
  text-[#4E55FF]
`;

const Subtitle = tw.p`
  mt-3
  text-base
  md:text-lg
  text-[#565656]
  text-center
`;

const GlobeContainer = tw.div`
  mt-8
  md:mt-0
  h-48
  sm:h-64
  md:h-[22rem]
  lg:h-[28rem]
  relative
  overflow-hidden
`;

const GlobeMainContainer = tw.div`
  absolute
  top-0
  left-1/2
  -translate-x-1/2
  -translate-y-10
`;

const StatsContainer = tw.div`
  bg-[#F6F6F6]
  border-t
  border-b
  border-[#DFDFDF]
`;

const StatsMainContainer = tw.div`
  max-md:py-8
  py-14
  w-11/12
  lg:max-w-[55rem] 
  mx-auto
  max-md:grid
  max-md:grid-cols-2
  max-md:gap-x-4
  max-md:gap-y-10
  md:flex
  md:justify-between
`;
