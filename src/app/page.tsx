'use client';

import { RootState } from "./db/store";
import { useDispatch, useSelector } from "react-redux";
import { clearPostID, setPostID } from "./db/postSlice";

export default function Home() {
  const { id, title, body } = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch();

  const updateUserID = () => {
    const id = "1";
    const title = "Sample Title";
    const body = "Sample Body";
    dispatch(setPostID({id, title, body}));
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1> You Are: </h1>
      <h2>{id} {title} {body}</h2>
      <div className="flex flex-row gap-2 justify-center items-center w-full"> 
        <button className="border px-4 py-2 rounded cursor-pointer hover:bg-gray-200" onClick={updateUserID}>Update ID</button>
        <button className="border px-4 py-2 rounded cursor-pointer hover:bg-gray-200" onClick={() => dispatch(clearPostID())}>Clear Post</button>
      </div>
    </main>
  );
}