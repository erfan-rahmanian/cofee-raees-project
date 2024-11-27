import React from "react";
import { Navbar, Nav, Container, Button, InputGroup, FormControl } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <div>
      <header className="bg-white shadow-sm border-bottom fixed-header">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div className="login text-secondary">ورود | ثبت‌ نام</div>
            <div className="support-number text-white bg-success px-3 py-2">
              شماره پشتیبانی: ۰۲۱۸۸۶۶۱۳۹۳
            </div>
          </div>
        </Container>

        <div style={{ backgroundColor: "#F6F6F6" }}>
          <Navbar bg="light" expand="lg" className="pt-2 justify-content-center">
            <Nav className="nav nav-pills d-flex justify-content-center">
              <Nav.Link href="#" className="text-dark">صفحه اصلی</Nav.Link>
              <Nav.Link href="#" className="text-dark">فروشگاه آنلاین</Nav.Link>
              <Nav.Link href="#" className="text-dark">کافه ریبیس</Nav.Link>
              <Nav.Link href="#" className="text-dark">آکادمی ریبیس</Nav.Link>
              <Nav.Link href="#" className="text-dark">رسانه ریبیس</Nav.Link>
              <Nav.Link href="#" className="text-dark">درباره ما</Nav.Link>
            </Nav>
          </Navbar>

          <div className="d-flex justify-content-between align-items-center pb-3" style={{ marginLeft: 100, marginRight: 100 }}>
            <Button variant="success" className="rounded-pill px-4 ms-3 cart-button">
              <i className="bi bi-cart3"></i> <span className="sabad">سبد خرید</span>
            </Button>

            <Button variant="success" className="btnin">0</Button>

            <InputGroup className="rounded-pill search-container" style={{ maxWidth: 700, marginRight: 170 }}>
              <FormControl
                placeholder="جستجو..."
                aria-label="Search"
                className="border-start-0 search-input"
              />
              <Button variant="success" className="btnser">
                <i className="bi bi-search sssvg"></i>
              </Button>
            </InputGroup>

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

export default CustomNavbar;
