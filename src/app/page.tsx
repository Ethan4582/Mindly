import LogoCarousel from "@/components/banner";
import ExclusiveNetwork from "@/components/ExclusiveNetwork";
import Footer from "@/components/footer";
import FaqSection from "@/components/page8";
import Page9 from "@/components/page9";



export default function Home() {
  return (
   <>
    
      < ExclusiveNetwork />
    <LogoCarousel/>
     <FaqSection />
    <Page9 />
    <Footer />
   </>
  );
}