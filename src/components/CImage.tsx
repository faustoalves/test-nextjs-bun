"use client";
import { CldImage } from "next-cloudinary";

interface ImageProps {
  src: string;
  width: number;
  height: number;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  crop?: boolean;
  className?: string;
  quality?: number;
}

const CImage = ({
  src,
  width,
  height,
  alt,
  sizes,
  priority,
  crop,
  quality,
  className,
  ...props
}: ImageProps) => {
  return (
    <CldImage
      width={width}
      height={height}
      src={src.replace(
        "https://res.cloudinary.com/dkyl4jbxx/image/upload/",
        ""
      )}
      crop={crop ? "fill" : "limit"}
      quality={quality && quality}
      format="auto"
      gravity={crop ? "auto" : ""}
      alt="Description of my image"
      sizes="(max-width: 320px) 50vw,(max-width: 480px) 50vw, 50vw"
      {...props}
      priority={priority ? priority : false}
      className={className ? className : ""}
      // effects={[
      //   { autoBrightness: true },
      //   { autoColor: true },
      //   { autoContrast: true },
      //   { improve: true },
      //   { sharpen: "20" },
      //   // { colorize: "80,co_rgb:996633" },
      // ]}
    />
  );
};

export default CImage;
