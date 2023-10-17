import React from 'react';
import { Link } from 'react-scroll';

function Header() {

  return (
    <header>
      <img src="your-image-url.jpg" alt="Amariee Cooper" className="profile-image" />
      <h1>Amariee Cooper</h1>
      <p>Portfolio Website</p>
      <nav>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;

