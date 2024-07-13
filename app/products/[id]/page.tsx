import { redirect } from "next/navigation";
import { getRandomItems } from "@/utils";
import data from "../../../data/data.json";
import { ProductCard } from "@/components";

async function Product({ params }: { params: { id: string } }) {
  const product = data.find((p) => p.id === Number(params.id));

  if (!product) {
    redirect("/products");
    return null;
  }

  const moreProduct = getRandomItems({ array: data, count: 3 });

  return (
    <div className="bg-black text-white min-h-screen flex justify-center">
      <div className="w-full p-8 border border-white mx-14 rounded-lg shadow-lg">
        <div className="flex gap-4 flex-wrap">
          <img
            src={product.image_url}
            alt={product.name}
            className="rounded-lg mb-4"
            width={200}
          />
          <div>
            <div className="text-3xl font-bold mb-2">{product.name}</div>
            <div className="text-2xl font-bold">
              ${product.price.toFixed(2)}
            </div>
          </div>
        </div>
        <div className="text-lg mb-4">{product.description}</div>
        <hr />
        <div>
          <h2 className="mt-3">More products</h2>
        </div>

        <div className="flex flex-wrap justify-center mt-10 gap-6">
          {moreProduct.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.image_url}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
