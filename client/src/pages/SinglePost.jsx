import Image from "../components/Image";
import { Link, useParams } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "timeago.js";


const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};
const SinglePost = () => {
  const { slug } = useParams();
 

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return "Loading...";
  if (error) return "Unexpected error!🤣 " + error.message;
  if (!data) return "Post not found!";

  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-red-600">{data.user.username}</Link>
            <span>on</span>
            <Link className="text-red-600">{data.category}</Link>
            <span>{format(data.createdAt)}</span>
          </div>
          <p className="text-gray-800 font-medium">
           {data.desc}
          </p>
        </div>
       {data.img && <div className="hidden lg:block w-2/5">
          <Image src={data.img} w="600" className="rounded-2xl" />
        </div>}
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* texxt */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            repudiandae dignissimos. Tempora quis illo sapiente voluptates
            voluptatum adipisci quo, officia magni, pariatur illum excepturi,
            doloremque nemo quibusdam in sed ipsum eveniet officiis corrupti
            ipsam laudantium hic! At sapiente nesciunt sed non et explicabo nisi
            voluptatibus voluptatem, esse, officia officiis laborum eaque velit
            amet doloremque id accusamus minus temporibus aperiam iste sequi eum
            mollitia qui! Autem dicta temporibus ducimus rerum doloribus?
            Temporibus quaerat sed architecto fugiat. Corporis vero accusamus
            aut omnis quis, modi voluptate harum doloribus dolores, maiores quia
            illum obcaecati et? Minima fugiat perferendis veniam? Incidunt,
            aliquam est voluptates ad at consequatur a earum, delectus itaque
            eaque libero vitae repellendus ab assumenda porro! Hic quisquam
            officia vitae, sapiente et nostrum nesciunt at reiciendis ex impedit
            assumenda rerum, quasi provident totam rem ab tempore iste
            reprehenderit. Corrupti unde veniam officiis a.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            repudiandae dignissimos. Tempora quis illo sapiente voluptates
            voluptatum adipisci quo, officia magni, pariatur illum excepturi,
            doloremque nemo quibusdam in sed ipsum eveniet officiis corrupti
            ipsam laudantium hic! At sapiente nesciunt sed non et explicabo nisi
            voluptatibus voluptatem, esse, officia officiis laborum eaque velit
            amet doloremque id accusamus minus temporibus aperiam iste sequi eum
            mollitia qui! Autem dicta temporibus ducimus rerum doloribus?
            Temporibus quaerat sed architecto fugiat. Corporis vero accusamus
            aut omnis quis, modi voluptate harum doloribus dolores, maiores quia
            illum obcaecati et? Minima fugiat perferendis veniam? Incidunt,
            aliquam est voluptates ad at consequatur a earum, delectus itaque
            eaque libero vitae repellendus ab assumenda porro! Hic quisquam
            officia vitae, sapiente et nostrum nesciunt at reiciendis ex impedit
            assumenda rerum, quasi provident totam rem ab tempore iste
            reprehenderit. Corrupti unde veniam officiis a.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            repudiandae dignissimos. Tempora quis illo sapiente voluptates
            voluptatum adipisci quo, officia magni, pariatur illum excepturi,
            doloremque nemo quibusdam in sed ipsum eveniet officiis corrupti
            ipsam laudantium hic! At sapiente nesciunt sed non et explicabo nisi
            voluptatibus voluptatem, esse, officia officiis laborum eaque velit
            amet doloremque id accusamus minus temporibus aperiam iste sequi eum
            mollitia qui! Autem dicta temporibus ducimus rerum doloribus?
            Temporibus quaerat sed architecto fugiat. Corporis vero accusamus
            aut omnis quis, modi voluptate harum doloribus dolores, maiores quia
            illum obcaecati et? Minima fugiat perferendis veniam? Incidunt,
            aliquam est voluptates ad at consequatur a earum, delectus itaque
            eaque libero vitae repellendus ab assumenda porro! Hic quisquam
            officia vitae, sapiente et nostrum nesciunt at reiciendis ex impedit
            assumenda rerum, quasi provident totam rem ab tempore iste
            reprehenderit. Corrupti unde veniam officiis a.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            repudiandae dignissimos. Tempora quis illo sapiente voluptates
            voluptatum adipisci quo, officia magni, pariatur illum excepturi,
            doloremque nemo quibusdam in sed ipsum eveniet officiis corrupti
            ipsam laudantium hic! At sapiente nesciunt sed non et explicabo nisi
            voluptatibus voluptatem, esse, officia officiis laborum eaque velit
            amet doloremque id accusamus minus temporibus aperiam iste sequi eum
            mollitia qui! Autem dicta temporibus ducimus rerum doloribus?
            Temporibus quaerat sed architecto fugiat. Corporis vero accusamus
            aut omnis quis, modi voluptate harum doloribus dolores, maiores quia
            illum obcaecati et? Minima fugiat perferendis veniam? Incidunt,
            aliquam est voluptates ad at consequatur a earum, delectus itaque
            eaque libero vitae repellendus ab assumenda porro! Hic quisquam
            officia vitae, sapiente et nostrum nesciunt at reiciendis ex impedit
            assumenda rerum, quasi provident totam rem ab tempore iste
            reprehenderit. Corrupti unde veniam officiis a.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
             {data.user.img && <Image
                src={data.user.img}
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />}
              <Link className="text-red-600">{data.user.username}</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="instagram-logo" w={30} />
              </Link>
              <Link>
                <Image src="youtube-logo" w={30} />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" className="underline">
              All
            </Link>
            <Link to="/" className="underline">
              Web Design
            </Link>
            <Link to="/" className="underline">
              Development
            </Link>
            <Link to="/" className="underline">
              Marketing
            </Link>
            <Link to="/" className="underline">
              Search Engines
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments postId={data._id} />
    </div>
  );
};
export default SinglePost;
