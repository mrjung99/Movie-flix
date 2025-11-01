import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 mt-15 py-16 px-6 text-center h-[85vh]">
      <h2 className="text-4xl font-bold mb-4">About MovieFlix</h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-6">
        MovieFlix is your ultimate movie companion. Search, explore, and
        discover movies with ratings, cast info, and trailers — all in one
        place.
      </p>
      <ul className="flex flex-col md:flex-row justify-center gap-6 mb-6 text-gray-600">
        <li>🔍 Search for any movie or series</li>
        <li>⭐ View ratings & cast info</li>
        <li>📱 Fully responsive design</li>
        <li>🎬 Explore plots and trailers</li>
      </ul>
      <p className="text-gray-600">
        Built with React, Tailwind CSS, React Router DOM, and OMDb API
      </p>
    </section>
  );
};

export default About;
