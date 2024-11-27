import React from "react";
import "../index.css"
import "../font.ttf"


function Footer(){
    return (
        <div>


<footer className="footer">
  <div className="container">
    <div className="row">
      {/* ستون اطلاعات تماس */}
      <div className="col footer-col text-center">
        <h5>اطلاعات تماس</h5>
        <p className="pppp"> <span className="text-success">   زمان پاسخگویی   </span>   <br />شنبه تا چهارشنبه ۹ تا ۱۶ (به جز ایام تعطیل)</p>
       <p className="pppp"> <span  className="text-success">  ایمیل </span> <br />  info@raeescoffee.com</p>
        <p className="pppp"> <span className="text-success">  تلفن  </span> <br /> ۰۲۱۸۸۹۶۱۷۳</p>
       
        <div className="social-icons">
          <a href="#"><i className="fab fa-linkedin" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
          <a href="#"><i className="fab fa-facebook" /></a>
        </div>
      </div>
      {/* ستون میانی با لوگوها */}
      <div className="col footer-col text-center footer-logos">
        <img src="https://raeescoffee.com/wp-content/uploads/2024/05/raees-logo-black.png" alt="Logo 1" />
        <img src="https://raeescoffee.com/wp-content/uploads/2024/05/seen.png" alt="Logo 2" />
        <img src="https://raeescoffee.com/wp-content/uploads/2024/05/raees-group-logo.png" alt="Logo 3" />
      </div>
      {/* ستون پیوندها */}
      <div className="col footer-col text-center">
        <h5>پیوندها</h5>
        <a href="#" className="text-success">حریم خصوصی</a><br />
        <br />
        <a href="#" className="text-success">پرسش‌های متداول</a>
      </div>
    </div>
    <div className="footer-bottom">
      تمامی حقوق محفوظ است © 2024. طراحی سایت توسط   erfan-hissss83 
    </div>
  </div>
</footer>


          
        </div>
    )
}

export default Footer;