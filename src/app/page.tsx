'use client';
import Header from '@/app/components/Header';
import Introduce from '@/app/components/Introduce';
import Portfolio from '@/app/components/Portfolio';
import Testimonial from '@/app/components/Testimonial';
import Service from '@/app/components/Service';
import Strengths from '@/app/components/Strengths';
import Description from '@/app/components/Description';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import Investors from '@/app/components/Investors';
import Clients from '@/app/components/Clients';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center font-inter">
      <Header />
      <Introduce />
      <Description />
      <Strengths />
      <Testimonial />
      <Service />
      <Portfolio />
      <Clients />
      <Investors />
      <Contact />
      <Footer />
    </main>
  );
}
