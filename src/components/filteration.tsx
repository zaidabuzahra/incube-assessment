'use client';

// Update filters states in redux store
// 
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/redux-store/store";
import { setSelectedUserId, setSelectedTags } from "@/app/redux-store/slices/filterSlice";
import { resetPage } from "@/app/redux-store/slices/pageSlice";
import { setSearchQuery } from "@/app/redux-store/slices/filterSlice";
import { useEffect, useState } from "react";

export function FilterPosts(){
    const dispatch = useDispatch();
    const [users, setUsers] = useState<{ id: number; username: string }[]>([]);
    const { posts } = useSelector((state: RootState) => state.posts);
    const { selectedTags, selectedUserId, searchQuery } = useSelector((state: RootState) => state.filters);
    
    useEffect(() => {
            async function fetchProducts() {
                const request = await fetch("https://dummyjson.com/users");
                const response = await request.json();
                setUsers(response.users.map((u: any) => ({
                    id: u.id,
                    username: u.username
            })));
            }
            fetchProducts();
        }, []);
    // Extract unique tags
    const tags = Array.from(
    new Set(posts.flatMap(post => post.tags))
    
  );
    function toggleTag(tag: string) {
        let updatedTags;

        if (selectedTags.includes(tag)) {
            updatedTags = selectedTags.filter(t => t !== tag);
        } else {
            updatedTags = [...selectedTags, tag];
        }

        dispatch(setSelectedTags(updatedTags));
        dispatch(resetPage());
    }
    function updateSearchQuery(text: string){
        dispatch(setSearchQuery(text));
        dispatch(resetPage());
    }
    return (
        
        <div className="bg-white rounded-lg p-4 shadow-sm space-y-4">

        {/* Search */}
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
            Search posts
            </label>
            <input
            type="text"
            placeholder="Search post titles..."
            value={searchQuery}
            onChange={(e) => updateSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

        {/* User filter */}
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by user
        </label>

        <select
            value={selectedUserId ?? ""}
            onChange={(e) => {
            const value = e.target.value;
            dispatch(setSelectedUserId(value ? Number(value) : null));
            dispatch(resetPage());
            }}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <option value="">All users</option>

            {users.map(user => (
            <option key={user.id} value={user.id}>
                {user.username} (#{user.id})
            </option>
            ))}
        </select>
        </div>

        {/* Tags */}
        <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
            Filter by tags
            </h3>

            <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
            {tags.map(tag => (
                <label
                key={tag}
                className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
                >
                <input
                    type="checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={() => toggleTag(tag)}
                    className="accent-blue-600"
                />
                <span>{tag}</span>
                </label>
            ))}
            </div>
        </div>

        </div>
    );
}