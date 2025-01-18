import Image from "./Image";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-200 rounded-xl mb-8">  {/*bg-color can be adjusted */}
      <div className="flex items-center gap-4">
        <Image
          src="default-image.jpg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">Iss Enchanter</span>
        <span className="text-sm text-gray-800">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quidem
          ut fugit quisquam nisi, ipsa excepturi doloribus molestias earum
          accusamus. Nostrum, cumque. Earum maxime fugiat quo impedit labore,
          optio, voluptatem id excepturi dolore ipsa recusandae. Ex commodi
          officiis cupiditate quaerat.
        </p>
      </div>
    </div>
  );
};
export default Comment;
