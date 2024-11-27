import React from "react";
import "../Secs.css";


function Sec2(){

    return  (<div>





<div className="height-100  hvhvhvvhv" style={{backgroundColor: '#0E7037'}}>
  <div className="container d-flex justify-content-center align-items-center vh-100    ">
    <div className="card p-5 form-card mt-5 mb-5">
      <h2 className="text-center mb-4">فرم مشارکت</h2>
      <p className="text-center">کافه رئیس یک مجموعه خانوادگی است و اعطای نمایندگی دارد.اگر دارای ملک تجاری هستید می‌توانید با تکمیل فرم زیر با مجموعه مشارکت داشته باشید.</p>
      <form>
        <div className="row aslkfsh">
          <div className="mb-4  col-md-6 ">
            <label htmlFor="name" className="form-label">نام و نام‌خانوادگی</label>
            <input type="text" className="form-control" id="name" placeholder="نام و نام‌خانوادگی" />
          </div>
          <div className="mb-4 col-md-6 ">
            <label htmlFor="phone" className="form-label">شماره تماس</label>
            <input type="text" className="form-control" id="phone" placeholder="09*********" />
          </div>
        </div>
        <div className="row aslkfsh">
          <div className="mb-4  col-md-6 ">
            <label htmlFor="name" className="form-label">وضعیت ملک</label>
            <input type="text" className="form-control" id="name" placeholder="وضعیت ملک" />
          </div>
          <div className="mb-4 col-md-6 ">
            <label htmlFor="phone" className="form-label">نوع جواز</label>
            <input type="text" className="form-control" id="phone" placeholder="نوع جواز" />
          </div>
        </div>
        <div className="row aslkfsh">
          <div className="mb-4 col-md-6">
            <label htmlFor="email" className="form-label">ایمیل</label>
            <input type="email" className="form-control" id="email" placeholder="me@example.com" />
          </div>
          <div className="mb-4 col-md-6">
            <label htmlFor="ownership" className="form-label">نوع مالکیت</label>
            <select className="form-select" id="ownership">
              <option selected>... انتخاب کنید</option>
              <option value={1}>اجاره</option>
              <option value={2}>مالکیت</option>
            </select>
          </div>
        </div>
        <div className="row aslkfsh">
          <div className="mb-4 col-md-6">
            <label htmlFor="address" className="form-label">آدرس پستی</label>
            <input type="text" className="form-control" id="address" placeholder="تهران ..." />
          </div></div>
        <div className="mb-4">
          <label htmlFor="property-info" className="form-label">اطلاعات ملک</label>
          <textarea className="form-control" id="property-info" rows={3} placeholder="توضیحات اضافی..." defaultValue={""} />
        </div>
        <div className="row aslkfsh">
          <div className="mb-4 col-md-6">
            <label htmlFor="file1" className="form-label">تصویر ملک ۱</label>
            <input className="form-control" type="file" id="file1" />
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