"use client";

import { MosaicI } from "@/actions/get-mosaic-image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { useEffect, useState } from "react";
import CarouselFrame from "./carousel-frame";
import Loading from "./loading";

export default function CarouselFrameComponent({ data }: { data: MosaicI[] }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {!isLoaded ? (
        <Loading />
      ) : (
        <CarouselFrame>
          <Splide options={{ rewind: true, perPage: 2 }}>
            {data.map((img, key) => (
              <SplideSlide key={key}>
                <Image
                  alt=""
                  src={img.url}
                  width={1500}
                  height={1500}
                  priority
                />
              </SplideSlide>
            ))}
          </Splide>
        </CarouselFrame>
      )}
    </>
  );
}
