import React from "react";
import "../font.ttf"
function Sec3(){

    return (
        <div>


<div className="container mt-5">
  <ul className="nav nav-tabs" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
      <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">توضیحات</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="features-tab" data-bs-toggle="tab" data-bs-target="#features" type="button" role="tab" aria-controls="features" aria-selected="false">ویژگی‌ها</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">نظرات (0)</button>
    </li>
  </ul>
  <div className="tab-content" id="myTabContent">
    {/* توضیحات */}
    <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
      <p><strong>قهوه برزیل Brazil</strong></p>
      <p>قهوه برزیل ۲۵۰ گرمی. در طول ۱۵۰ سال گذشته، آب و هوای مطلوب برزیل باعث شده، این قهوه از کیفیت بالایی برخوردار باشد. عمداً دانه قهوه برزیل اسیدیته بالایی ندارد و احساسی از طعم فندق را تداعی می‌کند. قهوه برزیل رئیسی سینگل اورجین (Single Origin) و مدیوم رست (Medium Roast) است.</p>
      <p><a href="#">دانلود کاتالوگ قهوه</a></p>
    </div>
    {/* ویژگی‌ها */}
    <div className="tab-pane fade" id="features" role="tabpanel" aria-labelledby="features-tab">
      <p>ویژگی‌ها:</p>
      <ul>
        <li>منطقه کشت: برزیل</li>
        <li>نوع آسیاب: اسپرسو ساز خانگی، واکاکو، اسپرسو ساز صنعتی، دانه (بینز)</li>
        <li>دستگاه دم: فرنچ پرس، کمکس، وی ۶۰، ایروپرس</li>
        <li>وزن: ۲۵۰ گرم</li>
        <li>گوناگونی: رئیسی</li>
      </ul>
    </div>
    {/* نظرات */}
    <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
      <p>هنوز نظری برای این محصول ثبت نشده است.</p>
    </div>
  </div>
</div>


        </div>
    )



}

export default Sec3;
