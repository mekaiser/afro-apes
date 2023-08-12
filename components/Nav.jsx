'use client'

import Link from "next/link";
import { useState } from "react";
import tw from "tailwind-styled-components";
import Button from "./Shared/Button";
import { usePathname } from 'next/navigation'

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Models",
    link: "/models",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
  {
    name: "FAQ",
    link: "/faq",
  },
  {
    name: "Rules",
    link: "/rules",
  },
  {
    name: "Be a partner",
    link: "/be-a-partner",
  },
];

const Nav = () => {
  const [isHamOpen, setHamOpen] = useState(false);
  const pathname = usePathname();

  console.log('pathname', pathname);

  const hamOpenHandler = (_boolVal) => {
    setHamOpen(_boolVal);

    _boolVal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  };

  return (
    <Wrapper>
      <NavBar>
        <MainContainer>
          <NavLogoContainer>
            <NavLogo src="assets/logos/logo.svg" />
          </NavLogoContainer>

          <NavItemsMiddle>
            {navItems.map((navItem) => (
              <NavItem key={navItem.name}>
                <Link href={navItem.link} passHref>
                  <NavItemText $pathname={pathname} $navItemLink={navItem.link}>{navItem.name}</NavItemText>
                </Link>
              </NavItem>
            ))}
          </NavItemsMiddle>

          <NavBtnsAndHamContainer>
            <NavBtns>
              <Button name="Clients Area" />
              <Button name="Free Dashboard Tour" />
            </NavBtns>
            <HamburgerIcon src="/assets/icons/hamburger.svg" onClick={() => hamOpenHandler(!isHamOpen)} />
          </NavBtnsAndHamContainer>
        </MainContainer>
      </NavBar>

      <HamMenuContainer>
        <HamMenuItems>
          <HamMenuItem>
            <Link href="/" passHref>
              <HamMenuItemText onClick={() => hamOpenHandler(false)}>
                Home
              </HamMenuItemText>
            </Link>
          </HamMenuItem>
          <HamMenuItem>
            <Link href="/" passHref>
              <HamMenuItemText onClick={() => hamOpenHandler(false)}>
                About
              </HamMenuItemText>
            </Link>
          </HamMenuItem>
          <HamMenuItem>
            <Link href="/" passHref>
              <HamMenuItemText onClick={() => hamOpenHandler(false)}>
                Portfolio
              </HamMenuItemText>
            </Link>
          </HamMenuItem>
        </HamMenuItems>
      </HamMenuContainer>
    </Wrapper>
  );
};

export default Nav;

// Tailwind Styled Components

const Wrapper = tw.div`
  w-full
  h-[5rem]
  md:h-[5.5rem]
  xl:h-[6.2rem]
  bg-white
  fixed 
  top-0 
  left-0
  z-40
`;

const NavBar = tw.nav`
  w-full
  h-full
  flex
  items-center
  justify-center
`;

const MainContainer = tw.div`
  w-11/12
  lg:max-w-[83rem] 
  mx-auto
  grid 
  grid-cols-[2fr_1fr]
  md:grid-cols-[1fr_2fr]
  xl:grid-cols-[1fr_1.5fr_1.5fr]
`;

const NavLogoContainer = tw.div`
  my-auto
  h-fit
`;

const NavLogo = tw.img`
  w-[10rem]
  md:w-[11rem]
  xl:w-[12.25rem]
  h-auto
`;

const NavItemsMiddle = tw.ul`
  hidden
  xl:flex
  items-center
  justify-between
`;

const NavItem = tw.li``;

const NavItemText = tw.span`
  font-semibold
  ${p => p.$pathname === p.$navItemLink && 'text-[#4e55ff] relative after:h-[0.15rem] after:w-1/2 after:bg-[#4e55ff] after:rounded-full after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:transition-all after:ease-in-out after:duration-300'}
  hover:text-[#4e55ff]
  transition-all
  ease-in-out
  duration-300
`;

const NavBtnsAndHamContainer = tw.div`
  flex
  justify-end
`;

const NavBtns = tw.div`
  hidden
  md:flex
  justify-end
  gap-x-4
`;

const HamburgerIcon = tw.img`
  ml-6
  w-6
  h-auto
  block
  xl:hidden
`;

const HamMenuContainer = tw.nav`
  w-full
  h-screen
  bg-white
  flex
  justify-center
  items-center
  hidden
  fixed
  top-0
  left-0
  z-30
`;

const HamMenuItems = tw.ul`
  flex
  flex-col
  gap-y-4
`;

const HamMenuItem = tw.li``;

const HamMenuItemText = tw.span`
  text-black
  text-3xl
  font-medium
`;
