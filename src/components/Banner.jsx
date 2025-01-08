import React from "react";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat rounded-3xl w-full h-full md:h-[35.5rem] mb-10"
      style={{
        backgroundImage: 'url("https://i.ibb.co.com/g4ZyXWT/banner.png")',
      }}
    >
      <div className="w-8/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-6 py-4">
        <h1 className="font-bold text-white text-[1.6rem] md:text-[3.25rem]">
          Discover an exceptional cooking class <br /> tailored for you!
        </h1>
        <p className="text-lg text-white font-normal">
          Master essential cooking techniques, global cuisines, and kitchen
          management. Create 500+ signature dishes and refine your culinary
          artistry. Become a world-class chef renowned for your exceptional
          skills.
        </p>
        <div className="flex gap-6 text-xl font-semibold">
          <button className="btn btn-success rounded-3xl">Explore Now</button>
          <button className="btn btn-outline btn-accent rounded-3xl">
            Our Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
