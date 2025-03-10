// This is a hero component that will be used in all pages to display a hero image and title.
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className='relative h-96'>
      <Image
        src={props.imgData}
        alt={props.imgAlt}
        fill
        objectFit='cover'
        objectPosition='center'
      />

      <div className='absolute inset-0 flex items-center justify-center'>
        <h1 className='text-white text-4xl font-bold'>{props.title}</h1>
      </div>
    </div>
  );
}
