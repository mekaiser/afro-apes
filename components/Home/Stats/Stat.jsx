import { forwardRef, useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import tw from "tailwind-styled-components";

const Stat = forwardRef(({ title, num, suffix, startCount, index }, ref) => {
  const countUpRef = useRef(null);
  const { countUp, start, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    // end: num,
    duration: 4,
  });

  useEffect(() => {
    if(startCount) {
      start();
      update(num)
    }
  }, [startCount])
  return (
    <Container ref={el => ref.current[index] = el}>
      <NumContainer>
        <Num ref={countUpRef}>{countUp}</Num>
        {suffix}
      </NumContainer>
      <Title>{title}</Title>
    </Container>
  );
});

export default Stat;



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
