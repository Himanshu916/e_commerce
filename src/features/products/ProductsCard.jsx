import { useProducts } from "./useProducts";
import { useNavigate, useSearchParams } from "react-router-dom";
import Cards from "../../ui/Cards";
import Card from "../../ui/Card";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
// import EmptyDiv from "../../ui/EmptyDiv";

function ProductsCard() {
  const { products, isLoading } = useProducts();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("category") || "all";
  const sortBy = searchParams.get("sortBy");
  const navigate = useNavigate();
  console.log(filter);
  if (isLoading) return <p>Loading...</p>;
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

  if (sortBy) {
    const [field, direction] = sortBy.split("-");
    console.log(field, direction);
    const modifier = direction === "asc" ? 1 : -1;
    filteredProducts.sort((a, b) => (a[field] - b[field]) * modifier);
  }

  function navigateHandler(id) {
    navigate(`/products/${id}`);
  }

  return (
    <Row type="consistentPadding">
      <Heading as="h3">Products</Heading>

      <Cards>
        {filteredProducts.map((item) => (
          <Card
            key={item.productName}
            navigateTo={navigateHandler}
            product={item}
          />
        ))}
      </Cards>
    </Row>
  );
}

export default ProductsCard;
