import Image from 'next/image';
import backImg from '../public/primary.webp'
import {
  HomeFistSection,
  HomeSecondSection,
  HomeThirdSection,
} from "@/components";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Image src={backImg} height={0} width={0} alt='primary' />
      <HomeFistSection />
      <HomeSecondSection />
      <HomeThirdSection />
    </div>
  );
}
