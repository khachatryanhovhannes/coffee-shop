import Link from "next/link";
import React from "react";

interface IProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

function ProductCard({
  id,
  name,
  description,
  price,
  imageUrl,
}: IProductCardProps) {
  return (
    <div className="p-4 max-w-sm">
      <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
        <div className="flex items-center justify-center mb-3">
          <h2 className="text-white dark:text-white text-lg font-semibold">
            {name}
          </h2>
        </div>
        <div className="flex justify-center my-4" style={{ height: 200 }}>
          <img
            src={imageUrl}
            height={200}
            width={200}
            alt={name}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-between  flex-grow">
          <p className="text-center">{price} $</p>
          <p className="leading-relaxed text-base text-center text-white dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
