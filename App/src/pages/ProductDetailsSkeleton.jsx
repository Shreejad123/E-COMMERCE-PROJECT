import "./ProductDetailsSkeleton.css";

const ProductDetailsSkeleton = () => {
  return (
    <>
      <div className="skeleton-container">
        <div className="skeleton skeleton-title"></div>

        <div className="image-container">
          <div className="skeleton skeleton-image"></div>
        </div>

        <div className="skeleton skeleton-price"></div>

        <div className="skeleton skeleton-category"></div>

        <div className="rating">
          <div className="skeleton skeleton-star"></div>
          <div className="skeleton skeleton-star"></div>
          <div className="skeleton skeleton-star"></div>
          <div className="skeleton skeleton-star"></div>
          <div className="skeleton skeleton-star"></div>
        </div>

        <div className="skeleton skeleton-heading"></div>

        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text short"></div>

        <div className="button-group">
          <div className="skeleton skeleton-button"></div>
          <div className="skeleton skeleton-button"></div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsSkeleton;
