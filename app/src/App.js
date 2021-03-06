import { useState } from 'react';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(() => false);

  function openMenu() {
    setIsMenuOpen(prevValue => !prevValue);
  }

  return (
    <>
      <Header openMenu={openMenu}/>
      {isMenuOpen && <Menu/>}
      <Main/>
      <Footer/>
    </>
  )
}

export default App;