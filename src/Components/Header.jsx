import "./header.css";
import { CiLocationOn } from "react-icons/ci";
import uzFlag from "../assets/uzflag.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import uzumLogo from "../assets/uzumLogo.png";
import { TfiLayers } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import weekProduct from "../assets/weekproduct.png";

function Header() {
  return (
    <div>
      <header>
        <div className="left">
          <div className="address">
            <CiLocationOn />

            <div className="location">Namangan</div>
            <MdOutlineKeyboardArrowDown />
          </div>
          <p>Topshirish punktlari</p>
        </div>
        <div className="right">
          <p className="purple">Sotuvchi bo‘lish</p>
          <p className="purple">Topshirish punktini ochish</p>
          <p className="grey">Savol-javob</p>
          <p className="grey">Buyurtmalarim</p>{" "}
          <div className="language">
            <img src={uzFlag} alt="" className="flag" />
            O`zbekcha
          </div>
        </div>
      </header>
      <div className="headerbody">
        <div className="left-body">
          <img src={uzumLogo} alt="" />
          <div className="catalog">
            <TfiLayers />
            <p>Katalog</p>
          </div>
          <input
            type="text"
            className="inputsearch"
            placeholder="Mahsulotlar turkumini izlash"
          />
        </div>
        <div className="right-body">
          <div className="pair">
            <FaRegUser /> <p>Rashidov</p>
          </div>
          <div className="pair">
            <FaRegHeart />
            <p>Saralangan</p>
          </div>
          <div className="pair">
            <MdOutlineShoppingBag />
            <p>
              Savat <button>14</button>
            </p>
          </div>
        </div>
      </div>
      <div className="headerfooter">
        <div className="weekproducts">
          <img src={weekProduct} alt="" className="weekproducticon" />
          <p className="bold">Hafta tovarlari</p>
        </div>
        <p className="p">Elekronika</p>
        <p className="p"> Mashiy texnika</p>
        <p className="p">Kiyimlar</p>
        <p className="p">Poyabzallar</p>
        <p className="p">Aksessuarlar</p>
        <p className="p">Go`zallik va parvarish </p>
        <p className="p">Salomatlik</p>
        <p className="p">Uy-ro`zg`or buyumlari</p>
        <p className="p">Qurilish va tamirlash</p>
        <p className="p">
          yana <MdOutlineKeyboardArrowDown />
        </p>
      </div>
    </div>
  );
}

export default Header;
