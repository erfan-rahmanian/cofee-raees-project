import React from "react";
import "../Secs.css";


function Sec2(){

    return  (<div>





<div className="height-100  hvhvhvvhv" style={{backgroundColor: '#0E7037'}}>
  <div className="container d-flex justify-content-center align-items-center vh-100    ">
    <div className="card p-5 form-card mt-5 mb-5">
      <h2 className="text-center mb-4">فرم همکاری</h2>
      <p className="text-center">از علاقمندان به همکاری دعوت می شود اطلاعات خود را با کافه رئیس به اشتراک بگذارند.</p>
      <form>
        <div className="row aslkfsh">
          <div className="mb-4  col-md-6 ">
            <label htmlFor="name" className="form-label">نام</label>
            <input type="text" className="form-control" id="name" placeholder="نام " />
          </div>
          <div className="mb-4  col-md-6 ">
            <label htmlFor="name" className="form-label">نام‌خانوادگی  </label>
            <input type="text" className="form-control" id="name" placeholder="نام‌خانوادگی " />
          </div>
          
        </div>
        <div className="row aslkfsh">
          <div className="mb-4 col-md-6 ">
            <label htmlFor="phone" className="form-label">شماره تماس</label>
            <input type="text" className="form-control" id="phone" placeholder="09*********" />
          </div>

           <div className="mb-4 col-md-6">
            <label htmlFor="email" className="form-label">ایمیل</label>
            <input type="email" className="form-control" id="email" placeholder="me@example.com" />
          </div>
        </div>
        
        
        <div className="row aslkfsh">
          
        <div className="mb-4 col-md-6">
            <label htmlFor="email" className="form-label">رشته تخصصی</label>
            <input type="email" className="form-control" id="email" placeholder="رشته تخصصی..." />
          </div>

          <div className="mb-4 col-md-6">
            <label htmlFor="file2" className="form-label">تصویر ملک ۲</label>
            <input className="form-control" type="file" id="file2" />
          </div></div>
        <div className="row aslkfsh">
          <div className="col-md-6 mt-2">
            <button type="submit" className="btn btn-success  ">تایید و ارسال درخواست</button>
          </div>
        </div>
      </form>
    </div>   
  </div>
</div>



    </div>)





}

export default Sec2;