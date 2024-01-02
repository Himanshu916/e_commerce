import { useProducts } from "./useProducts";
import { useNavigate, useSearchParams } from "react-router-dom";
import Cards from "../../ui/Cards";
import Card, { withPromotedLabel } from "../../ui/Card";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Shimmer from "../../ui/Shimmer";
const CardPromoted = withPromotedLabel(Card);
function ProductsCard() {
  const { products, isLoading } = useProducts();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("category") || "all";
  const sortBy = searchParams.get("sortBy");
  const navigate = useNavigate();

  if (isLoading) return <Shimmer />;
  let filteredProducts;
  if (filter === "all") filteredProducts = products;
  if (filter === "vegetarian")
    filteredProducts = products.filter(
      (product) => product.category === "vegetarian"
    );
  if (filter === "nonVegetarian")
    filteredProducts = products.filter(
      (product) => product.category === "nonVegetarian"
    );

  if (filter === "promoted")
    filteredProducts = products.filter((product) => product.promoted);
  if (filter === "inStock")
    filteredProducts = products.filter((product) => product.inStock);
  if (sortBy) {
    const [field, direction] = sortBy.split("-");

    const modifier = direction === "asc" ? 1 : -1;
    if (field === "productName")
      filteredProducts.sort(
        (a, b) => a[field].localeCompare(b[field]) * modifier
      );
    filteredProducts.sort((a, b) => (a[field] - b[field]) * modifier);
  }

  function navigateHandler(id) {
    navigate(`/products/${id}`);
  }
  console.log(products, "how many");
  return (
    <Row type="consistentPadding">
      <Heading as="h3">Products</Heading>

      <Cards>
        {filteredProducts.map((item) =>
          item.promoted ? (
            <CardPromoted
              key={item.id}
              navigateTo={navigateHandler}
              product={item}
            />
          ) : (
            <Card key={item.id} navigateTo={navigateHandler} product={item} />
          )
        )}
      </Cards>
    </Row>
  );
}

export default ProductsCard;
