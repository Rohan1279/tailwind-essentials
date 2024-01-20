"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [currentItem, setCurrentItem] = useState("");
  console.log(currentItem);
  return (
    <main className="flex min-h-screen flex-col items-center  p-24 ">
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
      <div className="mb-10 bg-white p-5 w-56 rounded-md shadow-lg group">
        <input
          type="radio"
          id="item-1"
          className="invisible peer/item-1"
          name="items"
          value="item-1"
        />
        <label
          onClick={() => setCurrentItem("item-1")}
          htmlFor="item-1"
          className="flex peer-checked/item-1:bg-violet-400  border gap-x-3 p-3 rounded-md cursor-pointer shadow-lg mb-3  "
        >
          <span>Item 1</span>
        </label>
        <input
          type="radio"
          id="item-2"
          className="invisible peer/item-2"
          name="items"
          value="item-2"
        />
        <label
          onClick={() => setCurrentItem("item-2")}
          htmlFor="item-2"
          className="flex peer-checked/item-2:bg-violet-400   border gap-x-3 p-3 rounded-md cursor-pointer shadow-lg mb-3    "
        >
          <span>Item 2</span>
        </label>
        <input
          type="radio"
          id="item-3"
          className="invisible peer/item-3"
          name="items"
          value="item-3"
        />
        <label
          onClick={() => setCurrentItem("item-3")}
          htmlFor="item-3"
          className="flex peer-checked/item-3:bg-violet-400  border gap-x-3 p-3 rounded-md cursor-pointer shadow-lg  "
        >
          <span>Item 3</span>
        </label>
      </div>
    </main>
  );
}
