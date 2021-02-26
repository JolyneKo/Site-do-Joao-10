import logo from '../Images/logo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import '../SCSS/navbar.scss';

function Header({ openMenu }) {
  return (
    <header className="navbar">
      <img src={logo} alt="logo" className="navbar_logo"/>

      <ul className="navbar_links">
        <li className="link">
          <a href="#.">Home</a>
        </li>
        <li className="link">
          <a href="#.">News</a>
        </li>
        <li className="link">
          <a href="#.">Terms</a>
        </li>
        <li className="link">
          <a href="#.">About Us</a>
        </li>
        <li className="link">
          <a href="#.">Contact</a>
        </li>
      </ul> 

      <form action="https://google.com/search" method="get" className="navbar_search_box">
        <input type="search" name="q" className="search_bar" placeholder="Pesquisar no google"/>
        <button className="btn_search">
          <AiOutlineSearch/>
        </button>
      </form>

      <div className="nav_menu_icon" onClick={openMenu}>
        <div className="linha"></div>
      </div>
    </header>
  )
}

export default Header;