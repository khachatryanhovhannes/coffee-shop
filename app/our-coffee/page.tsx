import Link from "next/link";
import React from "react";

function OurCoffe() {
  return (
    <div className="bg-black text-white">
      {/* Our Coffee Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-8">Our Coffee</h1>
          <p className="text-xl max-w-3xl mx-auto">
            At [Coffee Brand Name], we believe that great coffee starts with
            great beans. Our dedication to quality, sustainability, and
            craftsmanship is reflected in every cup. Explore our range of
            expertly curated coffee blends, each designed to bring out the best
            in every bean.
          </p>
        </div>
      </section>

      {/* Coffee Blends Section */}
      <section className="py-16 bg-gray-900 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Coffee Blends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="blend bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Signature Blend</h3>
              <p>
                A harmonious balance of rich, full-bodied flavor with a smooth
                finish. Perfect for any time of day.
              </p>
            </div>
            <div className="blend bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Morning Glory</h3>
              <p>
                Bright and lively, with notes of citrus and floral undertones.
                Perfect for starting your day.
              </p>
            </div>
            <div className="blend bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Dark Roast Delight</h3>
              <p>
                Deep, robust flavors with hints of chocolate and spice. Ideal
                for a bolder cup.
              </p>
            </div>
            <div className="blend bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Decaf Dream</h3>
              <p>
                Rich and full-flavored without the caffeine. Perfect for any
                time of day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Sourcing</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We take pride in sourcing our coffee beans from the finest
            coffee-growing regions around the world. Our relationships with
            dedicated farmers ensure that we receive only the highest quality
            beans, cultivated with care and commitment to sustainable practices.
          </p>
          <div className="space-y-4 text-lg">
            <p>
              Ethical Sourcing: We partner with farmers who prioritize
              environmental stewardship and fair labor practices.
            </p>
            <p>
              Sustainable Practices: Our commitment to sustainability extends
              from the farm to your cup, supporting eco-friendly farming methods
              and environmental conservation programs.
            </p>
          </div>
        </div>
      </section>

      {/* Roasting Process Section */}
      <section className="py-16 bg-gray-900 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Roasting Process</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Our artisan roasting process is key to unlocking the full potential
            of each coffee bean. Our skilled roasters use traditional methods to
            bring out the unique characteristics of every blend.
          </p>
          <div className="space-y-4 text-lg">
            <p>
              Small Batch Roasting: We roast our coffee in small batches to
              ensure consistency and quality.
            </p>
            <p>
              Expert Craftsmanship: Each batch is roasted to perfection by our
              team of experienced roasters, who bring out the best in every
              bean.
            </p>
          </div>
        </div>
      </section>

      {/* Brewing Recommendations Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Brewing Recommendations</h2>
          <div className="space-y-8 text-lg">
            <div>
              <h3 className="text-2xl font-bold">Signature Blend</h3>
              <p>
                Best enjoyed with a drip coffee maker or French press. Use a
                medium grind and brew at 200°F for optimal flavor.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Morning Glory</h3>
              <p>
                Perfect for pour-over or AeroPress. Use a medium-coarse grind
                and brew at 195°F to bring out the bright, citrusy notes.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Dark Roast Delight</h3>
              <p>
                Ideal for espresso or moka pot. Use a fine grind and brew at
                205°F to highlight the deep, robust flavors.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Decaf Dream</h3>
              <p>
                Suitable for any brewing method. Use a medium grind and brew at
                200°F for a smooth, full-flavored cup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience the Difference Section */}
      <section className="py-16 bg-gray-900 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Experience the Difference</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            At [Coffee Brand Name], we’re passionate about delivering an
            exceptional coffee experience. From the careful selection of our
            beans to the meticulous roasting process, every step is designed to
            create a coffee that you’ll love. Taste the difference that quality
            and craftsmanship make—explore our range of coffee today.
          </p>
          <Link href="/shop">
            <div className="btn-primary">Shop Our Coffee</div>
          </Link>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Stay Connected</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join our community of coffee lovers! Follow us on social media and
            sign up for our newsletter to receive updates on new products,
            special offers, and brewing tips.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/newsletter">
              <div className="btn-primary">Subscribe</div>
            </Link>
            <Link href="/contact-us">
              <div className="btn-secondary">Contact Us</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurCoffe;
