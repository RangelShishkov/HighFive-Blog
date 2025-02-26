import { Link } from "react-router-dom";
import Image from "./Image";
import { format } from "timeago.js";

const PostListItem = ({ post }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-8">
      {/* Image */}
      {post.img && (
        <div className="md:hidden xl:block xl:w-1/3">
          <Image src={post.img} className="rounded-2xl object-cover" w="735" />
        </div>
      )}
      {/* Details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-800 text-sm">
          <span>Written by</span>
          <Link className="text-red-600">{post.user.username}</Link>
          <span>on</span>
          <Link className="text-red-600">{post.category}</Link>
          <span>{format(post.createdAt)}</span>
        </div>
        {/* Description */}
        <p>{post.desc}</p>
        <Link to={`/${post.slug}`} className="text-sm underline text-red-600">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
