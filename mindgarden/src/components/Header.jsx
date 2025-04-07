import { Link } from "react-router-dom";

function Header() {
  return (
  
 <nav className="bg-green-500 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-white text-2xl font-bold">
        MindGarden
      </Link>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:text-green-200">
          Home
        </Link>
        <Link to="/journal" className="text-white hover:text-green-200">
          Journal
        </Link>
        <Link to="/garden" className="text-white hover:text-green-200">
          Garden
        </Link>
      </div>
    </div>
  </nav>
  );
}   

export default Header;