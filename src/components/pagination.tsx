'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../app/redux-store/store';
import { useDispatch } from 'react-redux';
import { nextPage, prevPage, setPageSize } from '../app/redux-store/slices/pageSlice';

// get pagination state from redux store
// get page size state from redux store
// dispatch "next/privious and page size selector" actions

export function Pagination(Props:{totalItems: number}) {
  const { page, pageSize } = useSelector((state: RootState) => state.page);
  const dispatch = useDispatch();
  const totalPages = Math.ceil(Props.totalItems / pageSize);
  
  return (
    <div className="py-8 space-y-4">
      {/* Page controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          className="px-4 py-2 rounded-md border text-sm bg:-white text-black disabled:bg-gray-200 disabled:text-gray-400 hover:bg-gray-100 transition"
          disabled={page === 1}
          onClick={() => dispatch(prevPage())}
        >
          ← Previous
        </button>

        <span className="text-sm text-gray-600">
          Page <b>{page}</b> of <b>{totalPages}</b>
        </span>

        <button
          className="px-4 py-2 rounded-md border text-sm bg-white text-black disabled:bg-gray-200 disabled:text-gray-400 hover:bg-gray-100 transition"
          disabled={page >= totalPages}
          onClick={() => dispatch(nextPage())}
        >
          Next →
        </button>
      </div>

      {/* Page size selector */}
      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
        <span>Page size:</span>

        <select
          className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={pageSize}
          onChange={(e) => dispatch(setPageSize(Number(e.target.value)))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

    </div>
  );
}