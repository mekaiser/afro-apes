import Button from "@/components/Shared/Button";
import ImageComp from "@/components/Shared/Image";
import Image from "next/image";
import tw from "tailwind-styled-components";

const socials = [
  {
    name: "discord",
    icon: "/assets/icons/icon-discord.svg",
    link: "/",
  },
  {
    name: "telegram",
    icon: "/assets/icons/icon-telegram.svg",
    link: "/",
  },
  {
    name: "facebook",
    icon: "/assets/icons/icon-facebook.svg",
    link: "/",
  },
];

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <WorldImg>
          <ImageComp src="/assets/imgs/hero-earth.png" alt="world-img" />
        </WorldImg>
        <InnerContainer>
          <Planet>
            <ImageComp src="/assets/icons/planet.svg" alt="planet-icon" />
          </Planet>

          <Star1>
            <ImageComp src="/assets/icons/star.svg" alt="star-icon" />
          </Star1>

          <Star2>
            <ImageComp src="/assets/icons/star.svg" alt="star-icon" />
          </Star2>

          <Star3>
            <ImageComp src="/assets/icons/star.svg" alt="star-icon" />
          </Star3>

          <Star4>
            <ImageComp src="/assets/icons/star.svg" alt="star-icon" />
          </Star4>

          <Star5>
            <ImageComp src="/assets/icons/star.svg" alt="star-icon" />
          </Star5>

          <StarGroup>
            <ImageComp
              src="/assets/icons/star-group.svg"
              alt="star-group-icon"
            />
          </StarGroup>

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
                {socials.map((social) => (
                  <SocialIcon key={social.name}>
                    <ImageComp
                      src={social.icon}
                      width={32}
                      height={32}
                      alt={social.name}
                    />
                  </SocialIcon>
                ))}

                <SocialIcon src="" alt="" />
                <SocialIcon src="" alt="" />
              </SocialsContainer>
            </JoinComContainer>
          </LContainer>
          <RightContainer>
            <Image
              src="/assets/imgs/hero-right-rectangle.svg"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              style={{ objectFit: "contain" }}
              alt="world-ring"
              priority
            />
            ;
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

const SocialIcon = tw.div`
  relative
`;

const WorldImg = tw.div`
  max-lg:w-full
  lg:h-full
  aspect-square
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
  justify-self-end
  self-center
  relative
  z-10
`;

const TextContainer = tw.div`
  relative
  z-10
`;

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

const Planet = tw.div`
  absolute
  w-20
  sm:w-24
  md:w-28
  aspect-[3/2]
  top-[62%]
  sm:top-[35%]
  lg:top-[64%]
  left-[65%]
  sm:left-[75%]
  lg:left-[46%]
  animate-float_y
`;
const Star1 = tw.div`
  absolute
  w-5
  md:w-6
  aspect-square
  top-[3%]
  sm:top-[5%]
  2xl:top-[30%]
  left-[60%]
  sm:left-[40%]
  lg:left-[25%]
  2xl:left-[8%]
  animate-blink_1
`;

const Star2 = tw.div`
  absolute
  w-4
  sm:w-5
  aspect-square
  top-[8%]
  sm:top-[12%]
  left-[80%]
  sm:left-[70%]
  lg:left-[54%]
  animate-blink_2
`;

const Star3 = tw.div`
  absolute
  w-3
  aspect-square
  bottom-[6%]
  lg:bottom-[12%]
  left-[34%]
  animate-blink_3
`;

const Star4 = tw.div`
  absolute
  w-3
  aspect-square
  bottom-[28%]
  left-[61%]
  animate-blink_4
`;

const Star5 = tw.div`
  absolute
  w-3
  aspect-square
  bottom-[44%]
  sm:bottom-[58%]
  right-4
  sm:left-[67%]
  animate-blink_3
`;

const StarGroup = tw.div`
  absolute
  aspect-[1/2]
  h-[95%]
  top-4
  left-[63%]
`;
