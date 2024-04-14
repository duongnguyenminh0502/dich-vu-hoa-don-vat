import Button from "_@/app/comps/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="gap-10 grid md:grid-cols-2 mx-[calc(-1*var(--max-padding))] mt-8 md:py-10">
      <div className="content-start gap-8 grid md:mt-28 ml-auto px-[--max-padding] md:px-0 md:max-w-[500px]">
        <div className="gap-3 grid text-center md:text-end">
          <h1 className="font-bold text-3xl text-gray-100 md:text-5xl">
            DỊCH VỤ HỖ TRỢ TƯ VẤN BÁN HÓA ĐƠN THEO THÔNG TƯ 78
          </h1>
          <p className="font-medium text-gray-300">
            Dịch vụ hỗ trợ tư vấn xuất hóa đơn đa ngành nghề từ công ty luật lâu
            năm. Phí thấp nhất thị trường. Hồ sơ giấy tờ đầu đủ, xuất nhanh
            trong 10 phút.
          </p>
        </div>

        <Button />
      </div>
      <div className="md:relative w-full h-[300px] md:h-auto aspect-[5/4]">
        <Image
          src={"/images/hero.webp"}
          alt="Hero"
          width={600}
          height={315}
          className="md:top-20 md:absolute md:rounded-s-xl w-full h-full object-cover"
          sizes="(min-width: 640px) 600px, 100vw"
        />
      </div>
    </section>
  );
}
