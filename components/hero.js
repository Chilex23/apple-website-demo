import Image from "next/image";

export default function Hero() {
  return (
    <div className="mt-4 col-span-full tablet:col-span-4 ">
      <Image priority src="https://i.ibb.co/w4k6Ws9/nike-funky.png" alt="hero" width={850} height={400} />
    </div>
  );
}
