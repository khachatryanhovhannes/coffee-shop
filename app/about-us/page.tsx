import { AboutFistSection, AboutSectionSection } from "@/components";

function AboutUs() {
  return (
    <div className="bg-black text-white">
      <AboutFistSection />
      <AboutSectionSection />

      {/* Connect Online Section */}
      <section className="py-16 px-4  min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Connect Online</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Follow us on social media for the latest updates on events, new
            arrivals, and community happenings.
          </p>
          <p className="text-lg">
            Instagram:{" "}
            <a href="https://instagram.com/sipspot" className="text-yellow-400">
              @sipspot
            </a>
          </p>
        </div>
      </section>

      {/* Feedback Matters Section */}
      <section className="py-16 bg-gray-900  min-h-screen px-4 flex items-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Feedback Matters</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let us know how we`&apos;re doing and how we can make your{" "}
            <span className="text-yellow-400">SipSpot</span> experience even
            better.
          </p>
          <p className="text-lg">
            Email:{" "}
            <a href="mailto:feedback@sipspot.com" className="text-yellow-400">
              feedback@sipspot.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}

export default AboutUs;
