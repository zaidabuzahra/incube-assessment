'use client';

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { Pagination } from "@/components/pagination";
import { FilterPosts } from "@/components/filteration";
import { setPosts } from "./redux-store/slices/postSlice";
import {Posts} from "@/components/post";
import { selectFilteredPosts, selectPaginatedPosts } from "./redux-store/selectors/selector";
import { SortPosts } from "@/components/sorting";

export default function Home() {
  const dispatch = useDispatch();

  const filteredPosts = useSelector(selectFilteredPosts);
  const paginatedPosts = useSelector(selectPaginatedPosts);

  useEffect(() => {
        async function fetchProducts() {
            const request = await fetch("https://dummyjson.com/posts");
            const response = await request.json();
            dispatch(setPosts(response.posts));
        }
        fetchProducts();
    }, []);

  const router = useRouter();
  const handleBtnClick = () => {
    router.push("/comments");
  };
  
  return (
    <main className="flex min-h-screen flex-col p-24">
      <SortPosts/>
      <div className="items-left justify-left">
        <FilterPosts/>
      </div>
      <div>
        <button className="border px-4 py-2 rounded cursor-pointer hover:bg-gray-200" onClick={handleBtnClick}>Comments</button>
      </div>
      <div className="flex flex-col gap-2 justify-left items-left w-full">
        {paginatedPosts.map((post) => (
          <Link key={post.id} href={`/comments/${post.id}`} >
            <Posts {...post} />
          </Link>
        ))}
      </div>
      <Pagination totalItems={filteredPosts.length} />
    </main>
  );
}