import tw from "tailwind-styled-components";
import Globe from "./Globe";
import Stat from "./Stat";

const Stats = ({ globeLoadHandler }) => {
  return (
    <Wrapper>
      <Container>
        <TitleAndSubContainer>
          <Title>
            <TitleWords>Next Ventures</TitleWords> so far....
          </Title>
          <Subtitle>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia
          </Subtitle>
        </TitleAndSubContainer>
        <GlobeContainer>
          <GlobeMainContainer>
            <Globe globeLoadHandler={globeLoadHandler} />
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
  py-12
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
