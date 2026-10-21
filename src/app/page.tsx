import { Community } from "@/components/Community";
import { DropAndGo } from "@/components/DropAndGo";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LaundromatJsonLd } from "@/components/JsonLd";
import { MobileBar } from "@/components/MobileBar";
import { Planner } from "@/components/Planner";
import { Prices } from "@/components/Prices";
import { Visit } from "@/components/Visit";
import { WhileYouWait } from "@/components/WhileYouWait";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Planner />
        <Prices />
        <WhileYouWait />
        <DropAndGo />
        <Community />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
      <LaundromatJsonLd />
    </>
  );
}
