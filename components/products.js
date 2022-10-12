import Image from "next/image";
import Link from "next/link";

export default function Products({ title, products }) {
  return (
    <section className="sm2:mx-5 mx-10 my-10 border-2 border-black rounded-md p-2 pb-8">
      <h1 className="font-bold text-3xl my-4 text-center">{title}</h1>
      <div className="flex flex-wrap items-center gap-5 justify-center">
        {products.map(({ id, name, imageUrl, price }) => {
          return (
            <div key={id}>
              <Image priority src={imageUrl} width={200} height={200} />
              <p>{name}</p>
              <Link href={`/products/${id}`}>
                <a>
                  <button className="py-2 px-4 bg-stone-800 text-white rounded-md mt-2">
                    View Item
                  </button>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
