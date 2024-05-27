"use client"

import { MosaicI } from "@/actions/get-mosaic-image";
import Image from "next/image";
import MosaicFrame from "./mosaic-frame";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Mosaic({ data }: { data: MosaicI[] }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {!isLoaded ? (
        <Loading />
      ) : (
        <MosaicFrame>
          {data.map((img, key) => (
            <Image
              key={key}
              alt="image mosaic"
              src={img.url}
              width={1500}
              height={1500}
            />
          ))}
        </MosaicFrame>
      )}
    </>
  );
}
