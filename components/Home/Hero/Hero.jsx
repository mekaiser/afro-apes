import Button from "@/components/Shared/Button";
import React from "react";
import tw from "tailwind-styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <WorldImg></WorldImg>
        <InnerContainer>
          <LeftContainer>
            <StartingTitle>Our Fund, Your Profit</StartingTitle>
            <Title>
              <TFirstLine>Funding Promising</TFirstLine>
              <TSecondLine>
                <TGradWrd>Forex Traders</TGradWrd> Worldwide
              </TSecondLine>
            </Title>
            <Subtitle>
              FundedNext offers up to $200,000 funds to financially empower
              global traders and help them earn full-time.
            </Subtitle>
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
          </LeftContainer>
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
  rounded-xl
  overflow-hidden
  relative
`;

const InnerContainer = tw.div`
  py-28
  pl-72
  bg-hero_bg
  relative
  z-20
`;

const LeftContainer = tw.div``;

const StartingTitle = tw.span`
  font-semibold
  bg-hero_starting_title
  bg-clip-text
  text-transparent
`;

const Title = tw.h1`
  mt-4
  font-bold
  text-white
  text-5xl
  leading-snug
`;

const TFirstLine = tw.span`
  block
`;

const TSecondLine = tw.span`
  block
`;

const TGradWrd = tw.span`
  bg-clip-text 
  text-transparent 
  bg-gradient-to-r 
  from-[#6AFFF6]
  to-[#EF3DFF]
`;

const Subtitle = tw.p`
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
`

const JoinComTitle = tw.div`
  text-[#D8D8D8]
  font-medium
`

const SocialsContainer  = tw.div`
  mt-3
  flex
  gap-x-6
`

const SocialIcon = tw.img`
  w-[2rem]
  h-[2rem]
`

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
`