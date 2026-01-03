'use client';

import { Post } from "../app/types/Posts";
import { RootState } from "../app/redux-store/store";
import { useSelector } from "react-redux";

export function Posts(data: Post) {    
    const {searchQuery} = useSelector((state: RootState) => state.filters);

    function highlightText(text: string, query: string) {
        if (!query) return text;

        const regex = new RegExp(`(${query})`, "gi");
        return text.split(regex).map((part, index) =>
            regex.test(part) ? (
            <mark key={index}>{part}</mark>
            ) : (
            part
            )
        );
    }
    
    return (
    <div className="bg-white border rounded-lg p-5 w-full 
            hover:shadow-md transition-shadow">
        {/* Title */}
        <h1 className="text-lg font-semibold text-gray-800 leading-snug">
            {highlightText(data.title, searchQuery)}
        </h1>

        {/* Body */}
        <p className="text-gray-600 mt-2 line-clamp-3">
            {data.body}
        </p>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
            <span>👍 {data.reactions.likes}</span>
            <span>👎 {data.reactions.dislikes}</span>
            <span>👁 {data.views}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
            {data.tags.map((tag) => (
            <span
                key={tag}
                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
            >
                {tag}
            </span>
            ))}
        </div>
        </div>
    );
}