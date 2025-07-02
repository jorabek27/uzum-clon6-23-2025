import "./Products.css";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
// import {  } from "react-icons/lia";
import { useState } from "react";
function Products({ categories }) {
  const [visibleCount, setVisibleCount] = useState(10);
  const currentCategory = categories[0];
  return (
    <div>
      <div className="products-container">
        {categories.map((category, catIndex) => (
          <div key={catIndex} className="category-section">
            <h2 className="container-text">{category.title}</h2>
            <div className="products">
              {category.products.slice(0, visibleCount).map((item, idx) => (
                <div className="product" key={item.id + "-" + idx}>
                  <div className="like">
                    <MdFavoriteBorder />
                  </div>
                  <div className="image-container">
                    <img
                      style={{ cursor: "pointer" }}
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="badges">
                    {item.badges.map((badge, i) => (
                      <button
                        key={i}
                        className="original"
                        style={{
                          backgroundColor: badge.background,
                          color: badge.color,
                          cursor: "pointer",
                        }}
                      >
                        {badge.icon}
                        <p>{badge.text}</p>
                      </button>
                    ))}
                  </div>
                  <div className="text">
                    <div className="price" style={{ cursor: "pointer" }}>
                      <h3>{item.price}</h3>
                      <BsCreditCard2BackFill />
                    </div>
                    <div
                      className="del-yellow-price"
                      style={{ cursor: "pointer" }}
                    >
                      <del>{item.oldPrice}</del>
                      <span className="yellow-price">{item.monthly}</span>
                    </div>
                    <h4 className="about" style={{ cursor: "pointer" }}>
                      {item.title}
                    </h4>
                    <div className="comment" style={{ cursor: "pointer" }}>
                      <FaStar fill="gold" size={12} />
                      <p>
                        {item.rating} ({item.reviews} sharhlar)
                      </p>
                    </div>
                    <button className="savatga">Savatga</button>
                  </div>
                </div>
              ))}
            </div>
            {visibleCount < currentCategory.products.length && (
              <button
                className="show-more-btn"
                onClick={() => setVisibleCount((prev) => prev + 5)}
              >
                Yana ko‘rsatish
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
