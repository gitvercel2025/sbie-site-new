import { Hero } from "../components/Hero";
import { Statistics } from "../components/Statistics";
import { Trainings } from "../components/Trainings";
import { Testimonials } from "../components/Testimonials";
import { TestimonialsMarquee } from "../components/TestimonialsMarquee";
import { AboutRodrigo } from "../components/AboutRodrigo";
import { ExclusiveContent } from "../components/ExclusiveContent";
import { Contact } from "../components/Contact";
import { QuoteSection } from "../components/QuoteSection";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Statistics />
      <Trainings />
      <Testimonials />
      <AboutRodrigo />
      <ExclusiveContent />
      <TestimonialsMarquee />
      <Contact />
      <QuoteSection />
    </div>
  );
}
