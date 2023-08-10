import Link from "next/link";
import React from "react";
import tw from "tailwind-styled-components";

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
          <LogoAndNewsLContainer>
            <Logo src="assets/logos/logo-white.svg" />
            <Subtitle>
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </Subtitle>
            <SubscribeContainer>
              <SubscribeUsTitle>Subscribe Us</SubscribeUsTitle>
              <EmailInputContainer>
                <EmailInput
                  placeholder="Enter your email"
                  type="text"
                  name="email"
                />
                <SubmitBtn>
                  <SendIcon src="assets/icons/send.svg" />
                </SubmitBtn>
              </EmailInputContainer>
            </SubscribeContainer>
          </LogoAndNewsLContainer>
          <MarketPlaceContainer>
            <NavItemsTitle>Marketplace</NavItemsTitle>
            <NavItemsContainer>
              {marketplace.map((item) => (
                <Link key={item.name} href={item.link}>
                  <NavItem>{item.name}</NavItem>
                </Link>
              ))}
            </NavItemsContainer>
          </MarketPlaceContainer>
          <MyAccountContainer>
            <NavItemsTitle>My Account</NavItemsTitle>
            <NavItemsContainer>
              {myAccount.map((item) => (
                <Link key={item.name} href={item.link}>
                  <NavItem>{item.name}</NavItem>
                </Link>
              ))}
            </NavItemsContainer>
          </MyAccountContainer>
          <ResourceContainer>
            <NavItemsTitle>Resources</NavItemsTitle>
            <NavItemsContainer>
              {resources.map((item) => (
                <Link key={item.name} href={item.link}>
                  <NavItem>{item.name}</NavItem>
                </Link>
              ))}
            </NavItemsContainer>
          </ResourceContainer>
        </MainContainer>
      </Container>
    </Wrapper>
  );
};

export default Footer;

// Tailwind Styled Components

const Wrapper = tw.section`
  bg-[#121117]
  font-jost
`;

const Container = tw.div`
  w-11/12
  lg:max-w-[100rem] 
  mx-auto
`;

const MainContainer = tw.div`
  py-24
  grid
  grid-cols-[2.3fr_1fr_1fr_1fr]
`;

const LogoAndNewsLContainer = tw.div``;

const Logo = tw.img`
  w-[14.776rem]
  h-auto
`;

const Subtitle = tw.div`
  mt-12
  max-w-[28rem]
  text-[1.25rem]
  text-[#BEBEBE]
`;

const MarketPlaceContainer = tw.div``;

const MyAccountContainer = tw.div``;

const ResourceContainer = tw.div``;

const NavItemsTitle = tw.div`
  text-[1.667rem]
  text-white
  font-bold
`;

const NavItemsContainer = tw.ul`
  mt-12
  flex
  flex-col
  gap-y-4
`;

const NavItem = tw.li`
  text-[1.25rem]
  text-[#D0D0D0]
`;

const SubscribeContainer = tw.div``;

const SubscribeUsTitle = tw.div`
  mt-12
  text-2xl
  font-medium
  text-white
`;

const EmailInputContainer = tw.div`
  w-[20rem]
  mt-4
  flex
  items-center
  relative
  rounded-lg
  overflow-hidden
`;

const EmailInput = tw.input`
  w-[17rem]
  px-5
  py-2.5
  text-base
  border-none
  outline-none
  bg-red-white
  placeholder:text-[#9F9F9F]
`;

const SubmitBtn = tw.div`
  h-full
  px-3.5
  bg-[#1D1D1D]
  absolute
  top-0
  right-0
  flex
  justify-center
  items-center
`;

const SendIcon = tw.img`
  w-[1.48rem]
  h-auto
`;
