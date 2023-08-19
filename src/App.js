import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
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
    setProducts(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  // console.log(getProducts());

  // getProducts();
  return (
    <div className="App">
      <h1></h1>
    </div>
  );
};

export default App;
