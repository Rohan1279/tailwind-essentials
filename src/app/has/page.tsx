import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center  p-24 ">
      <div className="flex justify-between w-1/3 mb-28">
        <Link href={"/group"} className="bg-white px-4 py-2 rounded shadow-lg">
          Group
        </Link>
        <Link href={"/peer"} className="bg-white px-4 py-2 rounded shadow-lg">
          Peer
        </Link>
        <Link href={"/has"} className="bg-white px-4 py-2 rounded shadow-lg">
          Has
        </Link>
      </div>
      <div className="flex justify-between space-x-56">
        <div className="mb-10 bg-white p-5 w-56 rounded-md shadow-lg group h-fit">
          <label
            htmlFor="item-1"
            className="flex has-[:checked]:bg-violet-400 border gap-x-3 p-3 rounded-md cursor-pointer shadow-lg mb-3 item-1 "
          >
            <input type="radio" id="item-1" className="invisible" />
            <span>Item 1</span>
          </label>
          <label
            htmlFor="item-2"
            className="flex has-[:checked]:bg-violet-400 border gap-x-3 p-3 rounded-md cursor-pointer shadow-lg mb-3 item-2    "
          >
            <input type="radio" id="item-2" className="invisible" />
            <span>Item 2</span>
          </label>
          <label
            htmlFor="item-3"
            className="flex has-[:checked]:bg-violet-400 border gap-x-3 p-3 rounded-md cursor-pointer shadow-lg item-3  "
          >
            <input type="radio" id="item-3" className="invisible" />
            <span>Item 3</span>
          </label>
        </div>
        <div className="grid grid-cols-3 border p-5 image-gallery ">
          <Image
            alt=""
            width={200}
            height={200}
            src={"https://picsum.photos/800/800"}
            className=" transition-all   "
          />
          <Image
            alt=""
            width={200}
            height={200}
            src={"https://picsum.photos/800/800"}
            className=" transition-all    "
          />
          <Image
            alt=""
            width={200}
            height={200}
            src={"https://picsum.photos/800/800"}
            className=" transition-all    "
          />
          <Image
            alt=""
            width={200}
            height={200}
            src={"https://picsum.photos/800/800"}
            className=" transition-all    "
          />
          <Image
            alt=""
            width={200}
            height={200}
            src={"https://picsum.photos/800/800"}
            className=" transition-all    "
          />
          <Image
            alt=""
            width={200}
            height={200}
            src={"https://picsum.photos/800/800"}
            className=" transition-all    "
          />
          <Image
            alt=""
            width={200}
            height={200}
            src={"https://picsum.photos/800/800"}
            className=" transition-all    "
          />
          <Image
            alt=""
            width={200}
            height={200}
            src={"https://picsum.photos/800/800"}
            className=" transition-all    "
          />
          <Image
            alt=""
            width={200}
            height={200}
            src={"https://picsum.photos/800/800"}
            className=" transition-all    "
          />
        </div>
      </div>
    </div>
  );
};

export default page;
