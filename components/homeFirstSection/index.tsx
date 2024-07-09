import { Jura } from "next/font/google";
import Link from "next/link";
const jura = Jura({
  weight: "400",
  subsets: ["latin"],
});

function HomeFistSection() {
  return (
    <section className="hero h-screen  bg-center bg-cover bg-[url('https://japanesecoffeeco.com/cdn/shop/articles/Caffeine_and_Coffee_1.jpg')]">
      <div
        className="h-screen px-4 flex flex-col justify-center items-center text-center"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0),  rgba(255, 255, 255, 0))",
        }}
      >
        <h1 className="text-6xl font-bold my-8">
          <span className="">Welcome to Coffee Shop</span>
        </h1>
        <p className={"text-4xl mb-8 max-w-2xl"}>
          <span className={jura.className}>
            At Coffee Shop, we believe that every great day starts with a
            perfect cup of coffee.
          </span>
        </p>
        <Link href="/our-coffee">
          <button className="bg-white text-black py-2 px-5 rounded-xl btn-primary">
            Discover Our Coffee
          </button>
        </Link>
      </div>
    </section>
  );
}

export default HomeFistSection;
