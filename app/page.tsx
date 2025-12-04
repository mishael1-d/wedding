import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import About from "@/components/About";
import ProgramOfEvents from "@/components/ProgramOfEvents";
import Gifting from "@/components/Gifting";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EventDetails />
      <About />
      <ProgramOfEvents />
      <Gifting />
      <Footer />
    </main>
  );
}
