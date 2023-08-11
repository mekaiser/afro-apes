import tw from "tailwind-styled-components";

const Button = ({ name }) => {
  return (
    <Container $name={name}>
      <Text $name={name}>{name}</Text>
    </Container>
  );
};

export default Button;

// Tailwind Styled Components

const Container = tw.div`
  px-3.5
  sm:px-5
  xl:px-7
  py-2.5
  xl:py-3
  flex
  justify-center
  items-center
  rounded-md
  ${(p) =>
    p.$name === "Clients Area" &&
    "bg-gradient-to-r from-[#6B64FC] to-[#B492FB]"}
  ${(p) =>
    p.$name === "Free Dashboard Tour" &&
    "bg-white border-[1px] border-[#363636]"}
  ${(p) => p.$name === "Get Funded" && "bg-[#635BFF] shadow-purple"}
  ${(p) => p.$name === "Join Our Discord" && "border-[1px] border-white"}
  cursor-pointer
`;

const Text = tw.div`
  text-sm
  sm:text-base
  font-bold
  ${(p) => p.$name === "Clients Area" && "text-white"}
  ${(p) => p.$name === "Get Funded" && "text-white"}
  ${(p) => p.$name === "Join Our Discord" && "text-white"}
  ${(p) => p.$name === "Free Dashboard Tour" && "text-[#363636]"}
`;
