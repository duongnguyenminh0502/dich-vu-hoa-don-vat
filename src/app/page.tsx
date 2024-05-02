import Contact from "_@/app/ui/contact";
import Footer from "_@/app/ui/footer";
import Header from "_@/app/ui/header";
import MoveToTop from "_@/app/ui/move-to-top";
import AboutUs from "_@/app/ui/sections/about-us";
import ContactSection from "_@/app/ui/sections/contact-section";
import HeroSection from "_@/app/ui/sections/hero-section";
import ServiceUs from "_@/app/ui/sections/service-us";
import WeNeedUs from "_@/app/ui/sections/we-need-us";
import dynamic from "next/dynamic";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

export const revalidate = 0;

const ReviewDynamicSection = dynamic(
  () => import("_@/app/ui/sections/reviews/reviews-section"),
  {
    loading: () => <div>Loading...</div>,
  }
);

export default async function Home() {
  return (
    <>
      <MoveToTop />
      <Contact />
      <Header />

      <HeroSection />
      <main className="gap-y-10 grid grid-cols-[1fr_calc(min(100vw,_var(--max-bound))_-_(var(--site-pad)*2))_1fr] [&>*]:col-span-1 [&>*]:col-start-2 bg-gray-50 pt-10 full-fledge">
        <WeNeedUs />

        <AboutUs />

        <ServiceUs />

        <ReviewDynamicSection />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
