'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Comments } from "@/app/types/Comments";
import { useRouter } from "next/navigation";

export default function CommentsPage() {
  const { id } = useParams();
  const postId = Number(id);

  const [comment, setComment] = useState<Comments>();

  useEffect(() => {
    if (!postId) return;

    async function fetchComments() {
      const res = await fetch(
        `https://dummyjson.com/comments/${postId}`
      );
      const data = await res.json();
      setComment(data);
    }

    fetchComments();
  }, [postId]);

  const router = useRouter();
  if (!comment) return <div>Loading...</div>;
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10 flex justify-center">
      <div className="w-full max-w-xl space-y-6">

        {/* Back button */}
        <button
          onClick={() => router.push("/")}
          className="text-sm text-blue-600 hover:underline flex items-center gap-1"
        >
          ← Back to posts
        </button>

        {/* Comment card */}
        <div className="bg-white rounded-xl shadow-sm border p-6 space-y-4">

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-800">
                @{comment.user.username}
              </p>
              <p className="text-xs text-gray-400">
                User #{comment.user.id}
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {comment.body}
          </p>

          <div className="flex justify-end text-sm text-gray-500">
            ❤️ {comment.likes} likes
          </div>
        </div>
      </div>
    </main>
  );
}
