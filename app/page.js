import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import axios from "axios";
import { headers } from 'next/headers';
import detectDevice from '../functions/deviceDetection'


export default async function Home() {

  const deviceDetails = await detectDevice(); 
  
  
console.log('console data', deviceDetails)
  return (
    <section className="flex flex-col items-center justify-center">
      hi
    </section>
  );
}
