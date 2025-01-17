import Image from "./Image";
import { Link } from "react-router-dom";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* Main post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <Image src="lineage-clients.jpg" className="rounded-3xl object-cover" />
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-red-600 lg:text-lg">Web Design</Link>
          <span className="text-gray-800">2 days ago</span>
        </div>
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
          dignissimos.{" "}
        </Link>
      </div>
      {/* Other posts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* 1 */}
        <div className="lg:h-1/3 flex justify-between gap-4 ">
          <Image
            src="post2.jpg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-red-600">Web Design</Link>
              <span className="text-gray-800 text-sm">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
              minus.
            </Link>
          </div>
        </div>
        {/* 2 */}
        <div className="lg:h-1/3 flex justify-between gap-4 ">
          <Image
            src="post4"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-red-600">Web Design</Link>
              <span className="text-gray-800 text-sm">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
              minus.
            </Link>
          </div>
        </div>
        {/* 3 */}
        <div className="lg:h-1/3 flex justify-between gap-4 ">
          <Image
            src="post3"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">04.</h1>
              <Link className="text-red-600">Web Design</Link>
              <span className="text-gray-800 text-sm">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
              minus.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedPosts;
