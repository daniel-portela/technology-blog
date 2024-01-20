import { useEffect, useState } from "react";
import "../styles/Navbar.scss";

const Navbar = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 60) setScrolled(true);
    else setScrolled(false);
  }

  const showSideMenu = () => setSideMenuOpen(true);
  const hideSideMenu = () => setSideMenuOpen(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar flex items-center ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container w-full flex justify-between">
        <div className="brand-and-toggler flex items-center justify-between">
          <a href="#" className="nav-brand text-white">
          Technology Blog<span className="nav-brand-dot bg-white"></span>
          </a>
          <button type="button" className="nav-show-btn text-white" onClick={showSideMenu}>
            <i className="bi bi-list"></i>
          </button>
        </div>

        <div className={`nb-menu-wrapper flex items-center ${isSideMenuOpen ? "show" : ""}`}>
          <button type="button" className="nav-hide-btn" onClick={hideSideMenu}>
            <i className="bi bi-x-square"></i>
          </button>
          <ul className="nav-menu flex items-center">
            <li className="nav-item">
              <a href="#" className="nav-link">Início</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Tópicos
                <span className="nav-link-icon">
                  <i className="bi bi-chevron-down"></i>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Apresentação</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Sobre nós</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Contato</a>
            </li>
          </ul>
          <div className="nav-btns">
              <a href="#" className="nav-btn btn">Obtê-lo agora</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
