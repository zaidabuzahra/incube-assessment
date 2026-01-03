'use client';

import { useSelector } from "react-redux";
import { RootState } from "@/app/redux-store/store";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function CommentsPage() {
  
  const { id } = useParams();

  useEffect(() => {
        async function fetchProducts() {
            const request = await fetch("https://dummyjson.com/comments");
            const response = await request.json();

        }
        fetchProducts();
    }, []);

  return (
    <div>
      
      <h1>Comments for post #{id}</h1>
    </div>
  );
}