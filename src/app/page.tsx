import Header from '@/app/components/Header';
import Introduce from '@/app/components/Introduce';
import Portfolio from '@/app/components/Portfolio';
import Reviews from '@/app/components/Reviews';
import Service from '@/app/components/Service';
import Strengths from '@/app/components/Strengths';
import Description from '@/app/components/Description';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center font-inter">
      <Header />
      <Introduce />
      <Description />
      <Strengths />
      <Reviews />
      <Service />
      <Portfolio />
    </main>
  );
}
