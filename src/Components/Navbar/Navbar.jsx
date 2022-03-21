import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        <button className="home"><Link to = "/">Home</Link></button>
        <button className="mystery"><Link to = "/mystery">Mystery</Link></button>
        <button className="technology"><Link to = "/technology">Technology</Link></button>
        <button className="mythology"><Link to = "/mythology">Mythology</Link></button>
        <button className="history"><Link to = "/history">History</Link></button>
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </div>
    </>
  );
};
