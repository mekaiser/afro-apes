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
  text-[2.625rem]
  font-bold
`;

const Num = tw.div`
  inline-block
`;

const Title = tw.div`
  text-xl
  font-bold
`;
