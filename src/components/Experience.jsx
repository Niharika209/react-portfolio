const Experience = () => {
    return (
      <div className="border-b border-neutral-800 pb-16">
        <h1 className="my-16 text-center text-4xl">Experience</h1>
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-green-400 hidden md:block"></div>
            
            {/* Internship 1 - Left */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="w-full md:w-1/2 md:pr-8 mb-4 md:mb-0">
                <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
                  <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Fullstack Development Intern</h2>
                  <p className="text-base text-gray-400 mt-2">Daime Solutions</p>
                  <p className="text-sm text-gray-500 mt-1 mb-3">Jul 2025</p>
                  <ul className="text-sm text-gray-300 list-disc list-inside space-y-1.5">
                    <li>Worked within Agile development cycle managing tasks via Trello.</li>
                    <li>Developed Admin Dashboard and wedding gallery web app.</li>
                    <li>Built frontend with React, TypeScript & Tailwind CSS; backend with Node.js, Express, PostgreSQL & Firebase.</li>
                    <li>Collaborated on GitHub using AI tools (Copilot, Claude, ChatGPT).</li>
                  </ul>
                </div>
              </div>
              <div className="absolute left-1/2 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 hidden md:block"></div>
              <div className="w-full md:w-1/2"></div>
            </div>
            
            {/* Internship 2 - Right */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="w-full md:w-1/2"></div>
              <div className="absolute left-1/2 w-4 h-4 bg-purple-400 rounded-full transform -translate-x-1/2 hidden md:block"></div>
              <div className="w-full md:w-1/2 md:pl-8">
                <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
                  <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Social Media Analyst Intern</h2>
                  <p className="text-base text-gray-400 mt-2">Humanli.AI</p>
                  <p className="text-sm text-gray-500 mt-1 mb-3">May - Jul 2024</p>
                  <ul className="text-sm text-gray-300 list-disc list-inside space-y-1.5">
                    <li>Analyzed social media performance metrics to generate insights.</li>
                    <li>Led content creation using Canva, DALL·E, ChatGPT, and video editing via Publer with SEO techniques.</li>
                    <li>Automated email campaigns using Python and web scraping.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Internship 3 - Left */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-8 mb-4 md:mb-0">
                <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
                  <h2 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Content Writer Intern</h2>
                  <p className="text-base text-gray-400 mt-2">JK Lakshmipat University</p>
                  <p className="text-sm text-gray-500 mt-1 mb-3">April - May 2024</p>
                  <p className="text-sm text-gray-300">
                    Worked on content creation, focusing on developing engaging articles, blog posts, and social media content to enhance the university's online presence.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 w-4 h-4 bg-green-400 rounded-full transform -translate-x-1/2 hidden md:block"></div>
              <div className="w-full md:w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;
  