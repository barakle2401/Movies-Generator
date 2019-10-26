/*
simple react-bootstrap nav bar 
*/

import React, { useState, useEffect } from "react";
import { Nav, Container } from "react-bootstrap";
import "./main_page.css";
function NavBar() {
  return (
    <div className="nav">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">All the movies</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">All the series</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Most papular</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
export default NavBar;
