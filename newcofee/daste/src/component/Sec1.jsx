import React from "react";
import "../Sec1.css"


function Sec1(){
    return(
        <div className=" dfdfsdfs">






<div className="container mt-4 ">
  {/* Breadcrumb */}
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="#">خانه</a></li>
      <li className="breadcrumb-item"><a href="#"> &nbsp;/&nbsp; فروشگاه انلاین</a></li>
      <li className="breadcrumb-item active" aria-current="page">آکادمی</li>
    </ol>
  </nav>
  <div className="row">
    {/* Sidebar Filters */}
    <div className="col-md-3"> 
  <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        
      دسته‌بندی محصولات
                
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"></div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        
      دسته‌بندی محصولات
                
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"></div>
    </div>
  </div>
</div>

    </div>
    {/* Products Section */}
    <div className="col-md-7">
      <h4 className="category-title"><samp className="lokolo">دوره آکادمی</samp></h4>
      <div className="mb-3">
        <label htmlFor="sort" className="form-label  ">مرتب‌سازی پیش‌فرض</label>
        <select className="form-select ijihhij" id="sort">
          <option selected>مرتب‌سازی پیش‌فرض</option>
          <option value={1}>قیمت: کم به زیاد</option>
          <option value={2}>قیمت: زیاد به کم</option>
        </select>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="product-card">
            <img src="https://raeescoffee.com/wp-content/uploads/2024/07/Barista-and-brewing-768x768.jpg" alt="دوره باریستا" />
            <div className="product-card-body">
              <h5 className="product-title">دوره باریستا</h5>
              <p className="product-price">5,000,000 تومان</p>
              <button className="btn btn-outline-success add-to-cart-btn ngffgffg">افزودن به سبد خرید</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="product-card">
            <img src="https://raeescoffee.com/wp-content/uploads/2024/07/Brewing-and-devices-768x768.jpg" alt="دوره بروئینگ (دم آوری)" />
            <div className="product-card-body">
              <h5 className="product-title">دوره بروئینگ (دم آوری)</h5>
              <p className="product-price">5,000,000 تومان</p>
              <button className="btn btn-outline-success add-to-cart-btn ngffgffg">افزودن به سبد خرید</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="product-card">
            <img src="https://raeescoffee.com/wp-content/uploads/2024/07/coffee-academy-and-barista-768x768.jpg" alt="باریستا و بروئینگ" />
            <div className="product-card-body">
              <h5 className="product-title">باریستا و بروئینگ</h5>
              <p className="product-price">9,000,000 تومان</p>
              <button className="btn btn-outline-success add-to-cart-btn  ngffgffg">افزودن به سبد خرید</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>









        </div>
    )
}

export default Sec1;