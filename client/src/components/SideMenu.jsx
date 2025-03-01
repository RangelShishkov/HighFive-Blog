import { span, useSearchParams } from "react-router-dom";
import Search from "./Search";

const SideListMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterChange = (e) => {
    if (searchParams.get("sort") !== e.taget.value) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        sort: e.target.value,
      });
    }
  };

  const handleCategoryChange = (category) => {
    if (searchParams.get("cat") !== category) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        cat: category,
      });
    }
  };

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
            onChange={handleFilterChange}
            value="new"
            className="appearance-none w-4 h-4 border-[1.5px] border-yellow-400 rounded-sm bg-white checked:bg-yellow-400"
          />
          New
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="popular"
            className="appearance-none w-4 h-4 border-[1.5px] border-yellow-400 rounded-sm bg-white checked:bg-yellow-400"
          />
          Popular
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="trending"
            className="appearance-none w-4 h-4 border-[1.5px] border-yellow-400 rounded-sm bg-white checked:bg-yellow-400"
          />
          Trending
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="oldest"
            className="appearance-none w-4 h-4 border-[1.5px] border-yellow-400 rounded-sm bg-white checked:bg-yellow-400"
          />
          Oldest
        </label>
      </div>
      <h1 className="mt-8 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("general")}>
          All
        </span>
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("web-design")}>
          Web Design
        </span>
        <span className="underline cursor-pointer"onClick={()=>handleCategoryChange("development")}>
          Development
        </span>
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("databases")}>
          Databases
        </span>
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("marketing")}>
          Marketing
        </span>
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("seo")}>
          Search Engine
        </span>
      </div>
    </div>
  );
};
export default SideListMenu;
