'use client';

// Update filters states in redux store
// 
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/redux-store/store";
import { setSelectedTags } from "@/app/redux-store/slices/filterSlice";
import { resetPage } from "@/app/redux-store/slices/pageSlice";
import { setSearchQuery } from "@/app/redux-store/slices/filterSlice";

export function FilterPosts(){
    const dispatch = useDispatch();

    const { posts } = useSelector((state: RootState) => state.posts);
    const { selectedTags, selectedUserId, searchQuery } = useSelector((state: RootState) => state.filters);
    
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
    return (
        
        <div>
            <input
                type="text"
                placeholder="Search post titles..."
                value={searchQuery}
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                className="border px-3 py-2 rounded w-full"
            />
            {tags.map(tag => (
                <label key={tag} style={{ display: "block" }}>
                <input
                type="checkbox"
                checked={selectedTags.includes(tag)}
                onChange={() => toggleTag(tag)}
            />
                {tag}
                </label>
            ))}
        </div>
    );
}