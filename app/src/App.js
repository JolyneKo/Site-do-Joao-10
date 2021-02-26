import { useState } from 'react';
import Header from './Components/Header';
import Menu from './Components/Menu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(() => false);

  function openMenu() {
    setIsMenuOpen(prevValue => !prevValue);
  }

  return (
    <>
      <Header openMenu={openMenu}/>
      {isMenuOpen && <Menu/>}
    </>
  )
}

export default App;