const Projects = () => {
    return (
      <div className="border-b border-neutral-800 pb-16 mt-8">
        <h1 className="my-10 text-center text-3xl">Projects</h1>
        <div className="px-8 space-y-8">
          
          {/* Project 1 */}
          <div>
            <h2 className="text-lg font-semibold mb-1">Beat Boutique - Music Management App</h2>
            <p className="text-sm text-gray-400 mb-1">Technologies: Python, Tkinter</p>
            <p className="text-xs text-gray-300">
              A music management application where users can listen to music, create and manage playlists, save albums, and maintain their profiles. Built using Tkinter for a user-friendly interface.
            </p>
          </div>
  
          {/* Project 2 */}
          <div>
            <h2 className="text-lg font-semibold mb-1">Sustainable Development Goals (SDG) Prediction</h2>
            <p className="text-sm text-gray-400 mb-1">Technologies: Machine Learning, Data Analysis</p>
            <p className="text-xs text-gray-300">
              A machine learning project aimed at analyzing data to determine sustainability in relation to SDGs, involving data processing, model building, and assessment.
            </p>
          </div>
  
          {/* Project 3 */}
          <div>
            <h2 className="text-lg font-semibold mb-1">Air Quality Index Prediction and Classification</h2>
            <p className="text-sm text-gray-400 mb-1">Technologies: Machine Learning, Data Science</p>
            <p className="text-xs text-gray-300">
              Developed a machine learning model to predict and classify air quality levels, including data preprocessing, feature engineering, and model optimization.
            </p>
          </div>
  
          {/* Project 4 */}
          <div>
            <h2 className="text-lg font-semibold mb-1">Portfolio Website (React)</h2>
            <p className="text-sm text-gray-400 mb-1">Technologies: React, TailwindCSS</p>
            <p className="text-xs text-gray-300">
              Created a modern portfolio website using React and TailwindCSS, featuring smooth navigation and dynamically rendered content for an enhanced user experience.
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Projects
  