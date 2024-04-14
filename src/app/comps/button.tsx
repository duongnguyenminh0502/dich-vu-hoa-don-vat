import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export default function Button({
  className,
  ...rest
}: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      target="_blank"
      href="tel:0358387379"
      className={clsx([
        "flex bg-gradient-to-r from-green-500 hover:from-green-600 to-blue-500 hover:to-blue-600 shadow-md px-3 py-3 rounded-full w-full focus:outline-noneuppercase",
        "tracking-wide animate-bounce focus:animate-none",
        "font-semibold text-white",
        className,
      ])}
      {...rest}
    >
      <p className="w-full text-center">LIÊN HỆ NGAY: 0358387379</p>
    </a>
  );
}
