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
    <div className="py-10">
      <div className="flex flex-row gap-2 justify-center items-center w-full"> 
        {page === 1 ? <button className="border px-1 py-2 rounded bg-gray-400">Previous Page</button> : <button className="border px-4 py-2 rounded cursor-pointer hover:bg-gray-800" onClick={() => dispatch(prevPage())}>Previous Page</button>}
      <h1>Page: {page} of {totalPages}</h1>
        {page >= totalPages ? <button className="border px-4 py-2 rounded bg-gray-400">Next Page</button> : <button className="border px-4 py-2 rounded cursor-pointer hover:bg-gray-800" onClick={() => dispatch(nextPage())}>Next Page</button>}
      </div>
      <div className="flex flex-row justify-center items-center w-full mt-4">
        Page Size: 
        <select className="flex flex-row border px-4 py-1 rounded cursor-pointer hover:bg-gray-800 click:bg-gray-800 text-white"
          value={pageSize}
          onChange={(e) => dispatch(setPageSize(Number(e.target.value)))}
        >
          <option className="text-black" value={5}>5</option>
          <option className="text-black" value={10}>10</option>
          <option className="text-black" value={20}>20</option>
        </select>
      </div>
    </div>
  );
}