import Image from "next/image";

export default function Hero() {
  return (
    <div className="mt-4 col-span-4">
      <Image priority src="/headshot.jpg" alt="hero" width={850} height={300} />
    </div>
  );
}
