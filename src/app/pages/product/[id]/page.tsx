"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const params = useParams();
  const [product, setProduct] = useState<any>([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${params.id}`
        );
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [params]);
  return (
    <div>
      {loader && <h1>Loading...</h1>}
      <div className="bg-black text-white text-2xl w-fit px-5 rounded mt-2">
        {product.title}
      </div>
    </div>
  );
};

export default page;
