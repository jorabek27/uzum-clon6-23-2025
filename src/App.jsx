import "./App.css";
import Header from "./Components/header";
import Products from "./Components/Products";
import Slider from "./Components/Slider";
import Slide from "./Components/Slide";
import Footer from "./Components/Footer";
import Openpunkt from "./Components/Uzum/Topshirishpunktiochish/Openpunkt"

// import { BsPatchCheckFill } from "react-icons/bs";
// import { LiaTruckMovingSolid } from "react-icons/lia";

// const categories = [
//   {
//     title: "Tavsiya etamiz",
//     products: [
//       {
//         id: 1,
//         title: "Gazlangan ichimlik Fanta Apelsin, 1.5 litr",
//         image: "https://images.uzum.uz/ce8a878v1htd23airm6g/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5.0",
//         reviews: 32565,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Arzon narx kafolati",
//             background: "rgb(255, 68, 153)",
//             color: "white",
//           },
//           {
//             icon: <LiaTruckMovingSolid size={12} />,
//             text: "5 kun ichida",
//             background: "rgb(214, 244, 255)",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title:
//           "Alkogolsiz ichimlik Tropic, gazlanmagan, kivi ta'mi bilan, 1 litr",
//         image: "https://images.uzum.uz/cfd4td2g84cfbutu4hkg/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5",
//         reviews: 65,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Katta savdo",
//             background: "yellow",
//           },
//           {
//             text: "Super narx",
//             background: "rgb(19, 190, 76)",
//             color: "#fff",
//           },
//         ],
//       },
//       {
//         id: 1,
//         title: "Gazlangan ichimlik Fanta Apelsin, 1.5 litr",
//         image: "https://images.uzum.uz/ce8a878v1htd23airm6g/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5.0",
//         reviews: 32565,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Arzon narx kafolati",
//             background: "rgb(255, 68, 153)",
//             color: "white",
//           },
//           {
//             icon: <LiaTruckMovingSolid size={12} />,
//             text: "5 kun ichida",
//             background: "rgb(214, 244, 255)",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title:
//           "Alkogolsiz ichimlik Tropic, gazlanmagan, kivi ta'mi bilan, 1 litr",
//         image: "https://images.uzum.uz/cfd4td2g84cfbutu4hkg/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5",
//         reviews: 65,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Katta savdo",
//             background: "yellow",
//           },
//           {
//             text: "Super narx",
//             background: "rgb(19, 190, 76)",
//             color: "#fff",
//           },
//         ],
//       },
//       {
//         id: 1,
//         title: "Gazlangan ichimlik Fanta Apelsin, 1.5 litr",
//         image: "https://images.uzum.uz/ce8a878v1htd23airm6g/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5.0",
//         reviews: 32565,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Arzon narx kafolati",
//             background: "rgb(255, 68, 153)",
//             color: "white",
//           },
//           {
//             icon: <LiaTruckMovingSolid size={12} />,
//             text: "5 kun ichida",
//             background: "rgb(214, 244, 255)",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title:
//           "Alkogolsiz ichimlik Tropic, gazlanmagan, kivi ta'mi bilan, 1 litr",
//         image: "https://images.uzum.uz/cfd4td2g84cfbutu4hkg/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5",
//         reviews: 65,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Katta savdo",
//             background: "yellow",
//           },
//           {
//             text: "Super narx",
//             background: "rgb(19, 190, 76)",
//             color: "#fff",
//           },
//         ],
//       },
//       {
//         id: 1,
//         title: "Gazlangan ichimlik Fanta Apelsin, 1.5 litr",
//         image: "https://images.uzum.uz/ce8a878v1htd23airm6g/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5.0",
//         reviews: 32565,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Arzon narx kafolati",
//             background: "rgb(255, 68, 153)",
//             color: "white",
//           },
//           {
//             icon: <LiaTruckMovingSolid size={12} />,
//             text: "5 kun ichida",
//             background: "rgb(214, 244, 255)",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title:
//           "Alkogolsiz ichimlik Tropic, gazlanmagan, kivi ta'mi bilan, 1 litr",
//         image: "https://images.uzum.uz/cfd4td2g84cfbutu4hkg/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5",
//         reviews: 65,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Katta savdo",
//             background: "yellow",
//           },
//           {
//             text: "Super narx",
//             background: "rgb(19, 190, 76)",
//             color: "#fff",
//           },
//         ],
//       },
//           {
//         id: 1,
//         title: "Gazlangan ichimlik Fanta Apelsin, 1.5 litr",
//         image: "https://images.uzum.uz/ce8a878v1htd23airm6g/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5.0",
//         reviews: 32565,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Arzon narx kafolati",
//             background: "rgb(255, 68, 153)",
//             color: "white",
//           },
//           {
//             icon: <LiaTruckMovingSolid size={12} />,
//             text: "5 kun ichida",
//             background: "rgb(214, 244, 255)",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title:
//           "Alkogolsiz ichimlik Tropic, gazlanmagan, kivi ta'mi bilan, 1 litr",
//         image: "https://images.uzum.uz/cfd4td2g84cfbutu4hkg/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5",
//         reviews: 65,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Katta savdo",
//             background: "yellow",
//           },
//           {
//             text: "Super narx",
//             background: "rgb(19, 190, 76)",
//             color: "#fff",
//           },
//         ],
//       },
//       {
//         id: 1,
//         title: "Gazlangan ichimlik Fanta Apelsin, 1.5 litr",
//         image: "https://images.uzum.uz/ce8a878v1htd23airm6g/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5.0",
//         reviews: 32565,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Arzon narx kafolati",
//             background: "rgb(255, 68, 153)",
//             color: "white",
//           },
//           {
//             icon: <LiaTruckMovingSolid size={12} />,
//             text: "5 kun ichida",
//             background: "rgb(214, 244, 255)",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title:
//           "Alkogolsiz ichimlik Tropic, gazlanmagan, kivi ta'mi bilan, 1 litr",
//         image: "https://images.uzum.uz/cfd4td2g84cfbutu4hkg/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5",
//         reviews: 65,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Katta savdo",
//             background: "yellow",
//           },
//           {
//             text: "Super narx",
//             background: "rgb(19, 190, 76)",
//             color: "#fff",
//           },
//         ],
//       },
//       {
//         id: 1,
//         title: "Gazlangan ichimlik Fanta Apelsin, 1.5 litr",
//         image: "https://images.uzum.uz/ce8a878v1htd23airm6g/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5.0",
//         reviews: 32565,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Arzon narx kafolati",
//             background: "rgb(255, 68, 153)",
//             color: "white",
//           },
//           {
//             icon: <LiaTruckMovingSolid size={12} />,
//             text: "5 kun ichida",
//             background: "rgb(214, 244, 255)",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title:
//           "Alkogolsiz ichimlik Tropic, gazlanmagan, kivi ta'mi bilan, 1 litr",
//         image: "https://images.uzum.uz/cfd4td2g84cfbutu4hkg/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5",
//         reviews: 65,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Katta savdo",
//             background: "yellow",
//           },
//           {
//             text: "Super narx",
//             background: "rgb(19, 190, 76)",
//             color: "#fff",
//           },
//         ],
//       },
//       {
//         id: 1,
//         title: "Gazlangan ichimlik Fanta Apelsin, 1.5 litr",
//         image: "https://images.uzum.uz/ce8a878v1htd23airm6g/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5.0",
//         reviews: 32565,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Arzon narx kafolati",
//             background: "rgb(255, 68, 153)",
//             color: "white",
//           },
//           {
//             icon: <LiaTruckMovingSolid size={12} />,
//             text: "5 kun ichida",
//             background: "rgb(214, 244, 255)",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title:
//           "Alkogolsiz ichimlik Tropic, gazlanmagan, kivi ta'mi bilan, 1 litr",
//         image: "https://images.uzum.uz/cfd4td2g84cfbutu4hkg/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5",
//         reviews: 65,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Katta savdo",
//             background: "yellow",
//           },
//           {
//             text: "Super narx",
//             background: "rgb(19, 190, 76)",
//             color: "#fff",
//           },
//         ],
//       },
//     ],
//   },
  
//   {
//     title: "Oila uchun",
//     products: [
//       {
//         id: 1,
//         title: "Gazlangan ichimlik Fanta Apelsin, 1.5 litr",
//         image: "https://images.uzum.uz/ce8a878v1htd23airm6g/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5.0",
//         reviews: 32565,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Arzon narx kafolati",
//             background: "rgb(255, 68, 153)",
//             color: "white",
//           },
//           {
//             icon: <LiaTruckMovingSolid size={12} />,
//             text: "5 kun ichida",
//             background: "rgb(214, 244, 255)",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title:
//           "Alkogolsiz ichimlik Tropic, gazlanmagan, kivi ta'mi bilan, 1 litr",
//         image: "https://images.uzum.uz/cfd4td2g84cfbutu4hkg/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5",
//         reviews: 65,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Katta savdo",
//             background: "yellow",
//           },
//           {
//             text: "Super narx",
//             background: "rgb(19, 190, 76)",
//             color: "#fff",
//           },
//         ],
//       },
//       {
//         id: 1,
//         title: "Gazlangan ichimlik Fanta Apelsin, 1.5 litr",
//         image: "https://images.uzum.uz/ce8a878v1htd23airm6g/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5.0",
//         reviews: 32565,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Arzon narx kafolati",
//             background: "rgb(255, 68, 153)",
//             color: "white",
//           },
//           {
//             icon: <LiaTruckMovingSolid size={12} />,
//             text: "5 kun ichida",
//             background: "rgb(214, 244, 255)",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title:
//           "Alkogolsiz ichimlik Tropic, gazlanmagan, kivi ta'mi bilan, 1 litr",
//         image: "https://images.uzum.uz/cfd4td2g84cfbutu4hkg/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5",
//         reviews: 65,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Katta savdo",
//             background: "yellow",
//           },
//           {
//             text: "Super narx",
//             background: "rgb(19, 190, 76)",
//             color: "#fff",
//           },
//         ],
//       },
//       {
//         id: 1,
//         title: "Gazlangan ichimlik Fanta Apelsin, 1.5 litr",
//         image: "https://images.uzum.uz/ce8a878v1htd23airm6g/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5.0",
//         reviews: 32565,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Arzon narx kafolati",
//             background: "rgb(255, 68, 153)",
//             color: "white",
//           },
//           {
//             icon: <LiaTruckMovingSolid size={12} />,
//             text: "5 kun ichida",
//             background: "rgb(214, 244, 255)",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title:
//           "Alkogolsiz ichimlik Tropic, gazlanmagan, kivi ta'mi bilan, 1 litr",
//         image: "https://images.uzum.uz/cfd4td2g84cfbutu4hkg/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5",
//         reviews: 65,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Katta savdo",
//             background: "yellow",
//           },
//           {
//             text: "Super narx",
//             background: "rgb(19, 190, 76)",
//             color: "#fff",
//           },
//         ],
//       },
//       {
//         id: 1,
//         title: "Gazlangan ichimlik Fanta Apelsin, 1.5 litr",
//         image: "https://images.uzum.uz/ce8a878v1htd23airm6g/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5.0",
//         reviews: 32565,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Arzon narx kafolati",
//             background: "rgb(255, 68, 153)",
//             color: "white",
//           },
//           {
//             icon: <LiaTruckMovingSolid size={12} />,
//             text: "5 kun ichida",
//             background: "rgb(214, 244, 255)",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title:
//           "Alkogolsiz ichimlik Tropic, gazlanmagan, kivi ta'mi bilan, 1 litr",
//         image: "https://images.uzum.uz/cfd4td2g84cfbutu4hkg/original.jpg",
//         price: "10 751",
//         oldPrice: "16 000",
//         monthly: "849 so`m/oyiga",
//         rating: "5",
//         reviews: 65,
//         badges: [
//           {
//             icon: <BsPatchCheckFill fill="green" size={12} />,
//             text: "Original",
//           },
//           {
//             text: "Katta savdo",
//             background: "yellow",
//           },
//           {
//             text: "Super narx",
//             background: "rgb(19, 190, 76)",
//             color: "#fff",
//           },
//         ],
//       },
//     ],
//   },
// ];

function App() {
  return (
    <>
      {/* <Header />

      <Slider />
      <Products categories={categories} /> */}
      {/* <Products /> */}
      {/* <Slide />
      <Footer /> */}
      <Openpunkt/>
    </>
  );
}

export default App;
