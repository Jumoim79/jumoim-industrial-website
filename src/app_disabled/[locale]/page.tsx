import Hero from "@/components/home/Hero";
import CoreCapability from "@/components/home/CoreCapability";
import TrustSection from "@/components/home/TrustSection";
import UpdateSection from "@/components/home/UpdateSection";
import RfqBanner from "@/components/home/RfqBanner";

export default function LocaleHomePage() {
  return (
    <main>
      <Hero />
      <CoreCapability />
      <TrustSection />
      <UpdateSection />
      <RfqBanner />
    </main>
  );
}