import { forwardRef } from "react";
import tw from "tailwind-styled-components";

const Button = forwardRef(({ forHamMenu, name }) => {
  return (
    <Container $name={name}>
      <Text $forHamMenu={forHamMenu} $name={name}>
        {name}
      </Text>
    </Container>
  );
});

export default Button;

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
    "bg-gradient-to-r from-[#6B64FC] via-[#B492FB] to-[#EF3DFF] !bg-size_200 bg-pos_0 hover:bg-pos_100"}
  ${(p) =>
    p.$name === "Free Dashboard Tour" &&
    "bg-white border-[1px] border-[#363636] hover:border-transparent hover:bg-[#6B64FC]"}
  ${(p) =>
    p.$name === "Get Funded" &&
    "bg-[#635BFF] shadow-purple hover:bg-[#EF3DFF] hover:shadow-pink"}
  ${(p) =>
    p.$name === "Join Our Discord" &&
    "border-[1px] border-white hover:border-transparent hover:bg-[#6AFFF6] hover:shadow-green"}
  cursor-pointer
  group
  transition-all
  ease-in-out
  duration-300
`;

// hover:from-[#B492FB] hover:to-[#EF3DFF]

const Text = tw.div`
  text-sm
  sm:text-base
  font-bold
  ${(p) => p.$forHamMenu && "sm:text-lg"}
  ${(p) => p.$name === "Clients Area" && "text-white"}
  ${(p) => p.$name === "Get Funded" && "text-white"}
  ${(p) =>
    p.$name === "Join Our Discord" && "text-white group-hover:text-[#363636]"}
  ${(p) =>
    p.$name === "Free Dashboard Tour" &&
    "text-[#363636] group-hover:text-white"}
  transition-all
  ease-in-out
  duration-300
`;
