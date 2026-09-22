import { Hero } from './components/Hero/Hero';
import { Testimonials } from './components/Testimonials/Testimonials';
import { OfferDetails } from './components/OfferDetails/offerDetails';
import { ComparisonSection } from './components/ComparisonSection/ComparisonSection';
import { Instructor } from './components/Instructor/Instructor';
import { FAQ } from './components/FAQ/FAQ';
import { Footer } from './components/Footer/Footer'; 

export default function App() {
  return (
    <main className="app-wrapper">
      <Hero />
      <Testimonials />
      <OfferDetails />
      <ComparisonSection />
      <Instructor />
      <FAQ />
      <Footer /> 
    </main>
  );
}