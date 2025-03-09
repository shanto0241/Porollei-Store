import NotFound from "@/app/not-found";
import ProductImages from "@/components/shared/products/product-images";
import ProductPrice from "@/components/shared/products/product-price";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductbySlug } from "@/lib/actions/product.actions";

const ProductDetailPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const product = await getProductbySlug(slug);
  const stock = product?.stock ?? 0; // Defaults to 0 if product or stock is undefined/null

  if (!product) NotFound();
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* images column */}
          <div className="col-span-2">
            <ProductImages images={product?.images ?? []} />
          </div>
          {/* details column */}
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {product?.brand} {product?.category}
              </p>
              <h1 className="h3-bold">{product?.name}</h1>
              <p>
                {product?.rating} {product?.numReviews} Reviews
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <ProductPrice
                  value={Number(product?.price)}
                  className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
                />
              </div>
            </div>
            <div className="mt-10">
              <p className="font-semibold">Description</p>
              <p>{product?.description}</p>
            </div>
          </div>
          {/**Action Column */}
          <div>
            <Card>
              <CardContent className="p-4">
                <div className="mb-2 flex justify-between">
                  <div>Price</div>
                  <div>
                    <ProductPrice value={Number(product?.price)} />
                  </div>
                </div>
                <div className="mb-2 flex justify-between">
                  <div>Status</div>
                  {stock > 0 ? (
                    <Badge variant="outline">In Stock</Badge>
                  ) : (
                    <Badge variant="destructive">Out of Stock</Badge>
                  )}
                </div>
                {stock > 0 && (
                  <div className="flex-center">
                    <Button className="w-full">Add to cart</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
