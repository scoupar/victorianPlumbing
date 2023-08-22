import "./productTile.css";

const ProductTile = ({ productName, url, imgAlt, price, brandImage }) => {
  return (
    <div className="tile">
      <img className="productImage" src={url} alt={imgAlt} />
      <div className="tile-bottom">
        <img
          className="brand-image"
          src={brandImage}
          width="60"
          height="19.99"
        />
        <p className="product-name">{productName}</p>
        <p className="price">£{price}</p>
        <p></p>
      </div>
    </div>
  );
};

export default ProductTile;
