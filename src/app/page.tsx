'use client';

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
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
  
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        
        {/* Top bar (sorting) */}
        <div className="mb-6">
          <SortPosts />
        </div>

        {/* Main content */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* Filters */}
          <aside className="col-span-12 md:col-span-3">
            <div className="bg-white rounded-lg p-4 shadow-sm md:sticky md:top-6">
              <FilterPosts />
            </div>
          </aside>

          {/* Posts */}
          <section className="col-span-12 md:col-span-9">
            
            {/* Posts list */}
            <div className="space-y-4">
              {paginatedPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => router.push(`/comments/${post.id}`)}
                  className="cursor-pointer"
                >
                  <Posts {...post} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <Pagination totalItems={filteredPosts.length} />
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}