/**
 * The Navbar component is a functional component in TypeScript React that renders a navigation bar
 * with a logo image.
 * @returns A functional component named Navbar is being returned. It consists of a nav element with a
 * className of "navbar" and an img element with src pointing to "./logo.webp" and alt text "Flexxus
 * Logo".
 */

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="./logo.webp" alt="Flexxus Logo" />
    </nav>
  );
};

export default Navbar;
