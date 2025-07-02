import "./Openpunkt.css";
function Openpunkt() {
  return (
    <div>
      <div className="opencontainer">
        <nav>
          <img
            src="	https://uzum.uz/landings/_ipx/_/landings/img/uzum-logo.svg"
            alt=""
          />
          <div className="right">
            <p>Qanday ochiladi</p>
            <p>Nimalar kerak bo`ladi</p>
            <p>Brendbuk</p>
            <bnt className="lang">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.5422 15C20.268 19.0571 16.4777 22 12 22C7.52238 22 3.73209 19.0571 2.45782 15H21.5422Z"
                  fill="#D52B1E"
                ></path>
                <path
                  d="M21.5422 9H2.45782C3.73209 4.94289 7.52238 2 12 2C16.4777 2 20.268 4.94289 21.5422 9Z"
                  fill="#F7F9FC"
                ></path>
                <path
                  d="M21.3704 15.5C21.7775 14.4107 22 13.2313 22 12C22 10.7687 21.7775 9.58934 21.3704 8.5H2.62961C2.22255 9.58934 2 10.7687 2 12C2 13.2313 2.22255 14.4107 2.62961 15.5H21.3704Z"
                  fill="#0039A6"
                ></path>
              </svg>
              Русский
            </bnt>
          </div>
        </nav>
        <div className="body">
          <div className="text">
            <p
              style={{
                fontSize: "44px",
                color: "#fff",
                fontWeight: "700",
                display: "flex",
                paddingBottom: "16px",
              }}
            >
              Uzum Market topshirish punktini oching
            </p>
            <p style={{ fontSize: "20px", color: "#fff" , paddingBottom:"40px"}}>
              Ishga tushirishga yordam beramiz va xodimlarni o‘qitamiz
            </p>
            <p
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                color: "#Fff",
                fontSize: "18px",
              }}
            >
              <img
                style={{ width: "44px", height: "44px" ,marginBottom:"10px"}}
                src="https://uzum.uz/landings/_ipx/s_88x88/landings/img/pvz/icons/money.png"
                alt=""
              />
              Oyiga 15 mln so‘mdan boshlab mukofotlash
            </p>
            <p style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                color: "#Fff",
                fontSize: "18px",
              }}>
              <img style={{ width: "44px", height: "44px" ,marginBottom:"10px"}}
                src="	https://uzum.uz/landings/_ipx/s_88x88/landings/img/pvz/icons/hand-money.png"
                alt=""
              />
              Sarmoya 40 mln so‘mdan boshlab
            </p>
            <p style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                color: "#Fff",
                fontSize: "18px",
              }}>
              <img style={{ width: "44px", height: "44px" ,marginBottom:"10px"}}
                src="	https://uzum.uz/landings/_ipx/s_88x88/landings/img/pvz/icons/up-arrow.png"
                alt=""
              />
              O‘zini qoplash 12 oydan boshlab{" "}
            </p>
            <button className="aloqa">
              Aloqa uchun ma`lumot qoldirish
            </button>
          </div>
          <div className="imge">
            <img 
              src="https://uzum.uz/landings/_ipx/_/landings/img/pvz/main-image.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Openpunkt;
