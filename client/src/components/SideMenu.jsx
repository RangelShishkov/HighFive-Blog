import { Link } from "react-router-dom";
import Search from "./Search";

const SideListMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mt-8 text-sm font-medium">Filter</h1>
      <div className="flex flex-col text-sm gap-2">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="new"
            className="appearance-none w-4 h-4 border-[1.5px] border-yellow-400 rounded-sm bg-white checked:bg-yellow-400"
          />
          New
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="popular"
            className="appearance-none w-4 h-4 border-[1.5px] border-yellow-400 rounded-sm bg-white checked:bg-yellow-400"
          />
          Popular
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="trending"
            className="appearance-none w-4 h-4 border-[1.5px] border-yellow-400 rounded-sm bg-white checked:bg-yellow-400"
          />
          Trending
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="oldest"
            className="appearance-none w-4 h-4 border-[1.5px] border-yellow-400 rounded-sm bg-white checked:bg-yellow-400"
          />
          Oldest
        </label>
      </div>
      <h1 className="mt-8 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="underline" to="/posts">
          All
        </Link>
        <Link className="underline" to="/posts?cat=web-design">
          Web Design
        </Link>
        <Link className="underline" to="/posts?cat=development">
          Development
        </Link>
        <Link className="underline" to="/posts?cat=databases">
          Databases
        </Link>
        <Link className="underline" to="/posts?cat=marketing">
          Marketing
        </Link>
        <Link className="underline" to="/posts?cat=seo">
          Search Engine
        </Link>
      </div>
    </div>
  );
};
export default SideListMenu;
