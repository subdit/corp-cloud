import Image from 'next/image';

export default function Home() {
  return (
    <div>
      Home Page!
      <img
        src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
        alt='Google Logo'
      />
      <Image src='/home.jpg' alt='Home Image' width={500} height={500} />
    </div>
  );
}
