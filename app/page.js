import detectDevice from "../functions/deviceDetection";
import HeroBanner from "@/components/PageWiseComponent/HomePage/HeroBanner";
import SaleTimerBanner from "@/components/PageWiseComponent/HomePage/SaleTimerBanner";
import NewsLetter from "@/components/PageWiseComponent/HomePage/NewsLetter";
import FeaturedProducts from "@/components/PageWiseComponent/HomePage/FeaturedProducts";
import ShopGallery from "@/components/PageWiseComponent/HomePage/ShopGallery";
import ProductAvailablity from "@/components/PageWiseComponent/HomePage/ProductAvailablity";
import OurStory from "@/components/PageWiseComponent/HomePage/OurStory";
import SliderBanner from "@/components/PageWiseComponent/HomePage/SliderBanner";
import FeatureSwiperVideo from "@/components/PageWiseComponent/HomePage/FeatureSwiperVideo";
import ProductDisplay from "@/components/PageWiseComponent/HomePage/ProductDisplay";
import NavBar from "@/components/Reuseable/NavBar";


export default async function Home() {
  const deviceDetails = await detectDevice();

  console.log("console data", deviceDetails);
  return (
    <>
    <NavBar/>
    <HeroBanner/>
    <SaleTimerBanner/>
    <ProductDisplay theme={'light'} size={'sm'} gap={'17px'}/>
    <SliderBanner/>
    <ProductAvailablity/>
    <ProductDisplay theme={'light'} size={'lg'} gap={'24px'}/>
    <OurStory/>
    <ProductDisplay theme={'dark'} size={'lg'} gap={'24px'}/>
    <FeatureSwiperVideo/>
    <FeaturedProducts/>
    <ShopGallery/>
    <NewsLetter/>
    
    </>
  );
}
