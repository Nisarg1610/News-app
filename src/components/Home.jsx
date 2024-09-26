  import React, { useState, useEffect } from "react";
import NewsModel from "./NewsModel";
import SideCard from "./SideCard";

const Home = () => {
  const [showSuhrad, setShowSuhrad] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSuhrad = () => {
    if (isMobile) {
      setShowSuhrad((prevState) => !prevState);
    }
  };

  return (
    <div className="grid grid-cols-12 h-screen overflow-hidden bg-gradient-to-br from-fuchsia-600 to-pink-600">
      {/* Main Content */}
      <div className="col-span-12 sm:col-span-9 overflow-auto">
        <div className="flex justify-center h-full">
          <div className="w-full sm:w-3/4 flex flex-col items-center">
            {isMobile && (
              <button
                className="my-4 px-4 py-2 bg-purple-700 text-white rounded-full outline-none transition-all duration-300 hover:bg-purple-800 hover:shadow-md"
                onClick={toggleSuhrad}
              >
                {showSuhrad ? "Hide" : "Show"} Categories
              </button>
            )}
            {showSuhrad && (
              <div className="sticky top-0 bg-purple-700 p-4">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      key={index}
                      className="bg-purple-800 rounded-lg text-white text-center p-4 shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <h1>Category {index + 1}</h1>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, index) => (
                <NewsModel key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div className="sm:col-span-3 bg-gradient-to-r from-purple-700 to-purple-800 overflow-auto">
        <div className="text-center bg-purple-900 h-28 py-5">
          <h1 className="text-4xl text-white">Top News</h1>
        </div>
        <div>
          {Array.from({ length: 10 }).map((_, index) => (
            <SideCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;