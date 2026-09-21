import { Hero } from './components/Hero/Hero';
import { Testimonials } from './components/Testimonials/Testimonials';

export default function App() {
  return (
    <main className="app-wrapper">
      <Hero />
      <Testimonials />
    </main>
  );
}