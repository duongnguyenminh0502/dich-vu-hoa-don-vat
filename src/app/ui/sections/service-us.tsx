import H2 from "_@/app/comps/heading/h2";
import Image from "next/image";

export default function ServiceUs() {
  return (
    <section>
      <H2>Dịch vụ của chúng tôi</H2>
      <div className="gap-6 grid sm:grid-cols-2 md:grid-cols-4 mx-auto md:max-w-[90%]">
        {data.map((item, index) => (
          <div
            key={index}
            className="gap-3 grid bg-blue-800 shadow-black/40 shadow-md rounded-md overflow-hidden"
          >
            <Image
              src={item.image}
              className="rounded-md w-full aspect-[7/5] object-cover"
              width={400}
              height={300}
              alt={`Service Us ${index}`}
              sizes="(min-width: 640px) 400px, 100vw"
            />
            <div className="gap-1 grid px-4 pt-2 pb-8 rounded-b-md">
              <h3 className="font-bold text-lg text-white">{item.title}</h3>
              <p className="text-gray-50 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const data = [
  {
    title: "HÓA ĐƠN MÁY MÓC THIẾT BỊ",
    description: "HĐ máy móc thiết bị công nghiệp – nông nghiệp",
    image: "/images/service-us-1.webp",
  },
  {
    title: "HÓA ĐƠN VẬT LIỆU XÂY DỰNG",
    description: "HĐ vật liệu xây dựng, nội thất, ngoại thất.",
    image: "/images/service-us-2.webp",
  },
  {
    title: "HÓA ĐƠN DỊCH VỤ",
    description: "Hóa đơn ăn uống – nhà hàng – khách sạn, du lịch, công tác…",
    image: "/images/service-us-3.webp",
  },
  {
    title: "HÓA ĐƠN CÁC NGÀNH KHÁC",
    description: "HĐ vận tải, nhân công, văn phòng phẩm, linh kiện điện tử…",
    image: "/images/service-us-4.webp",
  },
];
