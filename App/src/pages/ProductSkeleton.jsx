import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./productSkeleton.module.css";

const ProductDetailsSkeleton = () => {
  return (
    <div className={styles.productContainer}>
      <Skeleton className={styles.skeletonTitle} />

      <div className={styles.imageWrapper}>
        <Skeleton className={styles.skeletonImage} />
      </div>

      <Skeleton className={styles.skeletonPrice} />
      <Skeleton className={styles.skeletonCategory} />
      <Skeleton className={styles.skeletonRating} />

      <Skeleton className={styles.skeletonHeading} />

      <div className={styles.skeletonDescription}>
        <Skeleton count={4} />
      </div>

      <div className={styles.skeletonButtons}>
        <Skeleton className={styles.skeletonBtn} />
        <Skeleton className={styles.skeletonBtn} />
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
