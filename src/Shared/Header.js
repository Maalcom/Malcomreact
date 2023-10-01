import React, { useEffect, useState } from "react";
import Foto from "../Imagenes/PAX-173957_APP-206850_ProfilePicture-1694752.png"
import { NavDropdown, Nav, Navbar, Button, Container, Row, Col } from "react-bootstrap";//importacion biblioteca react-bootstrap
import { NavLink } from "react-router-dom";//importacion de navLink para rutas
const Header = () => {
    return(
        <> 

<Navbar bg="dark" variant="dark" expand="md">
      <div className="container-fluid">
        <Navbar.Brand href="#">
          <i className="bi bi-bezier2"></i>
          <span className="text-warning">Malcom</span>
        </Navbar.Brand>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
        <Navbar.Collapse id="menu">
          <Nav className="me-auto">
          <NavLink to="/" className="nav-link-opacity nav-link">
            Inicio
          </NavLink>
          <NavLink to="/Galeria" className="nav-link-opacity2 nav-link">
            Galeria
          </NavLink>
          <NavLink to="/Formulario" className="nav-link-opacity2 nav-link">
            Formulario
          </NavLink>
            <NavDropdown title="Calculos" id="calculos-dropdown" className="nav-link-opacity2" >
              <NavDropdown.Item >
              <NavLink to="/Calculadora" className="black-text">
            Calculadora
          </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <NavLink to="/Formedad" className="black-text">
            Formulario Edad
          </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sobre mi" id="sobre-mi-dropdown" className="nav-link-opacity2">
              <NavDropdown.Item>
              <NavLink to="/Seccion1" className="black-text">
            Seccion1
          </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <NavLink to="/Seccion2" className="black-text">
            Seccion2
          </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <NavLink to="/Seccion3" className="black-text">
            Seccion3
          </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <hr className="d-md-none text-white-50" />
          <Nav className="flex-row flex-wrap text-light">
            <a
              href="https://instagram.com/br0wed_?igshid=NGVhN2U2NjQ0Yg=="
              className="nav-link p-3"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <i className="bi bi-instagram"></i>
              <small className="d-md-none ms-2">Instagram</small>
            </a>
            <a
              href="https://github.com/Maalcom/intento"
              className="nav-link p-3"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <i className="bi bi-github"></i>
              <small className="d-md-none ms-2">GitHub</small>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=56954119146&text="
              className="nav-link p-3"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <i className="bi bi-whatsapp"></i>
              <small className="d-md-none ms-2">WhatsApp</small>
            </a>
          </Nav>
          </Navbar.Collapse>
        </div>
      </div>
      </Navbar>

        </>

);
}

export default Header