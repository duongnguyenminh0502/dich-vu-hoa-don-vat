import H2 from "_@/app/comps/heading/h2";
import { GiSupersonicArrow } from "react-icons/gi";
import { DiCodeigniter } from "react-icons/di";
import { DiRuby } from "react-icons/di";

export default function WeNeedUs() {
  return (
    <section className="grid">
      <H2>Tại sao cần chúng tôi</H2>
      <div className="gap-6 grid md:grid-cols-3">
        {data.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex md:flex-col justify-center items-center gap-6 bg-white shadow-md p-4 rounded-md h-32 md:h-52"
            >
              <Icon className="text-blue-900 shrink-0" size={40} />
              <div className="md:text-center">
                <h3 className="font-bold text-blue-900 text-lg">
                  {item.title}
                </h3>
                <p className="text-black">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const data = [
  {
    title: "DỊCH VỤ HỖ TRỢ TƯ VẤN BÁN HÓA ĐƠN",
    description: "Từ công ty thật đa ngành nghề lâu năm.",
    icon: GiSupersonicArrow,
  },
  {
    title: "DỊCH VỤ HỖ TRỢ TƯ VẤN XUẤT HÓA ĐƠN ĐIỆN TỬ",
    description: "Từ Hà Nội, TP. HCM và các tỉnh trên cả nước.",
    icon: DiCodeigniter,
  },
  {
    title: "DỊCH VỤ HỖ TRỢ TƯ VẤN HÓA ĐƠN ĐIỆN TỬ",
    description: "Làm nháp. ký và gửi mail trong 10 phút có ngay.",
    icon: DiRuby,
  },
];
