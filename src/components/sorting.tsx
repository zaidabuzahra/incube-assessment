'use client';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/redux-store/store";
import { setSortBy, toggleSortDirection} from "@/app/redux-store/slices/sortSlice";

export function SortPosts() {
    const {sortBy, sortOrder} = useSelector((state: RootState) => state.sort);

    const dispatch = useDispatch();

    function changeField(field: string) {
        dispatch(setSortBy(field));
        //dispatch(resetSort());
    }

    return(
      <div className="flex flex-wrap items-center gap-3 bg-white p-4 rounded-lg shadow-sm">

        {/* Sort field */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>

          <select
            className="border rounded-md px-3 py-1 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={sortBy}
            onChange={(e) => changeField(e.target.value)}
          >
            <option value="id">ID</option>
            <option value="views">Views</option>
            <option value="likes">Likes</option>
            <option value="dislikes">Dislikes</option>
          </select>
        </div>

        {/* Sort direction */}
        <button
          className="px-3 py-1 rounded-md border text-sm text-black hover:bg-gray-100 transition"
          onClick={() => dispatch(toggleSortDirection())}
        >
          {sortOrder === "asc" ? "↑ Ascending" : "↓ Descending"}
        </button>

      </div>
    )
};