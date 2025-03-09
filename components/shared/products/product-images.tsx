"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        height={1000}
        width={1000}
        className="min-h[300] object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setCurrent(index)}
            className={cn("cursor-pointer", current === index && "border-mr-2")}
          >
            <Image src={image} alt="image" height={100} width={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
