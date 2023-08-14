import { useEffect, useState } from "react";
import { ProductTwo } from "../components/cards";
import { FooterThree } from "../global_modules/footer";
import ExampleNavbarTwo from "../global_modules/navbar";
import { TestimonialTwo } from "../global_modules/testimonial";
import userEvent from "@testing-library/user-event";
import axios from "axios";

export default function Landing() {
  const [data, setData] = useState([]);
  useEffect(() => {
    FetchData();
  }, []);
  function FetchData() {
    axios.get("https://fakestoreapi.com/products").then(function (response) {
      // handle success
      setData(response.data);
    });
  }
  return (
    <>
      <ExampleNavbarTwo /> 
     <ProductTwo data={data}/>
      <TestimonialTwo />
    </>
  );
}
