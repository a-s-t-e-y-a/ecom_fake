import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
// const products = [
//   {
//     id: 1,
//     name: 'Nike Air Force 1 07 LV8',
//     imageSrc:
//       'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
//     href: '#',
//     price: '₹61,999',
//     color: 'Orange',
//     imageAlt: 'Nike Air Force 1 07 LV8',
//     quantity: 1,
//   },
//   {
//     id: 2,
//     name: 'Nike Run Division, Airmax Pro Ultra Mens Runnig Shoes',
//     imageSrc:
//       'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png',
//     href: '#',
//     price: '₹22,500',
//     color: 'White',
//     imageAlt: 'APPLE Airpods Pro with MagSafe Charging Case Bluetooth Headset',
//     quantity: 1,
//   },
// ]

function Cart() {
  const [products, setproducts] = useState([]);
  const [total , setTotal]= useState()
  const [day , setday]= useState()
  function sum_(){
    var sum__ =0
    products.map((info)=>{
      sum__ = sum__+info.price
      console.log(sum__)
    })
    setTotal(sum__)
  }
  useEffect(() => {
    setproducts(JSON.parse(localStorage.getItem("cart")));
    sum_()
  },[]);
  
  console.log(products)
  return products.length != 0 ? (
    <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
      <h2 className="text-3xl font-bold">Order Details</h2>
      <div className="mt-3 text-sm">
        Check the status of recent and old orders & discover more products
      </div>
      <div className="mt-8 flex flex-col overflow-hidden rounded-lg border border-gray-300 md:flex-row">
        <div className="w-full border-r border-gray-300 bg-gray-100 md:max-w-xs">
          <div className="p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
              {[
                ["Order ID", uuidv4().toString()],
                ["Total Amount", total],
                ["Order Status", "Confirmed"],
              ].map(([key, value]) => (
                <div key={key} className="mb-4">
                  <div className="text-sm font-semibold">{key}</div>
                  <div className="text-sm font-medium text-gray-700">
                    {value}
                  </div>
                </div>
              ))}
              <div className="mb-4">
                  <div className="text-sm font-semibold">DATE</div>
                  <div className="text-sm font-medium text-gray-700">
                    {new Date().toString()}
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="p-8">
            <ul className="-my-7 divide-y divide-gray-200">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                >
                  <div className="flex flex-1 items-stretch">
                    <div className="flex-shrink-0">
                      <img
                        className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                        src={product.image}
                        alt={product.image}
                      />
                    </div>

                    <div className="ml-5 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-bold text-gray-900">
                          {product.title}
                        </p>
                 
                      </div>

                      <p className="mt-4 text-sm font-medium text-gray-500">
                        x {product.qty}
                      </p>
                    </div>
                  </div>

                  <div className="ml-auto flex flex-col items-end justify-between">
                    <p className="text-right text-sm font-bold text-gray-900">
                      {product.price*product.qty}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <hr className="my-8 border-t border-t-gray-200" />
            <div className="space-x-4"></div>
          </div>
        </div>
      </div>
    </div>
  
  ) : (
    <div className="text-3xl text-center mt-12 text-red-400 font-semibold">No product in the cart!!!</div>
  );
}
export default Cart;
