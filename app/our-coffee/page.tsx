import Link from "next/link";
import React from "react";

function OurCoffee() {
  return (
    <div className="bg-black  text-white">
      <section className=" min-h-screen bg-center bg-cover bg-[url('https://scx2.b-cdn.net/gfx/news/hires/2018/coffee.jpg')]">
        <div
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8),  rgba(0, 0, 0, 0.8))",
            width: "100%",
          }}
          className="flex items-center min-h-screen px-4"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-8">Our Coffee</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We believe that exceptional coffee starts with extraordinary
              beans. Your favorite morning spot, where every sip feels like a
              friendly hello.
            </p>
          </div>
        </div>
      </section>

      {/* Coffee Blends Section */}
      <section className="py-16 bg-black px-4 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Coffee Blends to Love
          </h2>
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

      <section className=" min-h-screen bg-center bg-cover bg-[url('https://www.bwindiugandagorillatrekking.com/wp-content/uploads/2020/02/Arabica-Coffee-grown-in-Uganda.jpg')]">
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
            <h2 className="text-4xl font-bold mb-8">Sourcing</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              We take pride in sourcing our coffee beans from the finest
              coffee-growing regions around the world. Our relationships with
              dedicated farmers ensure that we receive only the highest quality
              beans, cultivated with care and commitment to sustainable
              practices.
            </p>
            <div className="space-y-4 text-lg">
              <p>
                Ethical Sourcing: We partner with farmers who prioritize
                environmental stewardship and fair labor practices.
              </p>
              <p>
                Sustainable Practices: Our commitment to sustainability extends
                from the farm to your cup, supporting eco-friendly farming
                methods and environmental conservation programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roasting Process Section */}
      <section className="py-16 bg-black px-4 flex-wrap gap-5 min-h-screen flex items-center justify-between md:px-10">
        <div className="mx-auto text-center md:w-5/12">
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
        <img
          className="md:w-5/12"
          src="https://stories.starbucks.com/uploads/2019/01/Starbucks_Coffee_Roast.jpg"
          alt=""
        />
      </section>

      {/* Brewing Recommendations Section */}
      <section className="py-16 px-4   min-h-screen flex items-center">
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
      <section className=" min-h-screen bg-center bg-cover bg-[url('https://cdn.shopify.com/s/files/1/1616/2815/files/coffee_flavors.jpg?v=1682498943')]">
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
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">
                Experience the Difference
              </h2>
              <p className="text-xl max-w-3xl mx-auto mb-8">
                Crafted with heart and shared with love. We invite you to taste
                the difference. Life is too short to drink bad coffee
              </p>
              <Link href="/products">
                <div className="btn-primary">Shop Our Coffee</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurCoffee;
