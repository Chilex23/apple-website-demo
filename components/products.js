import Image from "next/image";
import Link from "next/link";

export default function Products({ title, products }) {
  return (
    <section className="mx-10 my-10 border-2 border-black rounded-md p-2">
      <h1 className="font-bold text-3xl my-4">{title}</h1>
      <div className="flex gap-x-5 justify-between">
        {products.map(({ id, name, imageUrl, price }) => {
          return (
            <div key={id}>
              <Image priority src={imageUrl} width={200} height={200} />
              <p>{name}</p>
              <button className="py-2 px-4 bg-orange-600 text-white rounded-md mt-2">
                Add to Cart
              </button>
              <Link href={`/products/${id}`}>
                <a>View Item</a>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
