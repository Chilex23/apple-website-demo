import Link from "next/link";
import { IoManSharp, IoWoman } from "react-icons/io5";
import { FaChild, FaGem } from "react-icons/fa";

function getIcon(name) {
  const icons = {
    "Men": <IoManSharp className="text-2xl" />,
    "Women": <IoWoman className="text-2xl" />,
    "Children": <FaChild className="text-2xl" />,
    "Jewelry": <FaGem className="text-2xl" />
  }

  return icons[name];
}

export default function SideBar({ categories }) {
  return (
    <div className="border-2 border-black mt-4 px-2 py-4 rounded-md col-span-full tablet:col-span-1">
      <div className="flex flex-col justify-between h-full">
        {categories.map(({ id, name }) => (
          <Link href={`/category/${id}`} key={id}>
            <a className="flex items-center gap-x-3 hover:bg-gray-300 py-3 px-1 rounded-md">
              {getIcon(id)}
              <span>{name}</span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
