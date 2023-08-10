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
  pt-36
`;

const Container = tw.div`
  w-11/12
  lg:max-w-[110rem] 
  mx-auto
  rounded-[2.5rem]
  overflow-hidden
  relative
`;

const InnerContainer = tw.div`
  py-28
  pl-[16%]
  pr-[4%]
  bg-hero_bg
  grid
  grid-cols-2
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
  text-white
  text-5xl
  leading-snug
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
  gap-x-7
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
  gap-x-5
`;

const SocialIcon = tw.img`
  w-[2rem]
  h-[2rem]
`;

const WorldImg = tw.div`
  h-full
  aspect-square
  bg-[url("/assets/imgs/hero-earth.png")]
  bg-no-repeat
  bg-contain
  bg-center
  absolute
  top-0
  right-0
  rounded-xl
  overflow-hidden
  z-10
`;

const RightContainer = tw.div`
  w-full
  max-w-[29rem]
  aspect-[4/3]
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
  mt-20
  text-white
  text-center
  text-lg
  font-gesrics  
`;

const RTitle = tw.div`
  mt-3
  text-white
  text-center
  text-[2.5rem]
  font-gesrics
  leading-snug
  bg-hero_right_title
  bg-clip-text 
  text-transparent
  shadow_white_purple
`;

const Planet = tw.img`
  absolute
  w-28
  h-auto
  bottom-[24%]
  left-[46%]
`;
const Star1 = tw.img`
  absolute
  w-6
  h-auto
  top-[30%]
  left-[8%]
`;

const Star2 = tw.img`
  absolute
  w-5
  h-auto
  top-[12%]
  left-[54%]
`;

const Star3 = tw.img`
  absolute
  w-3
  h-auto
  bottom-[12%]
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
  bottom-[58%]
  left-[67%]
`;

const StarGroup = tw.img`
  absolute
  w-auto
  h-[95%]
  top-4
  left-[63%]
`;
