const Experience = () => {
    return (
      <div className="border-b border-neutral-800 pb-16 mt-8">
        <h1 className="my-10 text-center text-3xl">Experience</h1>
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Internship 1 */}
          <div className="rounded-2xl border-4 border-neutral-800 p-4 w-3/4">
            <h2 className="text-2xl text-cyan-400">Content Writer Intern</h2>
            <p className="text-lg text-gray-400 mt-1">JK Lakshmipat University</p>
            <p className="text-md text-gray-500 mt-1">April - May 2024</p>
            <p className="text-sm text-gray-300 mt-3">
              Worked on content creation, focusing on developing engaging articles, blog posts, and social media content to enhance the university’s online presence.
            </p>
          </div>
          
          {/* Internship 2 */}
          <div className="rounded-2xl border-4 border-neutral-800 p-4 w-3/4">
            <h2 className="text-2xl text-cyan-400">Social Media Analyst Intern</h2>
            <p className="text-lg text-gray-400 mt-1">Humanli.AI</p>
            <p className="text-md text-gray-500 mt-1">May - July 2024</p>
            <p className="text-sm text-gray-300 mt-3">
              Analyzed social media trends and optimized content strategies, contributed to web design, email automation, and participated in managerial tasks, including peer-level interviews.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;
  