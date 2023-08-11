"use client";

import Gallery from "@/components/Home/Gallery/Gallery";
import Hero from "@/components/Home/Hero/Hero";
import Stats from "@/components/Home/Stats/Stats";
import Loader from "@/components/Loader";
import { useRef, useState } from "react";

export default function Home() {
  const [isGlobeLoaded, setGlobeLoaded] = useState(false);

  const gsapTlRef = useRef();

  const globeLoadHandler = () => {
    if (gsapTlRef.current) {
      document.body.style.overflow = "auto";
      gsapTlRef.current.play();
      gsapTlRef.current.eventCallback("onComplete", () => {
        setGlobeLoaded(true);
      });
    }
  };

  return (
    <>
      {!isGlobeLoaded && <Loader gsapTlRef={gsapTlRef} />}
      <Hero />
      <Stats globeLoadHandler={globeLoadHandler} />
      <Gallery/>
      {/* <Footer/> */}
    </>
  );
}
