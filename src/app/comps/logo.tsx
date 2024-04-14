import clsx from "clsx";
import Image from "next/image";

type LogoProps = {
  className?: string;
};
export default function Logo({ className }: LogoProps) {
  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <div className="h-20 aspect-video">
        <Image
          sizes="(min-width: 640px) 100px, 100vw"
          src="/images/logo-ngang.webp"
          alt="Logo của dịch vụ hoá đơn V.A.T"
          width={100}
          height={60}
          className="w-full h-full object-contain"
          style={{
            filter:
              "invert(62%) sepia(85%) saturate(1745%) hue-rotate(191deg) brightness(101%) contrast(102%)",
          }}
        />
      </div>
    </div>
  );
}
