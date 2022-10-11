import { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineGift } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

export default function NavBar() {
  const [navBarWidth, setNavBarWidth] = useState(0);
  const [sideBarHidden, setSideBarHidden] = useState(true);

  const toggleSideBarHidden = () => {
    setSideBarHidden(!sideBarHidden);
  };

  useEffect(() => {
    function handleResize() {
      setNavBarWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  /* set the initial nav bar width of initial mount of the component in the client-side,
   since the window object is only available in the client-side
  */
  useEffect(() => {
    setNavBarWidth(window.innerWidth);
  }, []);

  return (
    <>
      {navBarWidth < 700 ? (
        <div onClick={toggleSideBarHidden} className="shadow-lg cursor-pointer">
          {sideBarHidden ? (
            <div className="flex justify-between px-4">
              <GiHamburgerMenu className="text-4xl" />
              <AiOutlineShoppingCart className="text-3xl" />
            </div>
          ) : (
            <div className="flex justify-between px-4">
              <IoCloseSharp className="text-4xl" />
              <AiOutlineShoppingCart className="text-3xl" />
            </div>
          )}
        </div>
      ) : (
        <div className="shadow-lg px-6 pb-6">
          <nav className="flex justify-between items-center">
            <Link href="/">
              <a className="flex item-center gap-x-4">
                <AiOutlineGift className="text-4xl" />
                <span>Apple Website</span>
              </a>
            </Link>
            <div className="flex gap-x-6">
              <input
                type="text"
                className="border-2 border-black h-10 w-[19rem] p-3 rounded-md"
                placeholder="...Search Products"
              />
              <button className="bg-stone-800 py-2 px-4 text-white rounded-md">
                Search
              </button>
            </div>
            <RiAccountCircleLine className="text-3xl" />
            <AiOutlineShoppingCart className="text-3xl" />
          </nav>
        </div>
      )}
    </>
  );
}
