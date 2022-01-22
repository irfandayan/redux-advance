import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMAY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    tittle: "My first Book",
    description: "The frist book i ever wrote",
  },
  {
    id: "p2",
    price: 5,
    tittle: "My first Book",
    description: "The second book i ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMAY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.tittle}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
