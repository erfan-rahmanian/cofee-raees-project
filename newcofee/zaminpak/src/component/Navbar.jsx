import React from "react";
import "../font.ttf"



function    Navbar(){
   
    return (
      <div>
        <header className="bg-white shadow-sm border-bottom fixed-header">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center ">
              <div className="login text-secondary">ورود | ثبت‌ نام</div>
              <div className="support-number text-white bg-success px-3 py-2">
                شماره پشتیبانی: ۰۲۱۸۸۶۶۱۳۹۳
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "#F6F6F6" }}>
            <nav className="nav nav-pills d-flex justify-content-center flex-grow-1 order-2 order-lg-1 pt-2">
            <a className="nav-link " href="#">
                صفحه اصلی
              </a>
              <a className="nav-link " href="#">
                فروشگاه آنلاین
              </a>
              <a className="nav-link " href="#">
                کافه رییس
              </a>
              <a className="nav-link " href="#">
                آکادمی رییس
              </a>
              <a className="nav-link " href="#">
                رسانه رییس
              </a>
              <a className="nav-link " href="#">
                درباره ما
              </a>
            </nav>
            <div
              className="d-flex justify-content-between align-items-center  pb-3"
              style={{ marginLeft: 100, marginRight: 100 }}
            >
              <button className="btn btn-success rounded-pill px-4 ms-3 cart-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
               <span className="sabad">  سبد خرید </span> 
       
           
       
              </button>
                <button className="btn btn-success btnin">0</button>

              <div
                className="input-group rounded-pill search-container"
                style={{ maxWidth: 700, marginRight: 170 }}
              >
               
                <input
                  type="text"
                  className="form-control rounded-pill border-start-0 search-input"
                  placeholder="جستجو..."
                />
              </div>



              <button
                  className="btn btn-success  btnser "
                  type="button"
                >
                
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search sssvg "
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </button>



                




              <div className="logo-section flex-grow-1 flex-lg-shrink-0">
                <img
                  src="https://raeescoffee.com/wp-content/uploads/2024/07/logo.png"
                  alt="Logo"
                  className="img-fluid logo-img"
                />
              </div>
            </div>
          </div>
        </header>
      </div>
    );
}

export default Navbar;