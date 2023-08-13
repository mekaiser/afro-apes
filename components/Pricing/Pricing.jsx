import tw from "tailwind-styled-components";

const Pricing = () => {
  return (
    <Wrapper>
      <Container>
        <Text>Pricing</Text>
      </Container>
    </Wrapper>
  );
};

export default Pricing;

const Wrapper = tw.section`
  py-24
  md:py-32
  lg:py-48
`;

const Container = tw.div`
  w-11/12
  lg:max-w-[100rem] 
  mx-auto
  flex
  justify-center
`;

const Text = tw.h1`
  text-7xl
  font-bold
`;
