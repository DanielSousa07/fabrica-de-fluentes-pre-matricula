import { Hero } from './components/Hero/Hero';
import { Testimonials } from './components/Testimonials/Testimonials';
import { OfferDetails } from './components/OfferDetails/offerDetails';
import { ComparisonSection } from './components/ComparisonSection/ComparisonSection';
export default function App() {
  return (
    <main className="app-wrapper">
      <Hero />
      <Testimonials />
      <OfferDetails/>
      <ComparisonSection/>
    </main>
  );
}