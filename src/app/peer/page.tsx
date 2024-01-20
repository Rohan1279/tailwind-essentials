import Link from "next/link";
import React from "react";

const peer = () => {
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
      <div className="mb-10 bg-white p-5 rounded-md shadow-lg ">
        <form className="mb-5 first-form peer">
          <input
            type="email"
            name=""
            id=""
            className="outline-none border rounded peer"
          />
          <p className="text-xs text-red-500 invisible peer-invalid:visible ">
            please enter valid email
          </p>
        </form>
        <form className="peer-[.first-form]:peer-hover:border">
          <input
            type="email"
            name=""
            id=""
            className="outline-none border rounded peer"
            required
          />
          <p className="text-xs text-red-500 hidden  peer-required:block">
            this field is required.
          </p>
          <p className="text-xs text-red-500 hidden peer-invalid:block ">
            please enter valid email
          </p>
        </form>
      </div>
    </div>
  );
};

export default peer;
