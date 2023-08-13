import ImageComp from "@/components/Shared/Image";
import Image from "next/image";
import tw from "tailwind-styled-components";

const Subscribe = () => {
  return (
    <>
      <Title>Subscribe Us</Title>
      <EmailInputContainer>
        <EmailInput placeholder="Enter your email" type="text" name="email" />
        <SubmitBtn>
          <SubmitIcon>
            <ImageComp src="assets/icons/send.svg" alt="afro-apes-logo" />
          </SubmitIcon>
        </SubmitBtn>
      </EmailInputContainer>
    </>
  );
};

export default Subscribe;

const Title = tw.div`
  text-xl
  md:text-xl
  xl:text-2xl
  font-medium
  text-white
`;

const EmailInputContainer = tw.div`
  w-72
  lg:w-80
  mt-4
  flex
  items-center
  relative
  rounded-lg
  overflow-hidden
`;

const EmailInput = tw.input`
  w-60
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

const SubmitIcon = tw.div`
  w-6
  aspect-square
  relative
`;
