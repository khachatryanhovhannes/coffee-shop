import Link from "next/link";
import React from "react";
function HomeThirdSection() {
  return (
    <section className="community py-20 px-4 bg-black min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Join Our Community</h2>
        <p className="text-lg mb-6">
          At Coffee Shop, we&lsquo;re more than just a coffee company.
          We&lsquo;re a community of coffee lovers, united by our passion for
          great coffee and our commitment to making a positive impact. Follow us
          on social media, subscribe to our newsletter, and become part of the
          Coffee Shop family.
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
    </section>
  );
}

export default HomeThirdSection;
