"use client";

import { MosaicI } from "@/actions/get-mosaic-image";
import Image from "next/image";
import MosaicFrame from "./mosaic-frame";

export default function Mosaic({ data }: { data: MosaicI[] }) {
  return (
    <MosaicFrame>
      {data.map((image, key) => (
        <Image
          key={key}
          alt="image mosaic"
          src={image.url}
          width={200}
          height={25}
        />
      ))}
    </MosaicFrame>
  );
}
