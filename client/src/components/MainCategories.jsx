import { Link } from "react-router-dom";
import Search from "./Search";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* categories */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-yellow-400 text-gray-800 rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-yellow-100 text-gray-800 rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-yellow-100 text-gray-800 rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="hover:bg-yellow-100 text-gray-800 rounded-full px-4 py-2"
        >
          Database
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-yellow-100 text-gray-800 rounded-full px-4 py-2"
        >
          Marketing
        </Link>
        <Link
          to="/posts?cat=search-engines"
          className="hover:bg-yellow-100 text-gray-800 rounded-full px-4 py-2"
        >
          Search Engines
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <Search />
    </div>
  );
};
export default MainCategories;
