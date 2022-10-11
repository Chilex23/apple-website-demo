import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineGift } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import Link from "next/link";

export default function NavBar() {
  return (
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
            className="border-2 border-black h-10 w-16 p-3 rounded-md"
          />
          <button className="bg-orange-600 py-2 px-4 text-white rounded-md">
            Search
          </button>
        </div>
        <RiAccountCircleLine className="text-3xl" />
        <AiOutlineShoppingCart className="text-3xl" />
      </nav>
    </div>
  );
}
