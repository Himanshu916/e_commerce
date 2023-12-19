import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import CardOperations from "../../ui/CardOperations";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";

function ProductCardOperations() {
  return (
    <CardOperations>
      <Row type="consistentPadding">
        <Heading as="h3">Filters</Heading>
        <Filter
          filterField="category"
          options={[
            { value: "all", label: "All" },
            { value: "vegetarian", label: "Vegetarian" },
            { value: "nonVegetarian", label: "Non Vegetarian" },
          ]}
        />
      </Row>

      <Row type="consistentPadding">
        <Heading as="h3">Sort Products</Heading>
        <SortBy
          options={[
            { value: "productName-asc", label: "Sort by name (A-Z)" },
            { value: "productName-desc", label: "Sort by name (Z-A)" },
            { value: "price-asc", label: "Sort by price (low first)" },
            { value: "price-desc", label: "Sort by price (high first)" },
            {
              value: "discountPercentage-asc",
              label: "Sort by discount (low first)",
            },
            {
              value: "discountPercentage-desc",
              label: "Sort by discount (high first)",
            },
          ]}
        />
      </Row>
    </CardOperations>
  );
}

export default ProductCardOperations;
