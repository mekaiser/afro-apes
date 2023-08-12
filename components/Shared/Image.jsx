import Image from "next/image";

const ImageComp = ({ src, width, height, alt }) => {
  if (width && height) {
    <Image src={src} width={width} height={height} alt={alt} priority />;
  } else {
    return (
      <Image
        src={src}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        alt={alt}
        priority
      />
    );
  }
};

export default ImageComp;
