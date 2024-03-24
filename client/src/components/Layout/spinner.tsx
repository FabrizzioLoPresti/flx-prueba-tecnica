/**
 * The Spinner component is a React functional component that renders a CSS spinner with multiple cubes
 * rotating in a grid pattern.
 * @returns The Spinner component is being returned. It is a functional component that renders a
 * spinning cube grid spinner with multiple cube elements styled using CSS classes.
 */

const Spinner = () => {
  return (
    <div className="sk-cube-grid spinner-center">
      <div className="sk-cube sk-cube1"></div>
      <div className="sk-cube sk-cube2"></div>
      <div className="sk-cube sk-cube3"></div>
      <div className="sk-cube sk-cube4"></div>
      <div className="sk-cube sk-cube5"></div>
      <div className="sk-cube sk-cube6"></div>
      <div className="sk-cube sk-cube7"></div>
      <div className="sk-cube sk-cube8"></div>
      <div className="sk-cube sk-cube9"></div>
    </div>
  );
};

export default Spinner;
