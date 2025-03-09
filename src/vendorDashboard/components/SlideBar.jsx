import { useState } from "react";
import { Menu, X, PlusCircle, Package, Users, LogOut } from "lucide-react";

const slideBar = ({showAddFirmHandler, showAddProductHandler, showAllProductsHandler}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex mt-2 h-[88vh]">
      {/* slideBar */}
      <div className={`bg-white text-gray-800 w-64 p-5 space-y-6 transition-all duration-300 ${isOpen ? "block" : "hidden"} md:block`}>
        {/* <h2 className="text-2xl font-bold">Vendor Dashboard</h2> */}
        <nav className="mt-6 space-y-4">
          <a href="#" className="flex items-center space-x-2 hover:text-gray-600">
            <PlusCircle size={20} />
            <span onClick={showAddFirmHandler}>Add Firm</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-gray-600">
            <PlusCircle size={20} />
            <span onClick={showAddProductHandler}>Add Product</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-gray-600">
            <Package size={20} />
            <span onClick={showAllProductsHandler}>All Products</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-gray-600">
            <Users size={20} />
            <span>User Details</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-red-500 hover:text-red-400">
            <LogOut size={20} />
            <span>Logout</span>
          </a>
        </nav>
      </div>
      
      {/* Sidebar Toggle Button */}
      <button 
        className="md:hidden p-3 text-gray-800" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
};

export default slideBar;
