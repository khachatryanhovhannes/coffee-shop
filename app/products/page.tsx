import { ProductCard } from "@/components";
import data from "../../data/data.json";

function Products() {
  return (
    <div className="min-h-screen">
      <h2 className="text-3xl text-center">Products</h2>
      <div className="flex flex-wrap justify-center mt-10 gap-6">
        {data?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product?.name}
            description={product.description}
            imageUrl={product.image_url}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
