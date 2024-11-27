import React from 'react';
import { Breadcrumb, Button, Card, Row, Col, Image } from 'react-bootstrap';

const ProductPage = () => {
  return (
    <div className="container mt-4">
      {/* Breadcrumb Navigation */}
      <Breadcrumb>
        <Breadcrumb.Item href="#">خانه</Breadcrumb.Item>
        <Breadcrumb.Item href="#">فروشگاه آنلاین</Breadcrumb.Item>
        <Breadcrumb.Item href="#">قهوه</Breadcrumb.Item>
        <Breadcrumb.Item href="#">قهوه ترک</Breadcrumb.Item>
        <Breadcrumb.Item active>قهوه ترک</Breadcrumb.Item>
      </Breadcrumb>

      {/* Main Product Section */}
      <Row className="mt-4">
        {/* Product Image Section */}
        <Col md={6}>
          <Image
            src="https://via.placeholder.com/350"
            alt="Product"
            fluid
          />
          {/* Thumbnails */}
          <div className="mt-3 d-flex">
            <Image
              src="https://via.placeholder.com/50"
              alt="Thumbnail 1"
              className="img-thumbnail me-2"
            />
            <Image
              src="https://via.placeholder.com/50"
              alt="Thumbnail 2"
              className="img-thumbnail me-2"
            />
            {/* Add more thumbnails as needed */}
          </div>
        </Col>

        {/* Product Details Section */}
        <Col md={6}>
          <h2>قهوه ترک</h2>
          <p>کد کالا: 1600</p>

          {/* Features List */}
          <ul>
            <li>منطقه کشت: برزیل</li>
            <li>وزن: 250 گرم</li>
            <li>نوع دانه: Arabica 100%</li>
            <li>گونه‌گون: رئیس</li>
          </ul>

          {/* Price and Add to Cart */}
          <h3 className="text-success">۳۶۹,۰۰۰ تومان</h3>
          <Button variant="success" className="mt-3">
            افزودن به سبد خرید
          </Button>

          {/* Shipping Info */}
          <Card className="mt-4">
            <Card.Body>
              <p>تحویل روز در تهران در صورت ثبت سفارش تا ساعت 16</p>
              <p>تحویل شهرستان 2 تا 3 روز کاری</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductPage;
