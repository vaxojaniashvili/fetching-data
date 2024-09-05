"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, []);

  const handleNavigate = (id: number) => {
    router.push(`/pages/product/${id}`);
  };
  return (
    <div>
      {loader && <h1>Loading...</h1>}
      {product.map((item: any) => {
        return (
          <div
            onClick={() => {
              handleNavigate(item.id);
            }}
            className="flex gap-5 border border-black justify-center hover:bg-red-400 cursor-pointer"
          >
            <h1>{item.id}</h1>
            <h1>{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
