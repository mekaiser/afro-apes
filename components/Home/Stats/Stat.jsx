import React from "react";
import tw from "tailwind-styled-components";

const Stat = ({ title, num, suffix }) => {
  return (
    <Container>
      <NumContainer>
        <Num>{num}</Num>
        {suffix}
      </NumContainer>
      <Title>{title}</Title>
    </Container>
  );
};

export default Stat;

// Tailwind Styled Components

const Container = tw.div`
  flex
  flex-col
  items-center
`;

const NumContainer = tw.div`
  text-3xl
  md:text-[2.625rem]
  font-bold
`;

const Num = tw.div`
  inline-block
`;

const Title = tw.div`
  sm:text-lg
  md:text-xl
  font-bold
  text-center
`;
