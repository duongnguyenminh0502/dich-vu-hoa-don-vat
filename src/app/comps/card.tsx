import { IconStarFilled } from "@tabler/icons-react";
import clsx from "clsx";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa6";
import Balancer from "react-wrap-balancer";

type CardProps = {
  review: string;
  name: string;
  image: string;
};

export default function Card({ review, name, image }: CardProps) {
  const names = name.split("/").map((name) => name.trim());
  return (
    <div className="flex flex-col gap-8 h-[480px]">
      <div className="justify-center items-center gap-2 border-orange-200 grid px-4 pt-6 pb-32 border">
        <FaQuoteRight size={80} className="mx-auto text-orange-800" />

        <p className="text-center italic">
          <Balancer>{review}</Balancer>
        </p>
      </div>
      <div className="relative">
        <div className="top-[-66px] left-1/2 absolute w-full -translate-x-1/2">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={image}
              alt={names.join(" ")}
              width={64}
              height={64}
              sizes="(min-width: 640px) 64px, 100vw"
              className="border-2 border-orange-400 rounded-full w-16 h-16"
              loading="lazy"
            />
            <div className="text-center">
              {names.map((name, index) => (
                <p
                  key={index}
                  className={clsx({
                    "text-blue-800 font-semibold": index === 1,
                  })}
                >
                  {name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
