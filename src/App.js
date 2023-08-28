import "./App.scss";
import { useState, useEffect } from "react";
import ProductTile from "./productTile/ProductTile";

const App = () => {
  const [products, setProducts] = useState([]);
  const [sortValue, setSortValue] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [pageSize, setPageSize] = useState(30);
  const [additionalPages, setAdditionalPages] = useState(0);
  const [query, setQuery] = useState("toilets");

  useEffect(() => {
    getProducts();
  }, [sortValue, additionalPages, query]);

  const getMoreProducts = () => {
    setAdditionalPages((prevValue) => prevValue + 1);
    setPageSize(pageSize + 30);
  };

  const productTypes = [
    {
      query: "toilets",
      label: "Toilets",
    },
    {
      query: "bathroom-suites",
      label: "Bathroom Suites",
    },
    {
      query: "basins",
      label: "Basins",
    },
    {
      query: "baths",
      label: "Baths",
    },
    {
      query: "showers",
      label: "Showers",
    },
    {
      query: "bathroom-furniture",
      label: "Furniture",
    },
    {
      query: "taps",
      label: "Taps",
    },
    {
      query: "bathroom-furniture/bathroom-mirrors",
      label: "Mirrors",
    },
  ];

  const getProducts = async () => {
    const response = await fetch(
      "https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: query,
          pageNumber: 1,
          size: 0,
          additionalPages: additionalPages,
          sort: sortValue,
        }),
      }
    );
    if (!response.ok) {
      console.log("Error", response.status);
    }
    const data = await response.json();
    console.log("@E@E@E@E@E", data);
    setProducts(data.products);
    setTotalProducts(data.pagination.total);
  };

  return (
    <div className="App">
      <div className="product-menu">
        {productTypes.map((product) => (
          <button
            className="product-button"
            onClick={() => setQuery(product.query)}
          >
            {product.label}
          </button>
        ))}
      </div>
      <div className="sort-section">
        <label className="sort-label" htmlFor="sort">
          Sort by:
          <select
            onChange={(e) => setSortValue(e.target.value)}
            name="sort"
            id="sort"
            className="sort-input"
          >
            <option default value="1">
              Recommended
            </option>
            <option value="2">Lowest Price</option>
            <option value="3">Highest Price</option>
            <option value="2">Largest Discount</option>
          </select>
        </label>

        <p>{totalProducts} results</p>
      </div>
      <section className="container">
        {products.map((product) => (
          <ProductTile
            key={product.id}
            productName={product.productName}
            url={product.image.url}
            imgAlt={product.image.attributes.imageAltText}
            price={product.price.priceIncTax}
            brandImage={product.brand.brandImage.url}
            brandImageAlt={product.brand.brandImage.attributes.imageAltText}
            rating={product.averageRating}
            stockStatus={product.stockStatus.status}
            reviewsCount={product.reviewsCount}
            monthlyFinanceEstimate={product.price.monthlyFinanceEstimate}
            wasPriceIncTax={product.price.wasPriceIncTax}
          />
        ))}
      </section>
      <p className="total-products">
        You've viewed {totalProducts <= pageSize ? totalProducts : pageSize} of{" "}
        {totalProducts} products
      </p>
      {totalProducts >= pageSize ? (
        <button className="more-button" onClick={getMoreProducts}>
          Load More
        </button>
      ) : null}
    </div>
  );
};

export default App;
