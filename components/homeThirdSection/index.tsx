import Link from "next/link";
import React from "react";
function HomeThirdSection() {
  return (
    <section className="community bg-center bg-cover bg-[url('https://media.tenor.com/FLzVUDUueKEAAAAd/caff%C3%A9-coffee.gif')] min-h-screen">
      <div
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8),  rgba(0, 0, 0, 0.8))",
          width: "100%",
        }}
        className="flex items-center min-h-screen px-4"
      >
        <div
          className="max-w-6xl p-10 mx-auto text-center rounded-3xl"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
        >
          <h2 className="text-4xl font-bold mb-8">Join Our Community</h2>
          <h3 className="text-2xl">SipSpot ,more than a café.</h3>
          <p className="text-lg mt-4">
            Community of coffee lovers, united by our love for exceptional
            coffee and shared experiences.
          </p>
          <p>
            Connect with us on social media, subscribe to our newsletter. Life
            begins after coffee, steep and sip.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="#">
              <div className="btn-primary">Subscribe</div>
            </Link>
            <Link href="#">
              <div className="btn-secondary">Contact Us</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeThirdSection;
