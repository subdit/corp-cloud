import Hero from '@/components/hero';
import homeImg from '../../public/home.jpg';

console.log(homeImg);
export default function Home() {
  return (
    <div>
      <Hero
        imgData={homeImg}
        imgAlt='car factory'
        title='Professional Cloud Hosting'
      />
    </div>
  );
}
