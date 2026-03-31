import styles from "./viewDetails.module.css";
function ViewProduct({ viewitem }) {
  console.log(viewitem, "viewitem");
  function getStars(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating - 1 < i) {
        stars.push(
          <span
            style={{
              color: "blue",
            }}
          >
            ☆
          </span>,
        );
      } else {
        stars.push(
          <span
            style={{
              color: "blue",
            }}
          >
            ★
          </span>,
        );
      }
    }

    return stars;
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div>
            <h5 className={styles.header}>
              <b>{viewitem.title}</b>
            </h5>

            <div>
              <img
                className={styles.imageSection}
                src={viewitem.images}
                alt={viewitem.title}
              />
            </div>
            <div className={styles.section}>
              <div className={styles.paragraph}>
                <p>
                  ${viewitem.price}{" "}
                  <div className={styles.starsContainer}>
                    <span className={styles.stars}>
                      {getStars(viewitem.rating)}
                    </span>
                  </div>
                </p>
                <p className={styles.category}>
                  <b>
                    Category:
                    {viewitem.category}{" "}
                  </b>
                </p>
                <p>
                  <b>Key Features:</b>
                </p>
                <p className={styles.descriptionPara}>{viewitem.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProduct;
