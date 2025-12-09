const Skills = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-4xl">Skills</h1>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
            <h2 className="text-2xl mb-4 font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Frontend</h2>
            <p className="text-neutral-300 text-lg leading-relaxed">
              HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS
            </p>
          </div>

          {/* Backend */}
          <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
            <h2 className="text-2xl mb-4 font-bold bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">Backend</h2>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Node.js, Express.js, RESTful APIs, Firebase
            </p>
          </div>

          {/* Database & Cloud */}
          <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
            <h2 className="text-2xl mb-4 font-bold bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 bg-clip-text text-transparent">Database & Cloud</h2>
            <p className="text-neutral-300 text-lg leading-relaxed">
              PostgreSQL, MongoDB, Filebase, Cloudinary
            </p>
          </div>

          {/* Tools */}
          <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
            <h2 className="text-2xl mb-4 font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">Tools</h2>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Git, GitHub, Copilot, ChatGPT, Vercel, Claude AI, Figma, Render
            </p>
          </div>

          {/* Languages */}
          <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
            <h2 className="text-2xl mb-4 font-bold bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 bg-clip-text text-transparent">Languages</h2>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Java, Python
            </p>
          </div>

          {/* Other */}
          <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
            <h2 className="text-2xl mb-4 font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Other</h2>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Content Writing, Graphic Designing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills
