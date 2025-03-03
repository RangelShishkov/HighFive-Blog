import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Home = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-red-600">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            fugit.
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            praesentium repellat possimus odit consectetur veritatis quasi
            consequatur asperiores repudiandae similique. Assumenda eaque
            voluptatibus facere earum?
          </p>
        </div>
        <Link to="create" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animatedButton" 
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Share your thought •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your thought •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-24 h-24 bg-red-600 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
              <path d="M99.569 192.497a5.18 5.18 0 0 0 6.846-2.599c.22-.494.449-.991.682-1.494a5.175 5.175 0 0 0-2.507-6.879 5.176 5.176 0 0 0-6.879 2.507c-.253.546-.501 1.086-.741 1.62a5.177 5.177 0 0 0 2.599 6.845zM228.711 53.746a5.178 5.178 0 0 0-4.808-1.04c-23.523 6.812-48.657 29.368-65.604 47.09-20.182 21.108-40.02 47.236-53.062 69.89a5.176 5.176 0 0 0 1.904 7.069 5.178 5.178 0 0 0 7.07-1.903c12.65-21.975 31.932-47.358 51.571-67.9 19.303-20.187 37.848-34.58 53.188-41.404-1.55 9.503-3.585 18.304-6.157 26.664l-20.86 7.413a5.176 5.176 0 0 0 .121 9.798l12.466 4.083a120.961 120.961 0 0 1-5.77 10.605l-25.299-2.55a5.176 5.176 0 0 0-4.146 8.846l13.647 13.399a80.761 80.761 0 0 1-11.466 9.014l-12.311-9.559a5.178 5.178 0 0 0-8.352 4.09v14.912c-6.971 2.055-14.481 3.287-22.378 3.667a5.18 5.18 0 0 0-4.924 5.421 5.18 5.18 0 0 0 5.421 4.923c10.213-.492 19.883-2.286 28.743-5.333a5.18 5.18 0 0 0 3.493-4.896v-8.118l6.791 5.273a5.18 5.18 0 0 0 5.79.379c7.389-4.324 14.225-9.793 20.314-16.259a5.179 5.179 0 0 0-.139-7.245l-6.86-6.733 13.821 1.393a5.177 5.177 0 0 0 4.854-2.321c3.944-6.042 7.524-12.762 10.639-19.973a5.176 5.176 0 0 0-3.14-6.974l-3.557-1.165 8.995-3.196a5.173 5.173 0 0 0 3.192-3.284c3.923-12.121 6.73-25.038 8.58-39.487a5.171 5.171 0 0 0-1.767-4.589z" />
              <path d="m122.604 211.113-.988-.539c-1.388-.757-2.561-2.802-2.561-3.686v-2.864c5.339-3.402 8.629-8.261 8.629-13.737a5.178 5.178 0 1 0-10.356 0c0 3.893-7.562 8.419-17.31 8.419-9.748 0-17.309-4.526-17.309-8.419 0-2.295 2.657-4.851 6.769-6.512a5.176 5.176 0 0 0 2.861-6.74 5.176 5.176 0 0 0-6.74-2.861c-8.293 3.351-13.245 9.375-13.245 16.113 0 5.476 3.29 10.335 8.629 13.737v2.864c0 .884-1.173 2.929-2.56 3.686l-.988.539c-4.537 2.474-7.958 8.237-7.958 13.404v11.815c0 6.157 5.011 11.167 11.167 11.167h38.749c6.157 0 11.167-5.01 11.167-11.167v-11.815c.002-5.167-3.419-10.93-7.956-13.404zm-2.398 25.219c0 .432-.38.812-.812.812H80.646a.834.834 0 0 1-.812-.812v-11.815c0-1.39 1.341-3.648 2.56-4.312l.99-.54c4.146-2.263 7.359-7.048 7.88-11.529 2.741.601 5.683.926 8.756.926 3.075 0 6.016-.325 8.757-.926.52 4.48 3.733 9.267 7.881 11.529l.988.54c1.221.665 2.561 2.922 2.561 4.312v11.815z" />
            </svg>
          </button>
        </Link>
      </div>
      {/* CATEGORIES */}
      <MainCategories />
      {/* POSTS */}
      <FeaturedPosts />
      {/* RECENT POSTS */}
      <div>
        <h1 className="my-8 text-2xl text-gray-800">
          Recent Posts
        </h1>
        <PostList />
      </div>
    </div>
  );
};
export default Home;
