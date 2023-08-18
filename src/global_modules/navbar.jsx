"use client";

import React from "react";
import { ShoppingBag, Search } from "lucide-react";
import {Link} from 'react-router-dom'

export default function ExampleNavbarThree() {
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-12 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span className=" text-5xl">
            Spot<br></br> Light
          </span>
        </div>
        <div className="flex gap-4">
          <div className="hiddenspace-x-2 lg:block">
            <Link to="cart">
              <ShoppingBag color="black" size={35} />
            </Link>
          </div>
          <div className="hiddenspace-x-2 lg:block">
            <Search color="black" size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}
