import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyChooseMe from '@/components/WhyChooseMe';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import CTRTest from '@/components/CTRTest';
import Fitting from '@/components/Fitting';
import Payment from '@/components/Payment';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChooseMe />
        <Portfolio />
        <Pricing />
        <CTRTest />
        <Fitting />
        <Payment />
        <Process />
        <FAQ />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
