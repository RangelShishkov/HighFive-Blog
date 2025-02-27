import { useAuth, useUser } from "@clerk/clerk-react";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PostMenuActions = ({ post }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const {
    isPending,
    error,
    data: savedPosts,
  } = useQuery({
    queryKey: ["savedPosts"],
    queryFn: async () => {
      const token = await getToken();
      return (
        axios.get(`${import.meta.env.VITE_API_URL}/users/saved`),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
  });

  const isSaved = savedPosts?.data?.some((p) => p === post._id) || false;

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(`${import.meta.env.VITE_API_URL}/posts/${post._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      toast.success("Post deleted successfully!");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const queryClient = useQueryClient();
  const saveMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.patch(
        `${import.meta.env.VITE_API_URL}/users/save`,
        {
          postId: post._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedPosts"] });
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  const handleSave = () => {
    if (!user) {
      return navigate("/login");
    }
    saveMutation.mutate();
  };

  return (
    <div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
      {isPending ? (
        "Loading..."
      ) : error ? (
        "saved post fetching failed!"
      ) : (
        <div
          className="flex items-center gap-2 py-2 text-sm cursor-pointer"
          onClick={handleSave}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path
              fill={
                saveMutation.isPending
                  ? isSaved
                    ? "none"
                    : "black"
                  : isSaved
                  ? "black"
                  : "none"
              }
              d="M 12.8125 2 C 12.335938 2.089844 11.992188 2.511719 12 3 L 12 47 C 11.996094 47.359375 12.1875 47.691406 12.496094 47.871094 C 12.804688 48.054688 13.1875 48.054688 13.5 47.875 L 25 41.15625 L 36.5 47.875 C 36.8125 48.054688 37.195313 48.054688 37.503906 47.871094 C 37.8125 47.691406 38.003906 47.359375 38 47 L 38 3 C 38 2.449219 37.550781 2 37 2 L 13 2 C 12.96875 2 12.9375 2 12.90625 2 C 12.875 2 12.84375 2 12.8125 2 Z M 14 4 L 36 4 L 36 45.25 L 25.5 39.125 C 25.191406 38.945313 24.808594 38.945313 24.5 39.125 L 14 45.25 Z"
            ></path>
          </svg>
          <span>Save post</span>
          {saveMutation.isPending && (
            <span className="text-sm">(saving..)</span>
          )}
        </div>
      )}
      {user && post.user.username === user.username && (
        <div
          className="flex items-center gap-2 py-2 text-sm cursor-pointer"
          onClick={handleDelete}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 48 48"
          >
            <path d="M 20.5 4 A 1.50015 1.50015 0 0 0 19.066406 6 L 16.140625 6 C 14.303372 6 12.582924 6.9194511 11.564453 8.4492188 L 9.1972656 12 L 7.5 12 A 1.50015 1.50015 0 1 0 7.5 15 L 9.7636719 15 A 1.50015 1.50015 0 0 0 10.208984 15 L 36.330078 15 L 34.757812 29.679688 A 1.50015 1.50015 0 1 0 37.740234 29.998047 L 39.347656 15 L 40.5 15 A 1.50015 1.50015 0 1 0 40.5 12 L 38.802734 12 L 36.435547 8.4492188 C 35.416254 6.9202798 33.696001 6 31.859375 6 L 28.933594 6 A 1.50015 1.50015 0 0 0 27.5 4 L 20.5 4 z M 16.140625 9 L 31.859375 9 C 32.696749 9 33.474746 9.4162203 33.939453 10.113281 L 35.197266 12 L 12.802734 12 L 14.060547 10.113281 A 1.50015 1.50015 0 0 0 14.0625 10.111328 C 14.525982 9.4151428 15.301878 9 16.140625 9 z M 10.572266 17.650391 A 1.50015 1.50015 0 0 0 9.1171875 19.330078 L 11.125 38.085938 C 11.423352 40.868277 13.795836 43 16.59375 43 L 31.404297 43 C 34.202211 43 36.574695 40.868277 36.873047 38.085938 L 37.246094 34.605469 A 1.50015 1.50015 0 1 0 34.263672 34.287109 L 33.890625 37.765625 C 33.752977 39.049286 32.694383 40 31.404297 40 L 16.59375 40 C 15.303664 40 14.247023 39.049286 14.109375 37.765625 L 12.099609 19.011719 A 1.50015 1.50015 0 0 0 10.572266 17.650391 z"></path>
          </svg>
          <span>Delete post</span>
          {deleteMutation.isPending && (
            <span className="text-sm">(in progress)</span>
          )}
        </div>
      )}
    </div>
  );
};
export default PostMenuActions;
