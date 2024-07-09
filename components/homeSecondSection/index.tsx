import Image from "next/image";
import imageOne from "../../public/homeOne.jpeg";
import imageTwo from "../../public/homeTwo.jpg";
import imageThree from "../../public/homeThree.jpg";

function HomeSecondSection() {
  return (
    <section className="about min-h-screen  bg-black flex justify-center items-center">
      <div className="max-w-screen mx-auto text-center">
        <h2 className="text-4xl font-bold">Why Choose Coffee Shop?</h2>
        <div className="flex flex-wrap justify-center mt-10 gap-6">
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col">
              <div className="flex items-center justify-center mb-3">
                <h2 className="text-white dark:text-white text-lg font-semibold">
                  Premium Quality
                </h2>
              </div>
              <div className="flex justify-center my-4" style={{ height: 200 }}>
                <Image
                  src={imageOne}
                  height={200}
                  width={200}
                  alt="Coffe"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                  We source only the finest coffee beans from renowned
                  coffee-growing regions.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
              <div className="flex items-center justify-center mb-3">
                <h2 className="text-white dark:text-white text-lg font-semibold">
                  Sustainability
                </h2>
              </div>
              <div className="flex justify-center my-4" style={{ height: 200 }}>
                <Image
                  src={imageTwo}
                  height={200}
                  width={200}
                  alt="Coffe"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between  flex-grow">
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                  Our commitment to ethical sourcing and environmental
                  sustainability ensures that you can enjoy your coffee with a
                  clear conscience.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
              <div className="flex items-center justify-center mb-3">
                <h2 className="text-white dark:text-white text-lg font-semibold">
                  Artisan Roasting
                </h2>
              </div>
              <div className="flex justify-center my-4" style={{ height: 200 }}>
                <Image
                  src={imageThree}
                  height={200}
                  width={200}
                  alt="Coffe"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                  Our expert roasters use traditional methods to bring out the
                  unique characteristics of each bean.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSecondSection;
