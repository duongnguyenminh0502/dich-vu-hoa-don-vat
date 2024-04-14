import Logo from "_@/app/comps/logo";

export default function ContactSection() {
  return (
    <section className="relative bg-blue-900 mt-16 md:mt-0 md:pt-8 border-t full-fledge">
      <div className="relative flex md:flex-row flex-col justify-between items-center gap-6 md:pb-10 max-content">
        <div className="items-center gap-2 grid py-10 max-w-[400px] text-center">
          <Logo className="mx-auto" />
          <div className="gap-1 grid font-medium text-gray-50 text-sm md:text-base">
            <p>
              Cung cấp dịch vụ hỗ trợ hoá đơn đỏ, hóa đơn V.A.T hầu hết các
              ngành nghề đa dạng, đáp ứng mọi yêu cầu của doanh nghiệp
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-end gap-4 sm:gap-10 xl:gap-20">
          {[
            {
              address: `Số 32, Đường 3/2, Phường 12, Quận 10, TP. Hồ Chí Minh`,
            },
            {
              address: `Số 82, Phường Tân Quy, Quận 7, TP. Hồ Chí Minh`,
            },
          ].map((item, index) => (
            <div key={index} className="py-10 md:pt-5 border-t w-full">
              <div className="gap-6 grid mx-auto md:max-w-[300px] text-center md:text-start">
                <p className="font-semibold text-lg text-white">LIÊN HỆ</p>
                <div className="font-medium text-gray-50 text-sm">
                  Địa chỉ: <address>{item.address}</address>
                </div>
                <p className="font-medium text-gray-100 text-md">
                  <b>Điện thoại:</b>{" "}
                  <a className="text-blue-300" href="tel:0358387379">
                    0358387379
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
