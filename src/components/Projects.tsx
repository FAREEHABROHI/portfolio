import React from 'react';
import Image from 'next/image';


const Projects = () => {
  const images = [
    "/project1.jpg",
    "/project2.jpeg",
    "/project3.jpeg",
    "/project4.jpeg",
    "/project5.jpeg",
    "/project6.jpeg"
  ];

  return (
    <div className="container mx-auto py-10 bg-gray-900"> {/* Background color */}
      <h1 className="text-3xl font-bold text-center mb-8 text-yellow-500">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg border-2 border-gray-300"> {/* Border added to cards */}
            <Image 
              src={src} 
              alt={`Project ${index + 1}`} 
              layout="fill" 
              objectFit="cover" 
              className="absolute top-0 left-0"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white w-full p-4">
              <h2 className="font-bold text-xl text-center">Project {index + 1}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a
          href="https://github.com/FAREEHABROHI/template-.git"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-yellow-500 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 inline-block mx-2"
        >
          View on GitHub
        </a>
        <a
          href="https://template-git-main-fareehas-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-yellow-500 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 inline-block mx-2"
        >
          Visit on Vercel
        </a>
      </div>
    </div>
  );
};

export default Projects;
