import React from "react";
import tw from "tailwind-styled-components";
import Globe from "./Globe";
import Stat from "./Stat";

const Stats = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          <TitleWords>Next Ventures</TitleWords> so far....
        </Title>
        <Subtitle>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia
        </Subtitle>
        <GlobeContainer>
          <GlobeMainContainer>
            <Globe />
          </GlobeMainContainer>
        </GlobeContainer>
        <StatsContainer>
          <StatsMainContainer>
            <Stat title="Team Member" num={100} suffix="+" />
            <Stat title="Active Clients" num={20} suffix="k+" />
            <Stat title="Countries" num={100} suffix="+" />
            <Stat title="Offices" num={5} suffix="+" />
          </StatsMainContainer>
        </StatsContainer>
      </Container>
    </Wrapper>
  );
};

export default Stats;

// Tailwind Styled Components

const Wrapper = tw.section`
  pt-40
`;

const Container = tw.div`
`;

const Title = tw.h2`
  text-[2.5rem]
  text-center
  font-bold
`;

const TitleWords = tw.span`
  text-[#4E55FF]
`;

const Subtitle = tw.p`
  mt-3
  text-lg
  text-[#565656]
  text-center
`;

const GlobeContainer = tw.div`
  h-[28rem]
  relative
  overflow-hidden
`;

const GlobeMainContainer = tw.div`
  absolute
  top-0
  left-1/2
  -translate-x-1/2
  -translate-y-8
`;

const StatsContainer = tw.div`
  bg-[#F6F6F6]
  border-t
  border-b
  border-[#DFDFDF]
`;

const StatsMainContainer = tw.div`
  py-12
  w-11/12
  lg:max-w-[55rem] 
  mx-auto
  flex
  justify-between
`;
