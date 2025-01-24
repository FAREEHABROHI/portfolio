"use client";

import React from "react";
import Image from "next/image";

export default function Main() {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Fareeha</h1>
          <p className="text-gray-400 mb-8">

✨ Welcome to My Portfolio! 🚀

I&#39;m a passionate Next.js Developer creating lightning-fast, scalable, and user-friendly websites.

Explore my projects, skills, and expertise that bring innovative ideas to life. Let&#39;s build something amazing together! 💻💡
          </p>
          <h2 className="text-yellow-500">Scroll down plz</h2>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/fareeha.jpg" // Path to your image in the /public folder
              alt="Profile Picture"
              width={256} // Explicitly define width
              height={256} // Explicitly define height
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
 