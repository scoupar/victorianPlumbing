import "./App.css";
import { useState, useEffect } from "react";
import ProductTile from "./ProductTile";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

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
          pageNumber: 0,
          size: 0,
          additionalPages: 0,
          sort: 1,
        }),
      }
    );
    const data = await response.json();
    console.log("@E@E@E@E@E", data);
    setProducts(data.products);
  };
  console.log(products);

  console.log("!@!@!@!@!", products);

  // console.log(getProducts());

  // getProducts();
  return (
    <div className="App">
      <div className="container">
        {products.map((product) => (
          <ProductTile
            productName={product.productName}
            url={product.image.url}
            imgAlt={product.image.attributes.imageAltText}
            price={product.price.priceIncTax}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
