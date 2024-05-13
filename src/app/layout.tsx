import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
});

import Provider from "_@/app/provider";
import Image from "next/image";

const metadataConstants = {
  siteName: "Dịch Vụ Tư Vấn Bán Hóa Đơn Theo Thông Tư 78",
  siteTitle:
    "Dịch Vụ Tư Vấn Bán Hóa Đơn Theo Thông Tư 78 - Giải pháp nhanh chóng và tin cậy",
  siteDescription:
    "Dịch vụ tư vấn xuất hóa đơn đa ngành nghề từ công ty luật có kinh nghiệm. Phí thấp nhất thị trường. Hồ sơ giấy tờ đầy đủ, xuất nhanh trong 10 phút.",
  siteKeywords:
    "tư vấn bán hóa đơn, tư vấn xuất hóa đơn, hóa đơn theo thông tư 78, công ty luật, phí thấp, hồ sơ giấy tờ đầy đủ, xuất nhanh, đa ngành nghề",
};

export const metadata = {
  metadataBase: new URL("https://dichvucungcapketoan.com"),
  title: metadataConstants.siteTitle,
  description: metadataConstants.siteDescription,
  keywords: metadataConstants.siteKeywords,
  creator: metadataConstants.siteName,
  authors: [{ name: metadataConstants.siteName, url: "/" }],
  robots: "follow, index",
  alternates: { canonical: "/" },
  openGraph: {
    title: metadataConstants.siteTitle,
    description: metadataConstants.siteDescription,
    url: "/",
    siteName: metadataConstants.siteName,
    locale: "vi",
    type: "website",
  },
  twitter: {
    title: metadataConstants.siteTitle,
    description: metadataConstants.siteDescription,
    creator: metadataConstants.siteName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-N22PD3ZJ');`,
          }}
        ></script>
      </head>
      <body className={"relative " + inter.className}>
        <div className="z-[-1] fixed w-screen h-screen">
          <div className="absolute inset-0">
            <div className="relative w-full h-[80vh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                sizes="(min-width: 640px) 200px, 100vw"
                width={200}
                height={100}
                src="/images/hero-bg.webp"
                alt="background image"
                className="top-0 left-0 z-[0] absolute w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute bg-black/50 backdrop-blur-sm w-full h-full" />
            </div>
          </div>
        </div>
        <Provider>
          <div className="grid grid-cols-[1fr_calc(min(100vw,_var(--max-bound))_-_(var(--site-pad)*2))_1fr] [&>*]:col-span-1 [&>*]:col-start-2 overflow-auto scroll-smooth">
            {children}
          </div>
        </Provider>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N22PD3ZJ"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            `,
          }}
        ></script>
      </body>
      <GoogleAnalytics gaId="G-XY3YB2RMY7" />
    </html>
  );
}
