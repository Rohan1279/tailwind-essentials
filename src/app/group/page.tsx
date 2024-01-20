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
      <div className="bg-white p-5 mb-10 rounded-md shadow-lg group hover:bg-violet-400 cursor-pointer">
        <h1 className="text-lg font-semibold group-hover:text-white transition-all ">
          New project
        </h1>
        <p className="group-hover:text-white transition-all">
          Create a new project from a variety of starting templates.
        </p>
      </div>
      <div className="mb-10">
        <ul>
          <li className="my-5 bg-white cursor-pointer rounded-md shadow-md p-5 w-96 group/parent hover:bg-slate-200">
            <h1 className="text-lg font-semibold">Lorem.</h1>
            <div className="flex justify-between items-center">
              <p className="text-slate-500">Lorem ipsum dolor sit.</p>
              <span className="invisible group-hover/parent:visible group/children hover:bg-slate-300 rounded-full px-2 cursor-pointer">
                Call{" "}
                <span className="group-hover/children:ml-1 transition-all">
                  ⏭️
                </span>{" "}
              </span>
            </div>
          </li>
          <li className="my-5 bg-white cursor-pointer rounded-md shadow-md p-5 w-96 group/parent hover:bg-slate-200">
            <h1 className="text-lg font-semibold">Lorem.</h1>
            <div className="flex justify-between items-center">
              <p className="text-slate-500">Lorem ipsum dolor sit.</p>
              <span className="invisible group-hover/parent:visible group/children hover:bg-slate-300 rounded-full px-2 cursor-pointer">
                Call{" "}
                <span className="group-hover/children:ml-1 transition-all">
                  ⏭️
                </span>{" "}
              </span>
            </div>
          </li>
          <li className="my-5 bg-white cursor-pointer rounded-md shadow-md p-5 w-96 group/parent hover:bg-slate-200">
            <h1 className="text-lg font-semibold">Lorem.</h1>
            <div className="flex justify-between items-center">
              <p className="text-slate-500">Lorem ipsum dolor sit.</p>
              <span className="invisible group-hover/parent:visible group/children hover:bg-slate-300 rounded-full px-2 cursor-pointer">
                Call{" "}
                <span className="group-hover/children:ml-1 transition-all">
                  ⏭️
                </span>{" "}
              </span>
            </div>
          </li>
          <li className="my-5 bg-white cursor-pointer rounded-md shadow-md p-5 w-96 group/parent hover:bg-slate-200">
            <h1 className="text-lg font-semibold">Lorem.</h1>
            <div className="flex justify-between items-center">
              <p className="text-slate-500">Lorem ipsum dolor sit.</p>
              <span className="invisible group-hover/parent:visible group/children hover:bg-slate-300 rounded-full px-2 cursor-pointer">
                Call{" "}
                <span className="group-hover/children:ml-1 transition-all">
                  ⏭️
                </span>{" "}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
