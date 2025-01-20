import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const Create = () => {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return <div>Loading..</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div>Not logged in</div>;
  }
  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create new post🤣🙌👌</h1>
      <form action="" className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-800 bg-white">Add cover image</button>
        <input type="text" className="text-4xl font-semibold bg-transparent outline-none" placeholder="MyStory" />
        <div className="flex items-center gap-4">
          <label className="text-sm">Choose a category</label>
          <select name="cat" id="" className="p-2 rounded-xl bg-white shadow-md">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="marketing">Marketing</option>
            <option value="seo">Search Engines</option>
          </select>
        </div>
        <textarea
          name="Description"
          placeholder="description..."
          id=""
          className="p-4 rounded-xl bg-white shadow-md"
        />
        <ReactQuill theme="snow" className="flex-1 rounded-xl bg-white shadow-md"/>
        <button className="bg-yellow-400 text-white font-medium rounded-xl mt-4 p-2 w-36">Create</button>
      </form>
    </div>
  );
};

export default Create;
