import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import About from "@/components/About";
import ProgramDownload from "@/components/ProgramDownload";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EventDetails />
      <About />
      <ProgramDownload />
      <Footer />
    </main>
  );
}
