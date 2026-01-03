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
        <div className="border p-4 rounded mb-4 w-full">
        <h1 className="text-xl font-bold ">{highlightText(data.title, searchQuery)}</h1>
        <p>{data.body}</p>
        <div>
            Likes: {data.reactions.likes} | Dislikes: {data.reactions.dislikes} | Views: {data.views}
        </div>
        <div>
            {data.tags.map((tag) => (
            <span key={tag} style={{ marginRight: '8px' }}>
                #{tag}
            </span>
            ))}
        </div>
        </div>
    );
}