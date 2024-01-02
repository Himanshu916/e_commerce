import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import CardOperations from "../../ui/CardOperations";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
// import Button from "../../ui/Button";
// import { useUploadProduct } from "./useUploadProduct";

function ProductCardOperations() {
  // const { uploadProduct, isUploading } = useUploadProduct();

  // function handleUploading() {
  //   uploadProduct(products);
  // }

  // console.log(isUploading);
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
            { value: "promoted", label: "Promoted" },
            { value: "inStock", label: "Available" },
          ]}
        />
      </Row>

      <Row type="consistentPadding">
        <Heading as="h3">Sort Products</Heading>
        <SortBy
          options={[
            { value: "productName-asc", label: "Sort by name (A-Z)" },
            { value: "productName-desc", label: "Sort by name (Z-A)" },
            { value: "mrp-asc", label: "Sort by price (low first)" },
            { value: "mrp-desc", label: "Sort by price (high first)" },
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
      {/* <Row type="consistentPadding">
        <Heading as="h3">Upload Products</Heading>
        <Button onClick={handleUploading}>Upload</Button>
      </Row> */}
    </CardOperations>
  );
}

export default ProductCardOperations;
