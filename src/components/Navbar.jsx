'use client'
import logoSecurity from "../assets/images/png/security-logo.png";
import search from "../assets/images/svg/search-icon.svg";
import bell from "../assets/images/svg/bell-icon.svg";
import Image from "next/image";
import PrimamryButton from "./ui/PrimamryButton";
import { useState } from "react";
const Navbar = () => {
  const [isMainOpen, setMainOpen] = useState(false);
  // const [isReclaimOpen, setReclaimOpen] = useState(false);
  return (
    <div className="container max-w-[1260px] px-6 mx-auto h-[120px]">
      <div className="items-center h-full justify-between flex">
        <a href="/">
          <Image
            src={logoSecurity}
            alt="logo"
            className="min-w-[204px]"
            width={204}
            height={41}
          />
        </a>
        <div className="flex gap-20 items-center">
          <form className="flex gap-1">
            <input
              required
              type="search"
              className="w-full min-w-[462px] rounded-[160px] ps-3 font-normal font-inter border-grey text-grey border-1 text-base"
              placeholder="search"
            />
            <button type="submit" disabled className="rounded-full">
              <Image
                src={search}
                alt="search icon"
                className="cursor-pointer"
                width={48}
                height={48}
              />
            </button>
          </form>
          <div className="flex gap-4">
            <Image
              src={bell}
              width={54}
              height={54}
              alt="bell icon"
              className="cursor-pointer"
            />
            <PrimamryButton
              onClick={() => setMainOpen(true)}
              className="bg-black text-white hover:inset-shadow-main duration-300 hover:text-black cursor-pointer"
              children="Request access"
            />
            {isMainOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-40">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Add New Work</h2>
                    <button
                      onClick={() => setMainOpen(false)}
                      className="text-gray-500 hover:text-black text-xl"
                    >
                      &times;
                    </button>
                  </div>

                  <form className="space-y-4">
                    <div>
                      <label className="block mb-1 font-medium">
                        Select Resource:
                      </label>
                      <select
                        name="resource"
                        className="w-full border rounded px-3 py-2"
                        required
                      >
                        <option value="">-- Select Resource --</option>
                        <input type='checkbox' className="checkbox:rounded-full" /><option value="res1">Security Whitepapers</option>
                        <option value="res2">Architecture Diagrams</option>
                        <option value="res3">Architecture Diagrams</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-1 font-medium">Title:</label>
                      <input
                        type="text"
                        name="title"
                        className="w-full border rounded px-3 py-2"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-1 font-medium">
                        Description:
                      </label>
                      <textarea
                        name="description"
                        className="w-full border rounded px-3 py-2"
                        rows={3}
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
