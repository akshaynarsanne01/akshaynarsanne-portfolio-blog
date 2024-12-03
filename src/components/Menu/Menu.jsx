import { useState } from "react";

const menuClasses = {
  menuBar: 'fixed top-1/2 right-5 z-50 transform -translate-y-1/2 flex flex-row-reverse items-center transition-transform duration-300 ease-in-out',
  menuToggle: 'bg-gray-800 text-white py-2 px-5 rounded-full border-none hover:cursor-pointer',
  menuItem: 'sm:mr-5 cursor-pointer bg-transparent border-none rounded-md flex flex-row items-start absolute top-1/2 right-20 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-in-out transition-transform duration-300 ease-in-out',
  menuBtn: 'flex justify-center items-center sm:m-2 p-1 border bg-black text-white rounded-md sm:transition-bg sm:duration-300 sm:ease-in-out hover:cursor-pointer hover:bg-gray-800',
  activeMenuBar: 'transform translate-x-[-100px]',
  activeMenuItem: 'opacity-100 transform translate-x-0',
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`${menuClasses.menuBar} ${isOpen ? menuClasses.activeMenuBar : ''}`}>
        <button className={menuClasses.menuToggle} onClick={handleMenu}>
          {isOpen ? "Close" : "Menu"}
        </button>
        {isOpen && (
          <div className={`${menuClasses.menuItem} ${isOpen ? menuClasses.activeMenuItem : ''} animate-slideIn`}>
            <button className={menuClasses.menuBtn}>Home</button>
            <button className={menuClasses.menuBtn}>About</button>
            <button className={menuClasses.menuBtn}>Contact</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
