import "./Products.css";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCreditCard2BackFill, BsPatchCheckFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { useState } from "react";
function Products() {
  const categories = [
    {
      title: "Tavsiya etamiz",
      products: [
        {
          id: 1,
          title: "Gazlangan ichimlik Fanta Apelsin, 1.5 litr",
          image: "https://images.uzum.uz/ce8a878v1htd23airm6g/original.jpg",
          price: "10 751",
          oldPrice: "16 000",
          monthly: "849 so`m/oyiga",
          rating: "5.0",
          reviews: 32565,
          badges: [
            {
              icon: <BsPatchCheckFill fill="green" size={12} />,
              text: "Original",
            },
            {
              text: "Arzon narx kafolati",
              background: "rgb(255, 68, 153)",
              color: "white",
            },
            {
              icon: <LiaTruckMovingSolid size={12} />,
              text: "5 kun ichida",
              background: "rgb(214, 244, 255)",
            },
          ],
        },
        {
          id: 2,
          title:
            "Alkogolsiz ichimlik Tropic, gazlanmagan, kivi ta'mi bilan, 1 litr",
          image: "https://images.uzum.uz/cfd4td2g84cfbutu4hkg/original.jpg",
          price: "10 751",
          oldPrice: "16 000",
          monthly: "849 so`m/oyiga",
          rating: "5",
          reviews: 65,
          badges: [
            {
              icon: <BsPatchCheckFill fill="green" size={12} />,
              text: "Original",
            },
            {
              text: "Katta savdo",
              background: "yellow",
            },
            {
              text: "Super narx",
              background: "rgb(19, 190, 76)",
              color: "#fff",
            },
          ],
        },
        {
          id: 1,
          title: "Gazlangan ichimlik Fanta Apelsin, 1.5 litr",
          image: "https://images.uzum.uz/ce8a878v1htd23airm6g/original.jpg",
          price: "10 751",
          oldPrice: "16 000",
          monthly: "849 so`m/oyiga",
          rating: "5.0",
          reviews: 32565,
          badges: [
            {
              icon: <BsPatchCheckFill fill="green" size={12} />,
              text: "Original",
            },
            {
              text: "Arzon narx kafolati",
              background: "rgb(255, 68, 153)",
              color: "white",
            },
            {
              icon: <LiaTruckMovingSolid size={12} />,
              text: "5 kun ichida",
              background: "rgb(214, 244, 255)",
            },
          ],
        },
        {
          id: 2,
          title:
            "Alkogolsiz ichimlik Tropic, gazlanmagan, kivi ta'mi bilan, 1 litr",
          image: "https://images.uzum.uz/cfd4td2g84cfbutu4hkg/original.jpg",
          price: "10 751",
          oldPrice: "16 000",
          monthly: "849 so`m/oyiga",
          rating: "5",
          reviews: 65,
          badges: [
            {
              icon: <BsPatchCheckFill fill="green" size={12} />,
              text: "Original",
            },
            {
              text: "Katta savdo",
              background: "yellow",
            },
            {
              text: "Super narx",
              background: "rgb(19, 190, 76)",
              color: "#fff",
            },
          ],
        },
        {
          id: 1,
          title: "Gazlangan ichimlik Fanta Apelsin, 1.5 litr",
          image: "https://images.uzum.uz/ce8a878v1htd23airm6g/original.jpg",
          price: "10 751",
          oldPrice: "16 000",
          monthly: "849 so`m/oyiga",
          rating: "5.0",
          reviews: 32565,
          badges: [
            {
              icon: <BsPatchCheckFill fill="green" size={12} />,
              text: "Original",
            },
            {
              text: "Arzon narx kafolati",
              background: "rgb(255, 68, 153)",
              color: "white",
            },
            {
              icon: <LiaTruckMovingSolid size={12} />,
              text: "5 kun ichida",
              background: "rgb(214, 244, 255)",
            },
          ],
        },
        {
          id: 2,
          title:
            "Alkogolsiz ichimlik Tropic, gazlanmagan, kivi ta'mi bilan, 1 litr",
          image: "https://images.uzum.uz/cfd4td2g84cfbutu4hkg/original.jpg",
          price: "10 751",
          oldPrice: "16 000",
          monthly: "849 so`m/oyiga",
          rating: "5",
          reviews: 65,
          badges: [
            {
              icon: <BsPatchCheckFill fill="green" size={12} />,
              text: "Original",
            },
            {
              text: "Katta savdo",
              background: "yellow",
            },
            {
              text: "Super narx",
              background: "rgb(19, 190, 76)",
              color: "#fff",
            },
          ],
        },
        {
          id: 1,
          title: "Gazlangan ichimlik Fanta Apelsin, 1.5 litr",
          image: "https://images.uzum.uz/ce8a878v1htd23airm6g/original.jpg",
          price: "10 751",
          oldPrice: "16 000",
          monthly: "849 so`m/oyiga",
          rating: "5.0",
          reviews: 32565,
          badges: [
            {
              icon: <BsPatchCheckFill fill="green" size={12} />,
              text: "Original",
            },
            {
              text: "Arzon narx kafolati",
              background: "rgb(255, 68, 153)",
              color: "white",
            },
            {
              icon: <LiaTruckMovingSolid size={12} />,
              text: "5 kun ichida",
              background: "rgb(214, 244, 255)",
            },
          ],
        },
        {
          id: 2,
          title:
            "Alkogolsiz ichimlik Tropic, gazlanmagan, kivi ta'mi bilan, 1 litr",
          image: "https://images.uzum.uz/cfd4td2g84cfbutu4hkg/original.jpg",
          price: "10 751",
          oldPrice: "16 000",
          monthly: "849 so`m/oyiga",
          rating: "5",
          reviews: 65,
          badges: [
            {
              icon: <BsPatchCheckFill fill="green" size={12} />,
              text: "Original",
            },
            {
              text: "Katta savdo",
              background: "yellow",
            },
            {
              text: "Super narx",
              background: "rgb(19, 190, 76)",
              color: "#fff",
            },
          ],
        },
      ],
    },
    {
      title: "Oila uchun",
      products: [
        {
          id: 1,
          title: "Gazlangan ichimlik Fanta Apelsin, 1.5 litr",
          image: "https://images.uzum.uz/ce8a878v1htd23airm6g/original.jpg",
          price: "10 751",
          oldPrice: "16 000",
          monthly: "849 so`m/oyiga",
          rating: "5.0",
          reviews: 32565,
          badges: [
            {
              icon: <BsPatchCheckFill fill="green" size={12} />,
              text: "Original",
            },
            {
              text: "Arzon narx kafolati",
              background: "rgb(255, 68, 153)",
              color: "white",
            },
            {
              icon: <LiaTruckMovingSolid size={12} />,
              text: "5 kun ichida",
              background: "rgb(214, 244, 255)",
            },
          ],
        },
        {
          id: 2,
          title:
            "Alkogolsiz ichimlik Tropic, gazlanmagan, kivi ta'mi bilan, 1 litr",
          image: "https://images.uzum.uz/cfd4td2g84cfbutu4hkg/original.jpg",
          price: "10 751",
          oldPrice: "16 000",
          monthly: "849 so`m/oyiga",
          rating: "5",
          reviews: 65,
          badges: [
            {
              icon: <BsPatchCheckFill fill="green" size={12} />,
              text: "Original",
            },
            {
              text: "Katta savdo",
              background: "yellow",
            },
            {
              text: "Super narx",
              background: "rgb(19, 190, 76)",
              color: "#fff",
            },
          ],
        },
        {
          id: 1,
          title: "Gazlangan ichimlik Fanta Apelsin, 1.5 litr",
          image: "https://images.uzum.uz/ce8a878v1htd23airm6g/original.jpg",
          price: "10 751",
          oldPrice: "16 000",
          monthly: "849 so`m/oyiga",
          rating: "5.0",
          reviews: 32565,
          badges: [
            {
              icon: <BsPatchCheckFill fill="green" size={12} />,
              text: "Original",
            },
            {
              text: "Arzon narx kafolati",
              background: "rgb(255, 68, 153)",
              color: "white",
            },
            {
              icon: <LiaTruckMovingSolid size={12} />,
              text: "5 kun ichida",
              background: "rgb(214, 244, 255)",
            },
          ],
        },
        {
          id: 2,
          title:
            "Alkogolsiz ichimlik Tropic, gazlanmagan, kivi ta'mi bilan, 1 litr",
          image: "https://images.uzum.uz/cfd4td2g84cfbutu4hkg/original.jpg",
          price: "10 751",
          oldPrice: "16 000",
          monthly: "849 so`m/oyiga",
          rating: "5",
          reviews: 65,
          badges: [
            {
              icon: <BsPatchCheckFill fill="green" size={12} />,
              text: "Original",
            },
            {
              text: "Katta savdo",
              background: "yellow",
            },
            {
              text: "Super narx",
              background: "rgb(19, 190, 76)",
              color: "#fff",
            },
          ],
        },
        {
          id: 1,
          title: "Gazlangan ichimlik Fanta Apelsin, 1.5 litr",
          image: "https://images.uzum.uz/ce8a878v1htd23airm6g/original.jpg",
          price: "10 751",
          oldPrice: "16 000",
          monthly: "849 so`m/oyiga",
          rating: "5.0",
          reviews: 32565,
          badges: [
            {
              icon: <BsPatchCheckFill fill="green" size={12} />,
              text: "Original",
            },
            {
              text: "Arzon narx kafolati",
              background: "rgb(255, 68, 153)",
              color: "white",
            },
            {
              icon: <LiaTruckMovingSolid size={12} />,
              text: "5 kun ichida",
              background: "rgb(214, 244, 255)",
            },
          ],
        },
        {
          id: 2,
          title:
            "Alkogolsiz ichimlik Tropic, gazlanmagan, kivi ta'mi bilan, 1 litr",
          image: "https://images.uzum.uz/cfd4td2g84cfbutu4hkg/original.jpg",
          price: "10 751",
          oldPrice: "16 000",
          monthly: "849 so`m/oyiga",
          rating: "5",
          reviews: 65,
          badges: [
            {
              icon: <BsPatchCheckFill fill="green" size={12} />,
              text: "Original",
            },
            {
              text: "Katta savdo",
              background: "yellow",
            },
            {
              text: "Super narx",
              background: "rgb(19, 190, 76)",
              color: "#fff",
            },
          ],
        },
        {
          id: 1,
          title: "Gazlangan ichimlik Fanta Apelsin, 1.5 litr",
          image: "https://images.uzum.uz/ce8a878v1htd23airm6g/original.jpg",
          price: "10 751",
          oldPrice: "16 000",
          monthly: "849 so`m/oyiga",
          rating: "5.0",
          reviews: 32565,
          badges: [
            {
              icon: <BsPatchCheckFill fill="green" size={12} />,
              text: "Original",
            },
            {
              text: "Arzon narx kafolati",
              background: "rgb(255, 68, 153)",
              color: "white",
            },
            {
              icon: <LiaTruckMovingSolid size={12} />,
              text: "5 kun ichida",
              background: "rgb(214, 244, 255)",
            },
          ],
        },
        {
          id: 2,
          title:
            "Alkogolsiz ichimlik Tropic, gazlanmagan, kivi ta'mi bilan, 1 litr",
          image: "https://images.uzum.uz/cfd4td2g84cfbutu4hkg/original.jpg",
          price: "10 751",
          oldPrice: "16 000",
          monthly: "849 so`m/oyiga",
          rating: "5",
          reviews: 65,
          badges: [
            {
              icon: <BsPatchCheckFill fill="green" size={12} />,
              text: "Original",
            },
            {
              text: "Katta savdo",
              background: "yellow",
            },
            {
              text: "Super narx",
              background: "rgb(19, 190, 76)",
              color: "#fff",
            },
          ],
        },
      ],
    },
  ];
  const [visibleCount, setVisibleCount] = useState(5);
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
