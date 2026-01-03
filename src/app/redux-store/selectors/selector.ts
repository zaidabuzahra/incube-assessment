import { Post } from "@/app/types/Posts";
import { RootState } from "../store";

export const selectFilteredPosts = (state: RootState) => {
    const {posts} = state.posts;
    const { selectedTags, selectedUserId, searchQuery } = state.filters;
    const { sortBy, sortOrder} = state.sort;

    const normalizedQuery = searchQuery.toLowerCase();

    const filteredPosts = posts.filter(post => {
        // Check tag matching
        const tagMatch =
        selectedTags.length === 0 ||
        selectedTags.every(tag => post.tags.includes(tag));

        // Check user ID matching
        const userMatch =
        selectedUserId === null ||
        post.userId === selectedUserId;
        
        const searchMatch =
        normalizedQuery === "" ||
        post.title.toLowerCase().includes(normalizedQuery);
    return tagMatch && userMatch && searchMatch;
  });
  return sortPosts(filteredPosts, sortBy, sortOrder);
};

function sortPosts(posts: Post[], field: string, direction: string){
    if (!field) return posts;

    return [...posts].sort((a, b) => {
        let aValue;
        let bValue;

        switch (field) {
        case "id":
            aValue = a.id;
            bValue = b.id;
            break;

        case "views":
            aValue = a.views;
            bValue = b.views;
            break;

        case "likes":
            aValue = a.reactions.likes;
            bValue = b.reactions.likes;
            break;

        case "dislikes":
            aValue = a.reactions.dislikes;
            bValue = b.reactions.dislikes;
            break;

        default:
            return 0;
        }

        if (aValue < bValue) return direction === "asc" ? -1 : 1;
        if (aValue > bValue) return direction === "asc" ? 1 : -1;
        return 0;
    });
}

export const selectPaginatedPosts = (state: RootState) => {
    const filteredPosts = selectFilteredPosts(state);
    const { page, pageSize } = state.page;
    
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return filteredPosts.slice(start, end);
}