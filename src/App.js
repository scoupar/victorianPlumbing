import "./App.css";
import { useState, useEffect } from "react";
import ProductTile from "./ProductTile";

const App = () => {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState(2);

  useEffect(() => {
    getProducts();
  }, [value]);

  const getProducts = async () => {
    const response = await fetch(
      "https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: "toilets",
          pageNumber: 1,
          size: 0,
          additionalPages: 0,
          sort: value,
        }),
      }
    );
    const data = await response.json();
    console.log("@E@E@E@E@E", data);
    setProducts(data.products);
  };

  console.log("!@!@!@!@!", products);
  console.log(value);
  return (
    <div className="App">
      <label for="sort">Sort by:</label>
      <select onChange={(e) => setValue(e.target.value)} name="sort" id="sort">
        <option default value="1">
          Recommended
        </option>
        <option value="2">Price: Low to High</option>
        <option value="3">Price: High to Low</option>
        <option value="2">Largest Discount</option>
      </select>
      <section className="container">
        {products.map((product) => (
          <ProductTile
            productName={product.productName}
            url={product.image.url}
            imgAlt={product.image.attributes.imageAltText}
            price={product.price.priceIncTax}
            brandImage={product.brand.brandImage.url}
          />
        ))}
      </section>
    </div>
  );
};

export default App;
