import { useQuery } from "@tanstack/react-query";
import Comment from "./Comment";
import axios from "axios";

const fetchComments = async (postId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  return res.data;
};

const Comments = ({ postId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  if (isPending) return "Loading...";
  if (error) return "Unexpected error!🤣 " + error.message;
  

  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-gray-800 underline">Comments</h1>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea
          placeholder="Write a comment..."
          className="w-full p-4 rounded-xl"
        />
        <button className="bg-yellow-400 px-4 py-3 text-white font-medium rounded-xl">
          Send
        </button>
      </div>
      {data.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};
export default Comments;
