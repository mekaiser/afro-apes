"use client";

import { useEffect, useRef, useState } from "react";
import HEX_DATA from "../../../data/countries_hex_data";

let ReactGlobe = () => null;
if (typeof window !== "undefined") ReactGlobe = require("react-globe.gl").default;

const Globe = () => {
  const globeEl = useRef();
  const [hex, setHex] = useState({ features: [] });

  const [isDOMLoaded, setDOMLoaded] = useState(false);

  useEffect(() => {
    if (isDOMLoaded) {
      setHex(HEX_DATA);
    }
  }, [isDOMLoaded]);

  useEffect(() => {
    if (isDOMLoaded) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.6;
      globeEl.current.controls().enableZoom = false;

      const MAP_CENTER = { lat: 0, lng: 0, altitude: 2 };
      globeEl.current.pointOfView(MAP_CENTER, 0);
    }
  }, [isDOMLoaded, globeEl]);

  useEffect(() => {
    setDOMLoaded(true);
  }, []);

  return (
    <>
      {isDOMLoaded && (
        <ReactGlobe
          ref={globeEl}
          width={1000}
          height={1000}
          backgroundColor="rgba(255,255,255,0)"
          globeImageUrl={"/assets/imgs/globe-bg.svg"}
          hexPolygonsData={hex.features}
          hexPolygonResolution={3}
          hexPolygonMargin={0.62}
          hexPolygonColor={() => "#000000"}
          showAtmosphere={true}
          atmosphereColor={"rgba(0,0,0,1)"}
          atmosphereAltitude={0.07}
          rendererConfig={{ preserveDrawingBuffer: true }}
        />
      )}
    </>
  );
};

export default Globe;
