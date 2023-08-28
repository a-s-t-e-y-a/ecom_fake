import React from "react";
import { Star, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");
export const ProductOverviewTwo = () => {
  const location = useLocation();
  console.log(location);
  const receive = location.state;
  console.log(receive);
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src={receive.image}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h1 className="my-4 text-sm text-gray-500">{receive.category}</h1>
            <h1 className="my-4 text-3xl font-semibold text-black">
              {receive.title}
            </h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">
                  4 Reviews
                </span>
              </span>
            </div>
            <p className="leading-relaxed">{receive.description}</p>
            <div className="flex items-center justify-between">
              <span className="title-font text-xl font-bold text-gray-900">
                ₹{receive.price}
              </span>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => {
                  if (localStorage.getItem("cart") == null) {
                    var a = [];
                    receive["qty"] = 1;
                    a.push(receive);
                    localStorage.setItem("cart", JSON.stringify(a));
                  } else {
                    var b = JSON.parse(localStorage.getItem("cart"));
                    console.log(b);
                    var count = 0;
                    b.map((info) => {
                      if (info.id == receive.id) {
                        info.qty = info.qty + 1;
                        count = count + 1;
                      }
                    });
                    if (count != 0) {
                      console.log(b);
                      localStorage.setItem("cart", JSON.stringify(b));
                    } else {
                      receive["qty"] = 1;
                      b.push(receive);
                      localStorage.setItem("cart", JSON.stringify(b));
                    }
                  }
                  toast("Add to cart done successfully");
                }}
              >
                Add to Cart
              </button>
              <Toaster
                toastOptions={{
                  className: "",
                  style: {
                    border: "1px solid #713200",
                    padding: "16px",
                    color: "#713200",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
