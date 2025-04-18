import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import axios from "axios";
import { headers } from "next/headers";
import detectDevice from "../functions/deviceDetection";
import { Button } from "@heroui/button";
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
