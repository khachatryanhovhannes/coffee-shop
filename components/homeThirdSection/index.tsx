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
          <p className="text-lg mb-6">
            At Coffee Shop, we&lsquo;re more than just a coffee company.
            We&lsquo;re a community of coffee lovers, united by our passion for
            great coffee and our commitment to making a positive impact. Follow
            us on social media, subscribe to our newsletter, and become part of
            the Coffee Shop family.
          </p>
          <div className="flex justify-center space-x-4">
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
