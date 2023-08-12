"use client";

import { useIsomorphicLayoutEffect } from "@/helpers/isomorphicEffect";
import { Power4, gsap } from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import Button from "./Shared/Button";
import ImageComp from "./Shared/Image";

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
  const [isDOMLoaded, setDOMLoaded] = useState(false);
  const [isHamOpen, setHamOpen] = useState(false);

  const rootRef = useRef();
  const contentsRef = useRef();

  const navBarRef = useRef();

  const hamMenuRef = useRef();
  const hamItemsRef = useRef();

  const screenCoverRef = useRef();

  const tlHamMenuRef = useRef();

  const pathname = usePathname();

  const hamOpenHandler = (_boolVal) => {
    setHamOpen(_boolVal);

    _boolVal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  };

  useIsomorphicLayoutEffect(() => {
    let gsapCtx = gsap.context(() => {
      if (isDOMLoaded) {
        const tl = gsap.timeline({ defaults: { ease: "none" } });
        tlHamMenuRef.current = gsap.timeline({
          paused: true,
        });

        tl.from(contentsRef.current, { ease: "linear", autoAlpha: 0 });
        tl.to(navBarRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: Power4.easeOut,
        });

        tlHamMenuRef.current && tlHamMenuRef.current.progress(0).kill();

        tlHamMenuRef.current.to(hamMenuRef.current, {
          x: 0,
          duration: 0.8,
          ease: Power4.easeOut,
        });

        tlHamMenuRef.current.to(
          screenCoverRef.current,
          {
            x: 0,
            duration: 0.8,
            ease: Power4.easeOut,
          },
          "<"
        );

        tlHamMenuRef.current.from(
          hamItemsRef.current,
          { opacity: 0, x: 40 },
          "<50%"
        );
      }
    }, rootRef);

    return () => gsapCtx.revert();
  }, [isDOMLoaded]);

  useEffect(() => {
    if (isDOMLoaded) {
      isHamOpen ? tlHamMenuRef.current.play() : tlHamMenuRef.current.reverse();
    }
  }, [isDOMLoaded, isHamOpen]);

  useEffect(() => {
    setDOMLoaded(true);
  }, []);

  return (
    <Wrapper ref={rootRef}>
      <NavBar ref={contentsRef}>
        <MainContainer ref={navBarRef}>
          <NavLogoContainer>
            <Link className="w-fit block" href="/" passHref>
              <NavLogo>
                <ImageComp src="assets/logos/logo.svg" alt="afro-apes-logo" />
              </NavLogo>
            </Link>
          </NavLogoContainer>

          <NavItemsMiddle>
            {navItems.map((navItem) => (
              <NavItem key={navItem.name}>
                <Link href={navItem.link} passHref>
                  <NavItemText $pathname={pathname} $navItemLink={navItem.link}>
                    {navItem.name}
                  </NavItemText>
                </Link>
              </NavItem>
            ))}
          </NavItemsMiddle>

          <NavBtnsAndHamContainer>
            <NavBtns>
              <Button name="Clients Area" />
              <Button name="Free Dashboard Tour" />
            </NavBtns>
            <HamburgerIcon onClick={() => hamOpenHandler(true)}>
              <ImageComp
                src="/assets/icons/hamburger.svg"
                alt="hamburger-icon"
              />
            </HamburgerIcon>
          </NavBtnsAndHamContainer>
        </MainContainer>
      </NavBar>

      <ScreenCover ref={screenCoverRef} onClick={() => hamOpenHandler(false)} />

      <HamMenuContainer ref={hamMenuRef}>
        <CrossBtnIcon onClick={() => hamOpenHandler(false)}>
          <ImageComp src="/assets/icons/cross-btn.svg" alt="cross-btn" />
        </CrossBtnIcon>

        <HamMenuItems ref={hamItemsRef}>
          {navItems.map((hamItem) => (
            <HamMenuItem key={hamItem.name}>
              <Link href={hamItem.link} passHref>
                <HamMenuItemText
                  $pathname={pathname}
                  $hamItemLink={hamItem.link}
                  onClick={() => hamOpenHandler(false)}
                >
                  {hamItem.name}
                </HamMenuItemText>
              </Link>
            </HamMenuItem>
          ))}
          <Button forHamMenu name="Clients Area" />
          <Button forHamMenu name="Free Dashboard Tour" />
        </HamMenuItems>
      </HamMenuContainer>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = tw.div`
  w-full
  h-[5rem]
  md:h-[5.5rem]
  xl:h-[6.2rem]
  bg-white
  fixed 
  top-0 
  left-0
  z-50
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
  -translate-y-[5rem]
  opacity-0
  overflow-hidden
`;

const NavLogoContainer = tw.div`
  my-auto
  h-fit
`;

const NavLogo = tw.div`
  w-[10rem]
  md:w-[11rem]
  xl:w-[12.25rem]
  aspect-[4/1]
  h-auto
  relative
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
  menu_item_text
  ${(p) => p.$pathname === p.$navItemLink && "text-[#4e55ff]  after:w-1/2"}
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

const HamburgerIcon = tw.div`
  ml-6
  w-6
  aspect-square
  block
  xl:hidden
  cursor-pointer
  relative
`;

const ScreenCover = tw.div`
  fixed
  inset-0
  bg-[#000000A6]
  xl:hidden
  translate-x-full
`;

const HamMenuContainer = tw.nav`
  w-2/3
  md:w-1/2
  h-screen
  bg-white
  flex
  justify-center
  items-center
  xl:hidden
  translate-x-full
  fixed
  top-0
  right-0
  z-50
`;

const HamMenuItems = tw.ul`
  flex
  flex-col
  gap-y-4
  md:gap-y-5
`;

const HamMenuItem = tw.li``;

const HamMenuItemText = tw.span`
  text-black
  text-xl
  sm:text-2xl
  font-bold
  menu_item_text
  ${(p) => p.$pathname === p.$hamItemLink && "text-[#4e55ff]  after:w-1/3"}
`;

const CrossBtnIcon = tw.div`
  w-[2.8rem]
  aspect-square
  absolute 
  top-6
  right-4 
  sm:right-8 
  cursor-pointer
`;
