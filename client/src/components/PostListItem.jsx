import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* Image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="tyrant.jpg" className="rounded-2xl object-cover" w="735"/>
      </div>
      {/* Details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cum.
        </Link>
        <div className="flex items-center gap-2 text-gray-800 text-sm">
          <span>Written by</span>
          <Link className="text-red-600">John Doe</Link>
          <span>on</span>
          <Link className="text-red-600">Web Design</Link>
          <span>2 days ago</span>
        </div>
        {/* Description */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vitae possimus voluptates ducimus cumque similique, non nihil quia culpa ullam doloribus eaque cum esse veritatis officiis et eveniet, consectetur eligendi?</p>
        <Link to="test" className="text-sm underline text-red-600">Read More</Link>
      </div>
    </div>
  );
};

export default PostListItem;
