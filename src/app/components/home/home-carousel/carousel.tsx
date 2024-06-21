"use client";
import { CorouselI } from "@/actions/get-corousel-image";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SwiperProps, SwiperSlide } from "swiper/react";
import Slider from "../../common/slider/Slider";
import CarouselFrame from "./carousel-frame";
import Loading from "./loading";
import { useMediaQuery, useTheme } from "@mui/material";

export default function CarouselFrameComponent({
  data,
}: {
  data: CorouselI[];
}) {
  const [isLoaded, setIsLoaded] = useState(false);
const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const settings: SwiperProps = {
    slidesPerView: isSmallScreen ? 1.3 : 2.5,
    pagination: {
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 3000,
    },
    effect: "coverflow",
  };

  return (
    <>
      {!isLoaded ? (
        <Loading />
      ) : (
        <CarouselFrame>
          <Slider settings={settings}>
            {data.map((img, key) => (
              <SwiperSlide key={key}>
                <Image
                  alt={`Imagem ${key}`}
                  src={img.url}
                  height={1500}
                  width={1500}
                />
              </SwiperSlide>
            ))}
          </Slider>
        </CarouselFrame>
      )}
    </>
  );
}
