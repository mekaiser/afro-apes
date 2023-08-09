import Link from "next/link";
import tw from "tailwind-styled-components";
import Button from "./Shared/Button";

const Nav = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Models",
      link: "/",
    },
    {
      name: "Pricing",
      link: "/",
    },
    {
      name: "FAQ",
      link: "/",
    },
    {
      name: "Rules",
      link: "/",
    },
    {
      name: "Be a partner",
      link: "/",
    },
  ];
  return (
    <Wrapper>
      <NavBar>
        <MainContainer>
          <NavLogoContainer>
            <NavLogo src="assets/logos/logo.svg" />
          </NavLogoContainer>

          <NavItemsMiddle>
            {navItems.map((navItem) => (
              <NavItem>
                <Link href={navItem.link} passHref>
                  <NavItemText>{navItem.name}</NavItemText>
                </Link>
              </NavItem>
            ))}
          </NavItemsMiddle>

          <NavBtns>
            <Button name="Clients Area" />
            <Button name="Free Dashboard Tour" />
          </NavBtns>
        </MainContainer>
      </NavBar>
    </Wrapper>
  );
};

export default Nav;

// Tailwind Styled Components

const Wrapper = tw.div`
  w-full
  h-[6rem]
  bg-white
  fixed 
  top-0 
  left-0 
  border
`;

const NavBar = tw.nav`
  w-full
  h-full
  flex
  items-center
`;

const MainContainer = tw.div`
  container
  grid 
  grid-cols-2
  lg:grid-cols-[1fr_1.8fr_1.5fr]
`;

const NavLogoContainer = tw.div``;

const NavLogo = tw.img`
  w-[12.25rem]
  h-auto
`;

const NavItemsMiddle = tw.ul`
  flex
  items-center
  justify-between
`;

const NavItem = tw.li``;

const NavItemText = tw.span`
  font-semibold
`;

const NavBtns = tw.div`
  flex
  justify-end
  gap-x-4
`;

const _Btn = tw.div`
  px-5
  py-3
  flex
  justify-center
  items-center
  rounded-md
`;
