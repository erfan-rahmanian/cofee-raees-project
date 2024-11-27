import React, { useState } from "react";
import "../cssSec1.css";

function Sec2() {
  const [mainImage, setMainImage] = useState("https://raeescoffee.com/wp-content/uploads/2024/07/%DA%A9%D9%84%D9%85%D8%A8%DB%8C%D8%A7-%D9%84%D8%A7%DB%8C%D8%AA.jpg");
  const [activeThumb, setActiveThumb] = useState(0);

  const thumbnails = [
    {
      id: 0,
      src: "https://raeescoffee.com/wp-content/uploads/2024/07/%DA%A9%D9%84%D9%85%D8%A8%DB%8C%D8%A7-%D9%84%D8%A7%DB%8C%D8%AA.jpg",
      alt: "Coffee View 1"
    },
    {
      id: 1,
      src: "https://raeescoffee.com/wp-content/uploads/2024/07/Coffee-Roasting22-59-768x768.jpg",
      alt: "Coffee View 2"
    },
    {
      id: 2,
      src: "https://raeescoffee.com/wp-content/uploads/2024/07/before-Roasting-Sort_3-59-768x768.jpg",
      alt: "Coffee View 3"
    },
    {
      id: 3,
      src: "https://raeescoffee.com/wp-content/uploads/2024/07/After-Roasting-Sort_9-59.jpg",
      alt: "Coffee View 4"
    },
    {
      id: 4,
      src: "https://raeescoffee.com/wp-content/uploads/2024/07/espresso-roast-copy-original-2-768x768.jpg",
      alt: "Coffee View 5"
    }
  ];

  const handleThumbnailClick = (src, id) => {
    setMainImage(src);
    setActiveThumb(id);
  };

  return (
    <div className="dkasndd">
      <div className="container product-container mocono">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">خانه</a></li>
            <li className="breadcrumb-item"><a href="#"> &nbsp;/&nbsp; فروشگاه انلاین</a></li>
            <li className="breadcrumb-item active" aria-current="page">قهوه گواتمالا</li>
          </ol>
        </nav>

        <div className="row">
          <div className="col-md-5 order-md-1">
            <div className="product-gallery koklimage">
              <div className="main-image text-center">
                <img 
                  src={mainImage} 
                  alt="Main Product Image" 
                  className="img-fluid main-product-image" 
                  style={{ transition: 'opacity 0.2s' }}
                />
              </div>
              <div className="thumbnail-container">
                {thumbnails.map((thumb) => (
                  <div 
                    key={thumb.id}
                    className={`thumbnail ${activeThumb === thumb.id ? 'active' : ''}`}
                    onClick={() => handleThumbnailClick(thumb.src, thumb.id)}
                  >
                    <img src={thumb.src} alt={thumb.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rest of your component remains the same */}
          <div className="col-md-5 order-md-2   ttttth">
      
      <h1 className="product-title">قهوه برزیل ۲۵۰ گرمی</h1>
      <div className="product-details">
        <p><strong>کد کالا: </strong> - </p>
        <h5 className="mt-3">ویژگی‌ها</h5>
        <ul className="feature-list">
          <li>منطقه کشت: برزیل</li>
          <li>نوع آسیاب: اسپرسو ساز خانگی، واکاکو، اسپرسو ساز صنعتی، دانه (بینز)</li>
          <li>دستگاه دم: فرنچ پرس، کمکس، وی ۶۰، ایروپرس</li>
          <li>وزن: ۲۵۰ گرم</li>
          <li>گوناگونی: رئیسی</li>
        </ul>
      </div>
      <h5 className="mt-4">قیمت واحد</h5>
      <div className="product-price">۴۳۵,۰۰۰ تومان</div>
      <h5 className="mt-4">نوع آسیاب</h5>
      <select className="form-select product-option fffmmd">
        <option value={1}>فیلتر کافی (کمکس، وی ۶۰، ایروپرس، کالیتا)</option>
        <option value={2}>اسپرسو ساز صنعتی</option>
        <option value={3}>اسپرسو ساز خانگی</option>
      </select>
      <div className="quantity mt-4 ">
      <button className="btn btn-success rounded-pill  cart-button ujjjjjj">
               
               <span className="sabad lsdm"> افزودن سبد خرید </span> 
       
           
       
              </button>
                <button className="btn btn-success btnin bibibb"> <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  fill="currentColor"
                  className="bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg></button>
      </div>
    </div>


          <div className="col-md-2 order-md-2">
            <div className="comparison-box">
            <div className="add-compare">
  <img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDQ4IDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzUyIDMyMGMtMjIuNjA4IDAtNDMuMzg3IDcuODE5LTU5Ljc5IDIwLjg5NWwtMTAyLjQ4Ni02NC4wNTRhOTYuNTUxIDk2LjU1MSAwIDAgMCAwLTQxLjY4M2wxMDIuNDg2LTY0LjA1NEMzMDguNjEzIDE4NC4xODEgMzI5LjM5MiAxOTIgMzUyIDE5MmM1My4wMTkgMCA5Ni00Mi45ODEgOTYtOTZTNDA1LjAxOSAwIDM1MiAwcy05NiA0Mi45ODEtOTYgOTZjMCA3LjE1OC43OSAxNC4xMyAyLjI3NiAyMC44NDFMMTU1Ljc5IDE4MC44OTVDMTM5LjM4NyAxNjcuODE5IDExOC42MDggMTYwIDk2IDE2MGMtNTMuMDE5IDAtOTYgNDIuOTgxLTk2IDk2czQyLjk4MSA5NiA5NiA5NmMyMi42MDggMCA0My4zODctNy44MTkgNTkuNzktMjAuODk1bDEwMi40ODYgNjQuMDU0QTk2LjMwMSA5Ni4zMDEgMCAwIDAgMjU2IDQxNmMwIDUzLjAxOSA0Mi45ODEgOTYgOTYgOTZzOTYtNDIuOTgxIDk2LTk2LTQyLjk4MS05Ni05Ni05NnoiLz48L3N2Zz4=" alt="Brazil e" className="svgimage" />
    <span>افزودن به لیست مقایسه</span>
  </div>
  <hr />
  <div className="delivery-info">
 
    <span ><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-check-lg " viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
</svg>تحویل روز در تهران در صورت ثبت سفارش تا ساعت 16</span>
  </div>
  <div className="delivery-info">
  
    <span><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
</svg>تحویل شهرستان ۲ تا ۳ روز کاری</span>
  </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec2;