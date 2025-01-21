import { useState } from "react";
import PostList from "../components/PostList";
import SideListMenu from "../components/SideMenu";

const PostListPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="mb-8 text-2xl">Lineage 2 blog</h1>
      <button onClick={() => setOpen((prev) => !prev)} className="bg-yellow-400 text-sm-text-white px-4 py-2 rounded-2xl mb-4 md:hidden">
        {open ? "Close" : "Filter & Search"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div className="">
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block `}>
          <SideListMenu />
        </div>
      </div>
    </div>
  );
};
export default PostListPage;
