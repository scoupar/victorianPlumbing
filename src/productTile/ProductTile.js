import "./productTile.scss";

const ProductTile = ({
  productName,
  url,
  imgAlt,
  price,
  brandImage,
  brandImageAlt,
  rating,
  stockStatus,
  reviewsCount,
  monthlyFinanceEstimate,
  wasPriceIncTax,
}) => {
  return (
    <div className="tile">
      <div className="image-container">
        <img className="product-image" src={url} alt={imgAlt} />
        <div className="middle">
          <div className="text">Quick View</div>
        </div>
      </div>

      <div className="tile-bottom">
        <img
          className="brand-image"
          src={brandImage}
          width="60"
          height="19.99"
          alt={brandImageAlt}
        />

        <a className="product-name">{productName}</a>
        <div className="price-container">
          <p className="price">£{price}</p>
          <p className="was-price">
            {wasPriceIncTax ? `was ${wasPriceIncTax}` : null}
          </p>
        </div>
        {monthlyFinanceEstimate ? (
          <p className="finance">
            Finance from £{monthlyFinanceEstimate}/month
          </p>
        ) : null}
        <div className="stock-level">
          <img
            className="tick"
            src={stockStatus === "G" ? "tick.svg" : "redtick.svg"}
            height="20"
            width="20"
          ></img>
          <p>{stockStatus === "G" ? `In Stock` : `Available`}</p>
        </div>
        {rating ? (
          <div
            className="stars"
            style={{ "--rating": rating }}
            aria-label="product rating is 2.3 out of 5"
          >
            <p>{reviewsCount}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductTile;
