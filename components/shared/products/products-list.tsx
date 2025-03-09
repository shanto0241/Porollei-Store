import { Product } from "@/types";
import ProductCard from "./product-card";

const Productslist = ({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-8">
      <div className="h2-bold mb-4">{title}</div>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>No Products!. Please wait...</p>
        </div>
      )}
    </div>
  );
};

export default Productslist;
