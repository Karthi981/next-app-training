import CourseCollection from "./components/CourseCollection";
import PopularCourses from "./components/PopularCourses";
import TrendingComponents from "./components/TrendingComponents";
import Title from "./components/header";
import SearchBar from "./components/searchBar";

export default function Home() {
  return (
    <main>
      <div className=" grid grid-flow-row items-center justify-center">
        <div>
          <Title />
        </div>
        <div className="  py-4 flex items-center justify-center  min-h-max w-[1200px] min-w-fit]">
          <div className="  relative ">
            <div className="text-center text-3xl font-bold p-2 ">
              Find the perfect online course for you
            </div>
            <div className="text-center text-xl text-gray-400  w-[800px]">
              Instant search for 50,000+ courses on the web.We have collected
              the best online courses from the biggest platforms and put them
              together for you
            </div>
            <SearchBar />
            <div className="border-b-1 border-solid absolute top-[440]"></div>
          </div>
          <TrendingComponents />
          <CourseCollection />
          <PopularCourses />
        </div>
      </div>
    </main>
  );
}
