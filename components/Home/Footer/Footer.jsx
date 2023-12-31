import Link from "next/link";
import tw from "tailwind-styled-components";
import Subscribe from "./Subscribe";
import Image from "next/image";
import ImageComp from "@/components/Shared/Image";

const marketplace = [
  {
    name: "All NFTs",
    link: "/",
  },
  {
    name: "Solana NFTs",
    link: "/",
  },
  {
    name: "Art",
    link: "/",
  },
  {
    name: "Collectibles",
    link: "/",
  },
  {
    name: "Domain Names",
    link: "/",
  },
  {
    name: "Music",
    link: "/",
  },
];

const myAccount = [
  {
    name: "Profile",
    link: "/",
  },
  {
    name: "Favorites",
    link: "/",
  },
  {
    name: "Watchlist",
    link: "/",
  },
  {
    name: "My Collections",
    link: "/",
  },
  {
    name: "Settings",
    link: "/",
  },
];

const resources = [
  {
    name: "Help Center",
    link: "/",
  },
  {
    name: "Platform Status",
    link: "/",
  },
  {
    name: "Partners",
    link: "/",
  },
  {
    name: "Gas-Free Marketplace",
    link: "/",
  },
  {
    name: "Taxes",
    link: "/",
  },
  {
    name: "Blog",
    link: "/",
  },
];

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <MainContainer>
          <LogoAndNLetterContainer>
            <Logo>
              <ImageComp
                src="assets/logos/logo-white.svg"
                alt="afro-apes-logo"
              />
            </Logo>

            <Subtitle>
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </Subtitle>
            <SubscribeContainerTop>
              <Subscribe />
            </SubscribeContainerTop>
          </LogoAndNLetterContainer>
          <MarketPlaceContainer>
            <NavItemsTitle>Marketplace</NavItemsTitle>
            <NavItemsContainer>
              {marketplace.map((item) => (
                <Link className="w-fit" key={item.name} href={item.link}>
                  <NavItem>{item.name}</NavItem>
                </Link>
              ))}
            </NavItemsContainer>
          </MarketPlaceContainer>
          <MyAccountContainer>
            <NavItemsTitle>My Account</NavItemsTitle>
            <NavItemsContainer>
              {myAccount.map((item) => (
                <Link className="w-fit" key={item.name} href={item.link}>
                  <NavItem>{item.name}</NavItem>
                </Link>
              ))}
            </NavItemsContainer>
          </MyAccountContainer>
          <ResourceContainer>
            <NavItemsTitle>Resources</NavItemsTitle>
            <NavItemsContainer>
              {resources.map((item) => (
                <Link className="w-fit" key={item.name} href={item.link}>
                  <NavItem>{item.name}</NavItem>
                </Link>
              ))}
            </NavItemsContainer>
          </ResourceContainer>

          <SubscribeContainerBottom>
            <Subscribe />
          </SubscribeContainerBottom>
        </MainContainer>
        <BottomContainer>
          <BottomMainContainer>
            <CopyrightContainer>
              © 2018 - 2022 Ozone Networks, Inc
            </CopyrightContainer>
            <PPAndTOSContainer>
              <Link href="/">
                <PP>Privacy Policy</PP>
              </Link>

              <Link href="/">
                <TOS>Terms of Service</TOS>
              </Link>
            </PPAndTOSContainer>
          </BottomMainContainer>
        </BottomContainer>
      </Container>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = tw.section`
  bg-[#121117]
  font-jost
`;

const Container = tw.div`
`;

const MainContainer = tw.div`
  w-11/12
  lg:max-w-[100rem] 
  mx-auto
  pt-24
  pb-16
  md:pb-[7.5rem]
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-[2.8fr_1fr_1fr_1fr]
  gap-14
  lg:gap-12
`;

const LogoAndNLetterContainer = tw.div``;

const Logo = tw.div`
  w-40
  lg:w-48
  xl:w-[14.776rem]
  aspect-[4/1]
  relative
`;

const Subtitle = tw.div`
  mt-10
  md:mt-12
  max-w-[28rem]
  text-lg
  md:text-[1.25rem]
  text-[#BEBEBE]
`;

const MarketPlaceContainer = tw.div``;

const MyAccountContainer = tw.div``;

const ResourceContainer = tw.div``;

const NavItemsTitle = tw.div`
  text-xl
  md:text-2xl
  xl:text-[1.667rem]
  text-white
  font-bold
`;

const NavItemsContainer = tw.ul`
  mt-6
  lg:mt-8
  xl:mt-12
  flex
  flex-col
  gap-y-3
  lg:gap-y-4
`;

const NavItem = tw.li`
  w-fit
  md:text-lg
  xl:text-[1.25rem]
  text-[#D0D0D0]
`;

const SubscribeContainerTop = tw.div`
  mt-12
  hidden
  lg:block
`;

const SubscribeContainerBottom = tw.div`
  lg:hidden
`;

const BottomContainer = tw.div`
  py-6
  border-t
  border-[#414141]
`;

const BottomMainContainer = tw.div`
  w-11/12
  lg:max-w-[100rem] 
  mx-auto
  max-md:text-sm
  flex
  max-md:flex-col
  max-md:items-center
  max-md:gap-1.5
  justify-between
  text-white
`;

const CopyrightContainer = tw.div``;

const PPAndTOSContainer = tw.div`
  flex
  items-center
  gap-x-8
`;

const PP = tw.div``;

const TOS = tw.div``;
