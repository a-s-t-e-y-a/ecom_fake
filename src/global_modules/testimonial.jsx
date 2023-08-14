import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";

export function TestimonialTwo() {
  return (
    <section className="px-2 py-10 md:px-0 ">
      <div className="mx-auto max-w-2xl flex items-center text-center">
        <div>
          {" "}
          <img
            src="https://theme-spotlight-demo.myshopify.com/cdn/shop/files/logo-small.png?v=1677089352&width=1100"
            className="h-18 w-12 mx-auto"
          ></img>
          <h1 className="mb-4 text-xl text-gray-700 text-black">
          A brand that strives to inspire and push creative culture forward.
          </h1>
          <blockquote className="mt-10 text-lg text-gray-500">
            <p>
            We approach our work with the mentality that every product made is a learning experience to improve our craft. We are practitioners and purveyors of creative culture and are inspired by its various forms from art, design, fashion, music, film, food, and more.
            </p>
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-x-6">
            <div className="isolate flex items-center mx-auto space-x-8">
             <Instagram/>
             <Twitter/>
             <Facebook/>
             <Youtube/>
            </div>
          </figcaption>
        </div>
      </div>
    </section>
  );
}
