import { useState } from 'react';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
  <>
  <div>Navbar</div>
</>

  );
}

export default Navbar;
