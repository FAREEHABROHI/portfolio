"use client";

import React from "react";


const Skills = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-yellow-500">
          My Skills
        </h2>
        <ul className="space-y-4">
          <li className="text-lg sm:text-xl font-medium">
            <strong>1. Next.js</strong>
          </li>
          <li className="text-lg sm:text-xl font-medium">
            <strong>2. HTML, CSS, TypeScript, Tailwind CSS, Bootstrap</strong>
          </li>
          <li className="text-lg sm:text-xl font-medium">
            <strong>3. Python</strong>
          </li>
          <li className="text-lg sm:text-xl font-medium">
            <strong>4. Script Writing</strong>
          </li>
          <li className="text-lg sm:text-xl font-medium">
            <strong>5. Customer Management</strong>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;


