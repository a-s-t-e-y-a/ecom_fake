import React from "react";

export function ProductTwo({data,image , title,description,price}) {
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {data.map((info) => (
      <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
        <img
          src={info.image}
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{info.title}</h1>
          <p className="truncate mt-2 text-sm text-gray-300">
            {info.description}
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
           {info.price}
          </button>
        </div>
      </div>
       ))}
    </div>
  );
}
