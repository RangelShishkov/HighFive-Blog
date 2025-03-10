import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Upload from "../components/Upload";

const Create = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    img && setValue((prev) => prev + `<p><image src="${img.url}/></p>"`);
  }, [img]);

  useEffect(() => {
    video &&
      setValue(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}/></p>"`
      );
  }, [video]);

  const navigate = useNavigate();

  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post has been created!");
      navigate(`/${res.data.slug}`);
    },
  });

  if (!isLoaded) {
    return <div>Loading..</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div>Not logged in</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };

    console.log(data);

    mutation.mutate(data);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create new post🤣🙌👌</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-800 bg-white">
            Add cover image
          </button>
        </Upload>

        <input
          type="text"
          className="text-4xl font-semibold bg-transparent outline-none"
          placeholder="My Story"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label className="text-sm">Choose a category</label>
          <select
            name="category"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="marketing">Marketing</option>
            <option value="seo">Search Engines</option>
          </select>
        </div>
        <textarea
          name="desc"
          placeholder="description..."
          id=""
          className="p-4 rounded-xl bg-white shadow-md"
        />
        <div className="flex flex-1">
          <div className="flex flex-col gap-2 mr-2">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-800 bg-white">
                Upload image
              </button>
            </Upload>
            <Upload type="image" setProgress={setProgress} setData={setVideo}>
              <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-800 bg-white">
                Upload video
              </button>
            </Upload>
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md"
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
          />
        </div>
        <button
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="bg-yellow-400 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-yellow-200 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Create Post"}
        </button>
        {"Progress:" + progress}
        {mutation.isError && <span>{mutation.error.message}</span>}
      </form>
    </div>
  );
};

export default Create;
