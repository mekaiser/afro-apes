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
  px-7
  py-3
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
  ${(p) => p.$name === "Get Funded" && "bg-[#635BFF] shadow-purple px-8"}
  ${(p) => p.$name === "Join Our Discord" && "border-[1px] border-white px-8"}
`;

const Text = tw.div`
  font-bold
  ${(p) => p.$name === "Clients Area" && "text-white"}
  ${(p) => p.$name === "Get Funded" && "text-white"}
  ${(p) => p.$name === "Join Our Discord" && "text-white"}
  ${(p) => p.$name === "Free Dashboard Tour" && "text-[#363636]"}
`;
