import '../SCSS/menu.scss';

function Menu() {
  return (
    <div className="menu">
      <h2 className="menu_header">Menu</h2>

      <ul className="menu_links">
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
    </div>
  )
}

export default Menu;