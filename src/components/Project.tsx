"use client";

import React from "react";
import Link from "next/link";

const projects = [
  {
    title: "Project 1",
    description: "This is a description of Project 1.",
    image: "project1.jpg",
  },
  {
    title: "Project 2",
    description: "This is a description of Project 2.",
    image: "Project2.jpeg",
  },
  {
    title: "Project 3",
    description: "This is a description of Project 3.",
    image: "project3.jpeg",
  },
  {
    title: "Project 4",
    description: "This is a description of Project 4.",
    image: "project4.jpeg",
  },
  {
    title: "Project 5",
    description: "This is a description of Project 5.",
    image: "project5.jpeg",
  },
  {
    title: "Project 6",
    description: "This is a description of Project 6.",
    image: "project6.jpeg",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-500">
          My Projects
        </h2>
        {/* Flex Layout */}
        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] h-[700px]" // Total card height remains the same
            >
              {/* Project Image */}
              <div className="w-full h-[75%]"> {/* Increased image height to 75% of the card */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Project Content */}
              <div className="p-6 h-[25%] flex flex-col justify-between"> {/* Content area reduced to 25% */}
                <h3 className="text-2xl font-semibold text-yellow-500 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Links Section */}
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
    </section>
  );
};

export default Projects;
