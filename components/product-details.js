import { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

export default function ProductDetails({ productData }) {
  function getDiscount(price) {
    let newPrice = 0.7 * price;
    return (price - newPrice).toFixed(2);
  }

  // The URL will be replaced with a live one
  function shareOnFacebook() {
    const navUrl = `https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/products/${productData.id}?referrer=akin`;
    window.open(navUrl, "_blank");
  }

  // The URL will be replaced with a live one
  function shareOnTwitter() {
    const navUrl = `https://twitter.com/intent/tweet?text=http://localhost:3000/products/${productData.id}?referrer=akin`;
    window.open(navUrl, "_blank");
  }

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <section className="mt-7 mx-8 tablet:mx-24">
        <div className="flex flex-col sm:flex-row gap-x-7 mb-20">
          <Image priority src={productData.imageUrl} width={250} height={300} />
          <div>
            <h1 className="font-medium text-2xl">{productData.name}</h1>
            <p className="mt-3">Variation available</p>
            <div className="flex flex-wrap gap-5">
              <span>
                <input type="checkbox" name="size" value="EU 39" /> EU 39
              </span>
              <span>
                <input type="checkbox" name="size" value="EU 40" />
                EU 40
              </span>
              <span>
                <input type="checkbox" name="size" value="EU 41" />
                EU 41
              </span>
              <span>
                <input type="checkbox" name="size" value="EU 42" />
                EU 42
              </span>
              <span>
                <input type="checkbox" name="size" value="EU 43" />
                EU 43
              </span>
            </div>

            <p className="mt-3">Colors available</p>
            <div className="flex flex-wrap gap-5 mt-2">
              <div>
                <input type="checkbox" name="color" value="red" />{" "}
                <span className="bg-red-700 text-white p-1 rounded-full ml-2">
                  Red
                </span>
              </div>
              <div>
                <input type="checkbox" name="size" value="EU 40" />
                <span className="bg-amber-700 text-white p-1 rounded-full ml-2">
                  Brown
                </span>
              </div>
              <div>
                <input type="checkbox" name="size" value="EU 41" />
                <span className="border-2 border-black bg-amber-100 p-1 rounded-full ml-2">
                  Beige
                </span>
              </div>
              <div>
                <input type="checkbox" name="size" value="EU 42" />
                <span className="border-2 border-black p-1 rounded-full ml-2">
                  White
                </span>
              </div>
              <div>
                <input type="checkbox" name="size" value="EU 43" />
                <span className="border-2 border-white text-white bg-black p-1 rounded-full ml-2">
                  Black
                </span>
              </div>
            </div>

            <p className="my-4">Price</p>
            <div className="flex">
              <button className="py-2 px-4 bg-stone-800 text-white rounded-md">
                Pay Normal Price - ${productData.price}
              </button>
              <button
                className="ml-3 py-2 px-4 bg-stone-800 text-white rounded-md"
                onClick={openModal}
              >
                Pay Discounted Price - ${getDiscount(productData.price)} (70%
                off)
              </button>
            </div>
          </div>
        </div>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <div className="flex justify-end">
          <MdCancel className="text-3xl cursor-pointer" onClick={closeModal} />
        </div>
        <div>
          <h1 className="font-bold uppercase text-4xl text-center">
            Discounted Price
          </h1>
          <p className="mt-4">
            To qualify for the dicounted price, you must do either of these:
          </p>
          <h2 className="mt-3 font-bold">
            1. Share a referral code to 10 persons.
          </h2>
          <p>Share On</p>
          <div className="flex gap-x-4 mt-2">
            <BsFacebook
              className="text-4xl cursor-pointer text-blue-700"
              onClick={shareOnFacebook}
            />
            <AiOutlineTwitter
              className="text-4xl cursor-pointer text-blue-400"
              onClick={shareOnTwitter}
            />
          </div>
          <h3>Active Referral Links</h3>
          <p>1ERSFGu789 - 3 refers</p>

          <h2 className="my-3 font-bold">2. Join a Buying group.</h2>
          <p>Available Buying groups</p>
          <div className="flex gap-x-3 mt-3 p-2 rounded-md items-center border-2 border-black w-fit">
            <p>Thrifty Buyers</p>
            <button className="py-1 px-2 text-white bg-orange-600 rounded-md">
              Join
            </button>
          </div>
          <div className="flex gap-x-3 mt-3 p-2 rounded-md items-center border-2 border-black w-fit">
            <p>Encore Spenders</p>
            <button className="py-1 px-2 text-white bg-orange-600 rounded-md">
              Join
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
