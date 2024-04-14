import Button from "_@/app/comps/button";
import H2 from "_@/app/comps/heading/h2";
import clsx from "clsx";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section>
      <H2>CÔNG TY DỊCH VỤ HỖ TRỢ KẾ TOÁN HOÁ ĐƠN</H2>

      <div className="md:items-center gap-6 grid md:grid-cols-2 sm:pl-10 md:pl-20">
        <div className="gap-6 grid">
          <div className="gap-3 grid">
            <p>Chúng tôi đáp ứng mọi nhu cầu của khách hàng.</p>
            <p>
              <span className="font-bold text-blue-800">Tiết kiệm:</span> 70%
              chi phí cho nhân sự kế toán
            </p>
            <p>
              <span className="font-bold text-blue-800">Lợi ích:</span> Giảm rủi
              ro về thuế, tránh vi phạm pháp luật thuế
            </p>
            <p>
              <span className="font-bold text-blue-800">Hiệu quả:</span> Thay
              mặt doanh nghiệp trực tiếp giải trình cơ quan thuế
            </p>
            <p>Giúp doanh nghiệp tối đa hóa lợi nhuận.</p>
          </div>
          <div className="gap-3 grid grid-cols-2 text-sm">
            {data.map((item, index) => (
              <div className="flex items-center gap-2" key={index}>
                <FaCheck className="text-blue-900" />
                <p className="font-medium text-blue-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <Button className={clsx(["md:w-fit md:px-8 mr-auto"])}>
              LIÊN HỆ NGAY: 0376448574
            </Button>
          </div>
        </div>

        <div className="inline-block relative mx-auto py-10 w-fit">
          <div className="inline-flex -top-0 absolute flex-col gap-2 bg-white shadow-black/20 shadow-md p-6 rounded-lg text-center">
            <span className="font-bold text-4xl text-blue-900">8+</span>
            <span className="font-medium text-blue-800">Năm kinh nghiệm</span>
          </div>
          <div className="p-4">
            <Image
              src="/images/banner.webp"
              alt="Banner"
              height={400}
              width={400}
              className="rounded-lg overflow-hidden object-cover"
              sizes="(min-width: 640px) 400px, 100vw"
              loading="lazy"
            />
          </div>
          <div className="right-0 bottom-0 absolute flex-col gap-2 bg-white shadow-black/20 shadow-md rounded-lg h-[124px] text-center overflow-hidden aspect-[4/3]">
            <Image
              src="/images/about-us.webp"
              alt="About Us"
              className="w-full h-full object-cover"
              height={100}
              width={100}
              sizes="(min-width: 640px) 100px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Thông tin minh bạch
// Uy tín kinh nghiệm
// An toàn bảo mật
// Giá cả hợp lý
// Cam kết và trách nhiệm
// Thời gian nhanh chóng

const data = [
  "Thông tin minh bạch",
  "Uy tín kinh nghiệm",
  "An toàn bảo mật",
  "Giá cả hợp lý",
  "Cam kết và trách nhiệm",
  "Thời gian nhanh chóng",
];
