import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WhyTesting } from "./components/WhyTesting";
import { Roadmap } from "./components/Roadmap";
import { WhyUs } from "./components/WhyUs";
import { Resources } from "./components/Resources";
import { Rules } from "./components/Rules";
import { Solutions } from "./components/Solutions";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Enroll } from "./components/Enroll";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="min-h-screen bg-background text-navy selection:bg-blue-100 selection:text-navy">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyTesting />
        <Roadmap />
        <WhyUs />
        <Resources />
        <Rules />
        <Solutions />
        <Testimonials />
        <FAQ />
        <Enroll />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
