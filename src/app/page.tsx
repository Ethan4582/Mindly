import LogoCarousel from "@/components/banner";
import CourseFit from "@/components/CourseFit";
import ExclusiveNetwork from "@/components/ExclusiveNetwork";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import Page6 from "@/components/page6";
import Page7 from "@/components/page7";
import FaqSection from "@/components/page8";
import Page9 from "@/components/page9";

export default function Home() {
  return (
    <>
      {/* Sticky Header */}
      <div className="sticky  top-0 z-50  flex justify-center w-full">
        <Header />
      </div>
      <Page6/>

     <CourseFit/>
      <Page7/>

      <ExclusiveNetwork />
      <LogoCarousel />
      <FaqSection />
      <Page9 />
      <Footer />
    </>
  );
}