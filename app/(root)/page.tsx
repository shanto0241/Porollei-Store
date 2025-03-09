// To check Loader Image, add async await in Homepage (await delay(1000))
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

import Productslist from "@/components/shared/products/products-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

export const metadata = {
  title: "Home",
};

const Homepage = async () => {
  const latestDBProducts = await getLatestProducts();
  return (
    <div>
      <Productslist data={latestDBProducts} title="Newest Arrivals" />
    </div>
  );
};

export default Homepage;
