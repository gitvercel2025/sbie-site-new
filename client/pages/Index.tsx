import { Hero } from "../components/Hero";
import { Statistics } from "../components/Statistics";
import { Trainings } from "../components/Trainings";
import { AboutRodrigo } from "../components/AboutRodrigo";
import { Contact } from "../components/Contact";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Statistics />
      <Trainings />
      <AboutRodrigo />
      <Contact />
    </div>
  );
}
