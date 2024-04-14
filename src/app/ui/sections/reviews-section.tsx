"use client";
import clsx from "clsx";

import Card from "_@/app/comps/card";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import H2 from "_@/app/comps/heading/h2";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const data = [
  {
    review:
      "“Dịch vụ của bạn không chỉ đáp ứng yêu cầu pháp lý mà còn thể hiện tính chuyên nghiệp và giúp xây dựng thương hiệu uy tín”",
    name: "Quang Xuân / Công ty vật liệu xây dựng",
    image: "/images/user-1.webp",
  },
  {
    review:
      "“Chúng tôi đã trải qua quá trình chuyển đổi từ hóa đơn giấy sang hóa đơn điện tử và đã hỗ trợ chúng tôi một cách chuyên linh hoạt”",
    name: "Hồng Thanh / Công ty TNHH Thương Mại",
    image: "/images/user-2.webp",
  },
  {
    review:
      "“Bạn đã cung cấp cho chúng tôi giải pháp kế toán tiết kiệm chi phí và thời gian, minh bạch”",
    name: "Nguyễn Thị Thuỷ / Công ty Địa Ốc Thái Bình",
    image: "/images/user-3.webp",
  },
  {
    review:
      "“Tôi vô cùng ấn tượng với độ chuyên nghiệp, sự tận tâm từ đội ngũ kế toán của bạn. Đã giúp doanh nghiệp tôi tiết kiệm chi phí và thời gian.”",
    name: "Phạm Bảo / Công ty Dịch Vụ Vận Tải",
    image: "/images/user-4.webp",
  },
  {
    review:
      "“Chúng tôi rất hài lòng với dịch vụ cung cấp hóa đơn. Sẵn sàng hỗ trợ và giải đáp mọi thắc mắc từ phía chúng tôi”",
    name: "Lê Hương Kiều / Nhà Hàng Hương Việt",
    image: "/images/user-5.webp",
  },
];

export default function ReviewSection() {
  return (
    <section>
      <H2>Nhận xét của khách hàng</H2>

      <div>
        <Swiper
          className={clsx(
            "[&_.swiper-slide-active]:!opacity-100 [&_.swiper-slide]:opacity-40 transition-all pb-10"
          )}
          effect={"coverflow"}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, EffectCoverflow]}
          pagination={{
            clickable: true,
          }}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 0,
            modifier: 3,
            scale: 0.9,
            slideShadows: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Card {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
