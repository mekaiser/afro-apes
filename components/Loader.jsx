import { useIsomorphicLayoutEffect } from "@/helpers/isomorphicEffect";
import { gsap } from "gsap";
import { forwardRef, useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";

const Loader = forwardRef(({}, ref) => {
  const [isDOMLoaded, setDOMLoaded] = useState(false);

  const rootRef = useRef();

  useIsomorphicLayoutEffect(() => {
    let gsapCtx = gsap.context(() => {
      if (isDOMLoaded) {
        ref.current = gsap.timeline({ paused: true });
        ref.current.to(rootRef.current, { opacity: 0, duration: 1 });
      }
    }, rootRef);

    return () => gsapCtx.revert();
  }, [isDOMLoaded]);

  useEffect(() => {
    setDOMLoaded(true);
  }, []);
  return (
    <Wrapper ref={rootRef}>
      <Container>
        <AnimateCircle></AnimateCircle>
        <StillCircle></StillCircle>
      </Container>
    </Wrapper>
  );
});

export default Loader;



const Wrapper = tw.div`
  fixed
  inset-0
  bg-white
  z-50
  flex
  justify-center
  items-center
`;

const Container = tw.div`
  relative 
  flex 
  h-8 
  md:h-12 
  w-8
  md:w-12
`;

const AnimateCircle = tw.div`
  animate-ping 
  absolute 
  inline-flex 
  h-full 
  w-full 
  rounded-full 
  bg-[#4e55ff] 
  opacity-75
`;

const StillCircle = tw.div`
  relative 
  inline-flex 
  rounded-full 
  h-8 
  md:h-12 
  w-8
  md:w-12
  bg-[#4e55ff]
`;
