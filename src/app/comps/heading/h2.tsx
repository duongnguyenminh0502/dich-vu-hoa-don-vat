import { PropsWithChildren } from "react";

export default function H2({ children }: PropsWithChildren) {
  return (
    <h2 className="py-10 font-bold text-2xl text-blue-900 text-center lg:text-4xl uppercase">
      {children}
    </h2>
  );
}
