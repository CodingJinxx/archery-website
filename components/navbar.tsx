import React from "react";
import EPages from "../lib/EPages";
import Image from "next/image";
import NavItem from "./navitem";
import style from "./Navbar.module.scss";

type Props = {
  currentPage: EPages;
};
  
const Navbar: React.FC<Props> = ({ currentPage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href={`${process.env.BACKEND_URL}/`}>
          <img src="Logo.svg" alt="Archery Logo"/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <NavItem href="/" isCurrent={ currentPage == EPages.HOME }>Home</NavItem>
          <NavItem href="/aboutus" isCurrent={ currentPage == EPages.ÜBERUNS } className="disabled">Über uns</NavItem>
          <NavItem href="/news" isCurrent={ currentPage == EPages.NEUIGKEITEN } className="disabled">Neuigkeiten</NavItem>
          <NavItem href="/offers" isCurrent={ currentPage == EPages.ANGEBOTE } className="disabled">Angebote</NavItem>
          <NavItem href="/gallery" isCurrent={ currentPage == EPages.GALERIE }>Gallerie</NavItem>
          <NavItem href="/shop" isCurrent={ currentPage == EPages.SHOP }>Shop</NavItem>
          <NavItem href="/contact" isCurrent={ currentPage == EPages.KONTAKT } className="disabled">Kontakt</NavItem>
        </ul>
      </div>
    </div>
  </nav>
   
  );
};

export default Navbar;
