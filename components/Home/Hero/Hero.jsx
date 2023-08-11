import Button from "@/components/Shared/Button";
import tw from "tailwind-styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <WorldImg></WorldImg>
        <InnerContainer>
          <Planet src="/assets/icons/planet.svg" />
          <Star1 src="/assets/icons/star.svg" />
          <Star2 src="/assets/icons/star.svg" />
          <Star3 src="/assets/icons/star.svg" />
          <Star4 src="/assets/icons/star.svg" />
          <Star5 src="/assets/icons/star.svg" />
          <StarGroup src="/assets/icons/star-group.svg" />

          <LContainer>
            <LStartingTitle>Our Fund, Your Profit</LStartingTitle>
            <LTitle>
              <LTFirstLine>Funding Promising</LTFirstLine>
              <LTSecondLine>
                <LTGradWrd>Forex Traders</LTGradWrd> Worldwide
              </LTSecondLine>
            </LTitle>
            <LSubtitle>
              FundedNext offers up to $200,000 funds to financially empower
              global traders and help them earn full-time.
            </LSubtitle>
            <BtnsContainer>
              <Button name="Get Funded" />
              <Button name="Join Our Discord" />
            </BtnsContainer>

            <JoinComContainer>
              <JoinComTitle>Join Our Community</JoinComTitle>
              <SocialsContainer>
                <SocialIcon src="/assets/icons/icon-discord.svg" alt="" />
                <SocialIcon src="/assets/icons/icon-telegram.svg" alt="" />
                <SocialIcon src="/assets/icons/icon-facebook.svg" alt="" />
              </SocialsContainer>
            </JoinComContainer>
          </LContainer>
          <RightContainer>
            <TextContainer>
              <RStartingTitle>Introducing</RStartingTitle>
              <RTitle>
                Stellar <br /> Challenge
              </RTitle>
            </TextContainer>
          </RightContainer>
        </InnerContainer>
      </Container>
    </Wrapper>
  );
};

export default Hero;

// Tailwind Styled Components

const Wrapper = tw.section`
  pt-28
  md:pt-36
`;

const Container = tw.div`
  w-11/12
  lg:max-w-[110rem] 
  mx-auto
  rounded-2xl
  md:rounded-[2.5rem]
  overflow-hidden
  relative
`;

const InnerContainer = tw.div`
  py-16
  sm:py-20
  lg:py-28
  px-[6%]
  sm:px-[8%]
  lg:pl-[10%]
  xl:pl-[6%]
  2xl:pl-[16%]
  lg:pr-[4%]
  xl:pr-[3%]
  2xl:pr-[4%]
  bg-hero_bg_2
  lg:bg-hero_bg
  grid
  grid-cols-1
  grid-rows-1
  lg:grid-cols-[1.5fr_1fr]
  relative
  z-20
`;

const LContainer = tw.div`
  z-10
`;

const LStartingTitle = tw.span`
  font-semibold
  bg-hero_left_starting_title
  bg-clip-text
  text-transparent
`;

const LTitle = tw.h1`
  mt-4
  font-bold
  !text-white
  text-4xl
  sm:hero_resp_title
  lg:text-4xl
  xl:text-5xl
  !leading-snug
`;

const LTFirstLine = tw.span`
  block
`;

const LTSecondLine = tw.span`
  block
`;

const LTGradWrd = tw.span`
  bg-clip-text 
  text-transparent 
  bg-gradient-to-r 
  from-[#6AFFF6]
  to-[#EF3DFF]
`;

const LSubtitle = tw.p`
  mt-3
  max-w-[32rem]
  text-[#D8D8D8]
`;

const BtnsContainer = tw.div`
  mt-10
  flex
  gap-x-5
  sm:gap-x-7
`;

const JoinComContainer = tw.div`
  mt-8
`;

const JoinComTitle = tw.div`
  text-[#D8D8D8]
  font-medium
`;

const SocialsContainer = tw.div`
  mt-3.5
  flex
  gap-x-4
  sm:gap-x-5
`;

const SocialIcon = tw.img`
  w-7
  sm:w-[2rem]
  aspect-square
`;

const WorldImg = tw.div`
  max-lg:w-full
  lg:h-full
  aspect-square
  bg-[url("/assets/imgs/hero-earth.png")]
  bg-no-repeat
  bg-cover
  bg-center
  absolute
  bottom-0
  lg:top-0
  right-1/2
  lg:right-0
  translate-x-1/2
  lg:translate-x-24
  xl:translate-x-16
  2xl:translate-x-6
  translate-y-12
  lg:translate-y-0
  max-lg:scale-125
  z-10
`;

const RightContainer = tw.div`
  max-lg:mt-24
  w-full
  lg:max-w-[20rem]
  xl:max-w-[29rem]
  aspect-[4/2.36]
  bg-[url('/assets/imgs/hero-right-rectangle.svg')]
  bg-contain
  bg-no-repeat
  bg-center
  justify-self-end
  self-center
  z-10
`;

const TextContainer = tw.div``;

const RStartingTitle = tw.div`
  mt-10
  sm:mt-12
  lg:mt-8
  xl:mt-12
  text-white
  text-center
  text-base
  sm:text-lg
  lg:text-base
  xl:text-lg
  font-gesrics  
`;

const RTitle = tw.div`
  mt-3
  text-center
  text-3xl
  sm:hero_resp_title
  lg:text-3xl
  xl:text-[2.5rem]
  font-gesrics
  !leading-tight
  bg-hero_right_title
  bg-clip-text 
  text-transparent
  shadow_white_purple
`;

const Planet = tw.img`
  absolute
  w-20
  sm:w-24
  md:w-28
  h-auto
  top-[62%]
  sm:top-[35%]
  lg:top-[64%]
  left-[65%]
  sm:left-[75%]
  lg:left-[46%]
`;
const Star1 = tw.img`
  absolute
  w-5
  md:w-6
  h-auto
  top-[3%]
  sm:top-[5%]
  2xl:top-[30%]
  left-[60%]
  sm:left-[40%]
  lg:left-[25%]
  2xl:left-[8%]
`;

const Star2 = tw.img`
  absolute
  w-4
  sm:w-5
  h-auto
  top-[8%]
  sm:top-[12%]
  left-[80%]
  sm:left-[70%]
  lg:left-[54%]
`;

const Star3 = tw.img`
  absolute
  w-3
  h-auto
  bottom-[6%]
  lg:bottom-[12%]
  left-[34%]
`;

const Star4 = tw.img`
  absolute
  w-3
  h-auto
  bottom-[28%]
  left-[61%]
`;

const Star5 = tw.img`
  absolute
  w-3
  h-auto
  bottom-[44%]
  sm:bottom-[58%]
  right-4
  sm:left-[67%]
`;

const StarGroup = tw.img`
  absolute
  w-auto
  h-[95%]
  top-4
  left-[63%]
`;
