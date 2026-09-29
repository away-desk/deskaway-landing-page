import { Architecture } from "@/components/Architecture";
import { BuildLog } from "@/components/BuildLog";
import { Decisions } from "@/components/Decisions";
import { Download } from "@/components/Download";
import { EngineeringIntro } from "@/components/EngineeringIntro";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Repos } from "@/components/Repos";
import { Safety } from "@/components/Safety";
import { WireContract } from "@/components/WireContract";

// Two pages in one: what DeskAway is (top), then how it is built (below the
// "For engineers" band). Static — nothing here talks to the relay.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Safety />

        <EngineeringIntro />
        <Architecture />
        <WireContract />
        <Repos />
        <Decisions />
        <BuildLog />

        <Download />
      </main>
      <Footer />
    </>
  );
}
