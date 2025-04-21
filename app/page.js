import detectDevice from "../functions/deviceDetection";
import HeroBanner from "@/components/PageWiseComponent/HomePage/HeroBanner";
import SaleTimerBanner from "@/components/PageWiseComponent/HomePage/SaleTimerBanner";
import NewsLetter from "@/components/PageWiseComponent/HomePage/NewsLetter";
import FeaturedProducts from "@/components/PageWiseComponent/HomePage/FeaturedProducts";
import ShopGallery from "@/components/PageWiseComponent/HomePage/ShopGallery";
import FeatureVideo from "@/components/PageWiseComponent/HomePage/FeatureVideo";
import OfferBanner from "@/components/PageWiseComponent/HomePage/OfferBanner";
import ProductAvailablity from "@/components/PageWiseComponent/HomePage/ProductAvailablity";
import OurStory from "@/components/PageWiseComponent/HomePage/OurStory";


export default async function Home() {
  const deviceDetails = await detectDevice();

  console.log("console data", deviceDetails);
  return (
    <>
    <HeroBanner/>
    <SaleTimerBanner/>
    <OfferBanner/>
    <ProductAvailablity/>
    <OurStory/>
    <FeatureVideo/>
    <FeaturedProducts/>
    <ShopGallery/>
    <NewsLetter/>
    
    </>
  );
}
