import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({showLoginHandler, showRegisterHandler}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-xl font-bold text-gray-800">Vendor Dashboard</span>
        {/* <span className="text-xl font-bold text-gray-800">Firm Name: <span id="firmNameDisplay">omkar</span></span> */}
        
        <div className="hidden md:flex space-x-6">
          <button onClick={showLoginHandler} className="px-4 py-2 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md">Login</button>
          <button onClick={showRegisterHandler} className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md">Register</button>
        </div>

        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 p-4 bg-gray-100 rounded-md">
          <button onClick={showLoginHandler} className="block w-full text-left text-gray-700 hover:text-gray-900">Login</button>
          <button onClick={showRegisterHandler} className="block w-full text-left text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-md">Register</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
