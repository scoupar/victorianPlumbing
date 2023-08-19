import "./productTile.css";

const ProductTile = ({ productName, url, imgAlt, price }) => {
  return (
    <div className="tile">
      <p>{productName}</p>
      <img src={url} alt={imgAlt} width="100" height="100" />
      <p>{price}</p>
    </div>
  );
};

export default ProductTile;
