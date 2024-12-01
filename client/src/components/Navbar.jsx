import { useState } from 'react';
import { motion } from 'framer-motion';

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
