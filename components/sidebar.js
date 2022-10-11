import Link from "next/link";

export default function SideBar({ categories }) {
  return (
    <div className="border-2 border-black mt-4 p-2 rounded-md col-span-full tablet:col-span-1">
      <div className="flex flex-col justify-between h-full">
        {categories.map(({ id, name }) => (
          <Link href={`/category/${id}`} key={id}>
            <a>{name}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}
