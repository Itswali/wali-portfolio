import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', background: '#fff', zIndex: 1000 }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', padding: '1rem' }}>
        <li>
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
