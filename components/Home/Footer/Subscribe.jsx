import React from "react";
import tw from "tailwind-styled-components";

const Subscribe = () => {
  return (
    <>
      <Title>Subscribe Us</Title>
      <EmailInputContainer>
        <EmailInput placeholder="Enter your email" type="text" name="email" />
        <SubmitBtn>
          <SendIcon src="assets/icons/send.svg" />
        </SubmitBtn>
      </EmailInputContainer>
    </>
  );
};

export default Subscribe;

// Tailwind Styled Components

const Title = tw.div`
  text-xl
  md:text-xl
  xl:text-2xl
  font-medium
  text-white
`;

const EmailInputContainer = tw.div`
  w-[18rem]
  lg:w-[20rem]
  mt-4
  flex
  items-center
  relative
  rounded-lg
  overflow-hidden
`;

const EmailInput = tw.input`
  w-[15rem]
  lg:w-[17rem]
  px-4
  lg:px-5
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
  hover:bg-[#4E55FF]
  absolute
  top-0
  right-0
  flex
  justify-center
  items-center
  transition-all
  ease-in-out
  duration-300
  cursor-pointer
`;

const SendIcon = tw.img`
  w-[1.48rem]
  h-auto
`;