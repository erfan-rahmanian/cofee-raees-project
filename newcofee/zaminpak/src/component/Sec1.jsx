import React from "react";
import "./Sec1.css"
import "../font.ttf"
import image1 from "./Screenshot 2024-10-07 100839.png"

function Sec1(){

return(
    <div>


<section className="hero-section">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6  "> 
        <button className="btn btn-outline-dark mt-3  dskfsfas btn111 ">زمین پاک</button>
        <h4 className=" ewwefwf"><span className="akfaafaf">همه در کنار هم </span> <br />زمین را نجات دهیم. </h4>
        <p className="hero-description  jlnljnmnj" dir="rtl">
          ما تیم رئیس در تلاش هستیم تا به صورت هدفمند در راستای مسئولیت اجتماعی‌مان، ارزش گذاری اقتصادی و زیستن در زمینی پایدار در دهه‌های پیش رو به منابع مثبتی تبدیل شویم تا بتوانیم بیشتر   <span className="gfjgufs">از آنچه از سیاره زمین دریافت میکنیم به آن ببخشیم.</span>
        </p>
      </div>
      <div className="col-md-6 text-center">
        <img src="https://raeescoffee.com/wp-content/uploads/2024/08/hero.svg" alt="Earth Cleaning" className="img-fluid" />
      </div>
    </div>
  </div>
</section>
<img  src={image1}  className="image1111" />





    </div>
)



}


export default Sec1;