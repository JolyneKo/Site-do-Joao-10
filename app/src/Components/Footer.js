import { FaFacebook } from 'react-icons/fa';
import { AiOutlineGithub, AiFillTwitterCircle } from 'react-icons/ai';
import '../SCSS/footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="icons">
        <a href="https://facebook.com">
          <FaFacebook className="icon facebook"/>
        </a>
        <a href="https://github.com/JolyneKo/Site-do-Joao-10">
          <AiOutlineGithub className="icon github"/>
        </a>
        <a href="https://twitter.com">
          <AiFillTwitterCircle className="icon twitter"/>
        </a>
      </div>

      <ul className="links">
        <li className="link"><a href="/">Terms</a></li>
        <li className="link"><a href="/">About Us</a></li>
        <li className="link"><a href="/">FAQ</a></li>
      </ul>

      <p className="copyright">&copy; Site do João 10 - 2021</p>
    </footer>
  )
}

export default Footer;