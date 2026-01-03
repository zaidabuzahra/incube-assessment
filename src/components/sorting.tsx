'use client';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/redux-store/store";
import { setSortBy, resetSort, toggleSortDirection} from "@/app/redux-store/slices/sortSlice";

export function SortPosts() {
    const {sortBy, sortOrder} = useSelector((state: RootState) => state.sort);

    const dispatch = useDispatch();

    function changeField(field: string) {
        dispatch(setSortBy(field));
        //dispatch(resetSort());
    }

    return(
    <div className="flex gap-4 items-center">
      <select className="flex flex-row border px-4 py-1 rounded cursor-pointer hover:bg-gray-800 click:bg-gray-800 text-white"
        value={sortBy}
        onChange={(e) => changeField(e.target.value)}
      >
        <option value="id">Id</option>
        <option value="views">Views</option>
        <option value="likes">Likes</option>
        <option value="dislikes">Dislikes</option>
      </select>

      <button 
        className="border px-4 py-2 rounded cursor-pointer hover:bg-gray-800"
        onClick={() => dispatch(toggleSortDirection())}
      >
        {sortOrder === "asc" ? "↑ Asc" : "↓ Desc"}
      </button>
    </div>
    )
};