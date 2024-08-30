import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-center gap-5 py-3 bg-cyan-200 items-center">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
    </div>
  );
}

export default Header;
