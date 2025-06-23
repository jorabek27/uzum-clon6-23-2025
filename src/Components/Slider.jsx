import "../Components/Slider.css";
import { useEffect, useState } from "react";
const sliderImages = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "https://picsum.photos/id/1016/1000/600/",
];
function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="slider-container">
        <button className="slider-btn left" onClick={prevSlide}>
          ❮
        </button>
        <img
          src={sliderImages[currentIndex]}
          alt="slide"
          className="slider-img"
        />
        <button className="slider-btn right" onClick={nextSlide}>
          ❯
        </button>
        <div className="slider-dots">
          {sliderImages.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            ></span>
          ))}
        </div>
      </div>
      <div className="buttons">
        <button className="four">
          <img
            src="https://static.uzum.uz/static/promo_images/756b6f56-9d2d-414c-a9d3-37d40d1c808b"
            alt=""
          />
          <p>Onalar va bolalar uchun</p>
        </button>
        <button className="four">
          <img
            src="https://static.uzum.uz/static/promo_images/a266cae1-db3a-4b40-a984-cf9220d9b2e8"
            alt=""
          />
          <p>Arzon narxlar kafolati</p>
        </button>
        <button className="four">
          <img
            src="https://static.uzum.uz/static/promo_images/66eaead4-ce8b-45b2-8691-592ced656ccf"
            alt=""
          />
          <p>Zanonaviy Bozor</p>
        </button>
        <button className="four">
          <img
            src="https://static.uzum.uz/static/promo_images/a98e3eef-162f-47b1-b8d8-f6253393bd95"
            alt=""
          />
          <p>Hafta tovarlari</p>
        </button>
      </div>
    </div>
  );
}

export default Slider;
