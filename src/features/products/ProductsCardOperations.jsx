import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import CardOperations from "../../ui/CardOperations";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Button from "../../ui/Button";
import { useUploadProduct } from "./useUploadProduct";

const products = [
  {
    productName: "Paneer Makhani",
    inStock: true,
    description: [
      "Paneer Makhani is a delectable Indian vegetarian dish.",
      "It is a rich and creamy curry made with paneer (Indian cottage cheese) as the star ingredient.",
      "The dish is known for its velvety tomato-based gravy, which is flavored with a blend of aromatic spices.",
      "Paneer cubes are gently simmered in this luscious and flavorful sauce, absorbing the delicious essence of the spices.",
      "The addition of butter and cream gives Paneer Makhani its signature indulgent and smooth texture.",
      "Tomato puree, cashews, and aromatic spices such as cumin, coriander, and garam masala contribute to the complexity of flavors.",
      "Paneer Makhani is often garnished with fresh cilantro or cream, adding a visual and taste appeal to the dish.",
      "It is a popular choice in Indian restaurants and homes alike, loved for its rich taste and satisfying creaminess.",
      "Pair Paneer Makhani with naan, roti, or steamed rice for a delightful culinary experience.",
    ],
    ingredients: [
      "paneer",
      "chopped tomatoes",
      "mustard seeds",
      "turmeric",
      "coriander",
      "red chilli",
    ],
    image:
      "https://ehfvegnwdzydhhzqwhig.supabase.co/storage/v1/object/public/foods/paneer-makhani.jpg",
    category: "vegetarian",
    discountPercentage: 5,
    mrp: 280,
    promoted: true,
    rating: 5.0,
  },
  {
    productName: "Masala Bhindi",
    inStock: true,
    description: [
      "Masala Bhindi is a delicious Indian dish that showcases okra (bhindi) seasoned with a flavorful blend of spices.",
      "The dish is known for its vibrant and aromatic profile, making it a popular choice in Indian households.",
      "Fresh, tender okra is sliced and sautéed to perfection, creating a delightful crispiness while maintaining its distinct texture.",
      "The masala (spice mix) for Masala Bhindi typically includes cumin, coriander, turmeric, and amchur (dried mango powder), offering a harmonious combination of flavors.",
      "The addition of onions, tomatoes, and green chilies enhances the overall taste and adds a pleasant tanginess to the dish.",
      "Masala Bhindi is often garnished with fresh cilantro and served as a side dish with roti, paratha, or rice.",
      "This dish is not only delicious but also a great way to enjoy the nutritional benefits of okra, which is rich in dietary fiber and various vitamins.",
      "Masala Bhindi is a favorite among vegetarians and a wonderful addition to any Indian meal, bringing both flavor and texture to the table.",
    ],
    ingredients: [
      "fresh bhindi (okra)",

      "ginger-garlic paste",
      "turmeric powder",
      "cumin powder",
      "coriander powder",
      "red chili powder",
      "amchur (dried mango powder)",
      "salt",
      "fresh cilantro",
    ],
    image:
      "https://ehfvegnwdzydhhzqwhig.supabase.co/storage/v1/object/public/foods/bhindi-masala.jpg",
    category: "vegetarian",
    discountPercentage: 10,
    mrp: 150,
    promoted: false,
    rating: 4.8,
  },
  {
    productName: "Vegetable Kofta Curry",
    inStock: false,
    description: [
      "Vegetable Kofta Curry is a delightful vegetarian dish where mixed vegetable dumplings are cooked in a rich and flavorful curry.",
      "The koftas are made with a mixture of finely chopped vegetables, gram flour, and spices, creating a tasty and satisfying texture.",
      "The curry is prepared with a blend of tomatoes, onions, and aromatic spices, providing a luscious base for the koftas.",
      "Vegetable Kofta Curry is known for its savory koftas that soak up the delicious curry, making each bite a burst of flavors.",
      "Garnish with fresh coriander and serve with naan or rice for a complete and fulfilling meal.",
    ],
    ingredients: [
      "mixed vegetables (carrots, peas, beans)",
      "gram flour (besan)",

      "tomatoes",
      "onions",
      "cashews",
      "cream",
      "oil",
      "fresh coriander (for garnish)",
    ],
    image:
      "https://ehfvegnwdzydhhzqwhig.supabase.co/storage/v1/object/public/foods/kofta-curry.jpg",
    category: "vegetarian",
    discountPercentage: 8,
    mrp: 220,
    promoted: true,
    rating: 4.5,
  },
  {
    productName: "Karahi Paneer",
    inStock: true,
    description: [
      "Karahi Paneer is a flavorful North Indian dish where paneer cubes are cooked with bell peppers and tomatoes in a special karahi masala.",
      "The dish gets its name from the traditional Indian wok, known as a karahi, used for cooking.",
      "Karahi Paneer is known for its bold and spicy flavor profile, making it a favorite among paneer lovers.",
      "The special karahi masala includes a blend of aromatic spices that add depth and richness to the dish.",
      "Serve Karahi Paneer hot with naan or roti for an authentic and satisfying dining experience.",
    ],
    ingredients: [
      "paneer",
      "bell peppers",
      "tomatoes",

      "cumin powder",
      "garam masala",
      "kasuri methi",
      "red chili powder",
    ],
    image:
      "https://ehfvegnwdzydhhzqwhig.supabase.co/storage/v1/object/public/foods/karahi-paneer.jpg",
    category: "vegetarian",
    discountPercentage: 7,
    mrp: 250,
    promoted: false,
    rating: 4.7,
  },
  {
    productName: "Butter Chicken",
    inStock: false,
    description: [
      "Butter Chicken, also known as Murgh Makhani, is a classic Indian dish that features tender chicken pieces in a creamy and flavorful tomato-based sauce.",
      "The dish is known for its rich and buttery taste, making it a favorite in Indian cuisine.",
      "The chicken is marinated in a mixture of yogurt and spices, enhancing its tenderness and flavor.",
      "The creamy tomato sauce is made with butter, cream, and a blend of aromatic spices, creating a velvety texture and delightful taste.",
      "Serve Butter Chicken with naan or rice for a luxurious and satisfying meal.",
    ],
    ingredients: [
      "chicken",
      "yogurt",
      "ginger-garlic paste",
      "tomato puree",
      "butter",
      "cream",
      "kasuri methi",
      "garam masala",
      "cumin powder",
    ],
    image:
      "https://ehfvegnwdzydhhzqwhig.supabase.co/storage/v1/object/public/foods/butter-chicken.jpg",
    category: "nonVegetarian",
    discountPercentage: 12,
    mrp: 320,
    promoted: true,
    rating: 4.9,
  },
  {
    productName: "Fried Rice",
    inStock: true,
    description: [
      "Fried Rice is a popular and versatile Chinese dish made with cooked rice, vegetables, and a savory sauce.",
      "The dish is known for its quick preparation and delicious flavor, making it a go-to option for a satisfying meal.",
      "Vegetables like carrots, peas, and bell peppers are stir-fried with rice in a wok, creating a delightful medley of textures and tastes.",
      "Fried Rice is often seasoned with soy sauce, ginger, and garlic, adding depth and umami to the dish.",
      "Serve Fried Rice as a standalone dish or as a side with your favorite Chinese entrees.",
    ],
    ingredients: [
      "cooked rice",
      "carrots",
      "peas",
      "bell peppers",

      "spring onions (for garnish)",
      "salt",
      "pepper",
    ],
    image:
      "https://ehfvegnwdzydhhzqwhig.supabase.co/storage/v1/object/public/foods/fried-rice.jpg",
    category: "vegetarian",
    discountPercentage: 10,
    mrp: 180,
    promoted: false,
    rating: 4.6,
  },
  {
    productName: "Kadhai Chicken",
    inStock: true,
    description: [
      "Kadhai Chicken is a flavorful Indian chicken curry cooked in a special kadhai (wok) with a blend of aromatic spices.",
      "The dish is known for its bold and robust flavor profile, making it a favorite among chicken enthusiasts.",
      "Chicken pieces are marinated and then cooked with onions, tomatoes, and bell peppers in a special kadhai masala.",
      "The result is a tantalizing curry that pairs perfectly with naan or roti.",
      "Garnish with fresh coriander and serve Kadhai Chicken hot for a delightful dining experience.",
    ],
    ingredients: [
      "chicken",
      "onions",
      "tomatoes",
      "bell peppers",
      "ginger-garlic paste",

      "turmeric powder",
      "oil",
      "fresh coriander (for garnish)",
    ],
    image:
      "https://ehfvegnwdzydhhzqwhig.supabase.co/storage/v1/object/public/foods/kadhai-chicken.jpeg",
    category: "nonVegetarian",
    discountPercentage: 8,
    mrp: 290,
    promoted: true,
    rating: 4.8,
  },
  {
    productName: "Gajar Halwa",
    inStock: true,
    description: [
      "Gajar Halwa, also known as Carrot Halwa, is a classic Indian dessert made with grated carrots, milk, ghee, and sugar.",
      "The dish is known for its rich and sweet taste, making it a popular choice during festivals and special occasions.",
      "Grated carrots are slow-cooked in milk until they become soft and absorb the milk's richness.",
      "Ghee and sugar are then added, enhancing the halwa's flavor and creating a delightful dessert.",
      "Garnish with chopped nuts and serve Gajar Halwa warm for a comforting and indulgent treat.",
    ],
    ingredients: [
      "carrots",
      "milk",
      "ghee",
      "sugar",
      "cardamom powder",
      "chopped nuts (for garnish)",
    ],
    image:
      "https://ehfvegnwdzydhhzqwhig.supabase.co/storage/v1/object/public/foods/gajar-halwa.jpg",
    category: "dessert",
    discountPercentage: 15,
    mrp: 200,
    promoted: true,
    rating: 4.9,
  },
  {
    productName: "Pulao",
    inStock: true,
    description: [
      "Pulao is a fragrant and flavorful rice dish cooked with aromatic spices and a variety of vegetables or meat.",
      "The dish is known for its simplicity and versatility, making it a popular choice for everyday meals.",
      "Basmati rice is sautéed with spices, onions, and vegetables or meat, creating a delightful one-pot dish.",
      "Pulao can be customized with different ingredients to suit your taste preferences.",
      "Serve Pulao with raita or a side of your favorite curry for a complete and satisfying meal.",
    ],
    ingredients: [
      "basmati rice",
      "onions",
      "mixed vegetables (peas, carrots, beans)",

      "cumin seeds",
      "cardamom",
      "cinnamon",
      "cloves",
      "ginger-garlic paste",

      "fresh coriander (for garnish)",
    ],
    image:
      "https://ehfvegnwdzydhhzqwhig.supabase.co/storage/v1/object/public/foods/pulao.jpg",
    category: "vegetarian",
    discountPercentage: 10,
    mrp: 160,
    promoted: false,
    rating: 4.7,
  },
  {
    productName: "Chole",
    inStock: true,
    description: [
      "Chole, also known as Chana Masala, is a popular North Indian dish made with chickpeas cooked in a flavorful and spiced tomato-based curry.",
      "The dish is known for its robust flavor profile and is a favorite among vegetarian enthusiasts.",
      "Chickpeas are soaked, boiled, and then simmered in a curry made with onions, tomatoes, and a blend of aromatic spices.",
      "Chole is often garnished with fresh coriander and served with rice or naan for a hearty and satisfying meal.",
    ],
    ingredients: [
      "chickpeas",
      "onions",
      "tomatoes",

      "cumin seeds",
      "coriander powder",
      "garam masala",
      "turmeric powder",
      "red chili powder",

      "salt",
    ],
    image:
      "https://ehfvegnwdzydhhzqwhig.supabase.co/storage/v1/object/public/foods/chole.jpg",
    category: "vegetarian",
    discountPercentage: 8,
    mrp: 180,
    promoted: false,
    rating: 4.6,
  },
];

function ProductCardOperations() {
  const { uploadProduct, isUploading } = useUploadProduct();

  function handleUploading() {
    uploadProduct(products);
  }

  console.log(isUploading);
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
      <Row type="consistentPadding">
        <Heading as="h3">Upload Products</Heading>
        <Button onClick={handleUploading}>Upload</Button>
      </Row>
    </CardOperations>
  );
}

export default ProductCardOperations;
