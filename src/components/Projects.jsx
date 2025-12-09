import { FiExternalLink } from "react-icons/fi"

const Projects = () => {
    return (
      <div className="border-b border-neutral-800 pb-16">
        <h1 className="my-16 text-center text-4xl">Projects</h1>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
            {/* Project 1 */}
            <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Kalakendra</h2>
                <a href="https://kalakendra-lilac.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  <FiExternalLink className="text-2xl" />
                </a>
              </div>
              <p className="text-sm text-gray-400 mb-3">MERN, Razorpay, Cloudinary</p>
              <ul className="text-sm text-gray-300 list-disc list-inside space-y-1.5 flex-grow">
                <li>Developed a full-stack workshop booking platform connecting learners with artists for online and offline sessions.</li>
                <li>Built responsive frontend using React.js and Tailwind CSS with JWT authentication and private route protection.</li>
                <li>Implemented RESTful APIs using Node.js and Express.js with MongoDB Atlas for data storage.</li>
                <li>Integrated Razorpay payment gateway for secure enrollment and backend verification flow.</li>
                <li>Created dashboards for artists and learners to enroll in workshops, track progress, and submit ratings and reviews.</li>
              </ul>
            </div>
    
            {/* Project 2 */}
            <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 flex flex-col">
              <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">DigiGallery</h2>
              <p className="text-sm text-gray-400 mb-3">Node, Express, PostgreSQL, Filebase, React</p>
              <ul className="text-sm text-gray-300 list-disc list-inside space-y-1.5 flex-grow">
                <li>Built a full-stack wedding gallery platform where users can create events, invite guests, and manage photo/video uploads.</li>
                <li>Implemented JWT-based authentication, email verification, and role-based permissions (owner, invited users, public).</li>
                <li>Developed RESTful APIs using Node.js, Express, and PostgreSQL for event and media management.</li>
                <li>Integrated Amazon S3-compatible Filebase for secure uploads with validation and database linkage.</li>
              </ul>
            </div>
    
            {/* Project 3 */}
            <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Journey Craft</h2>
                <a href="https://journey-craft-front-end.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
                  <FiExternalLink className="text-2xl" />
                </a>
              </div>
              <p className="text-sm text-gray-400 mb-3">MERN, Figma</p>
              <ul className="text-sm text-gray-300 list-disc list-inside space-y-1.5 flex-grow">
                <li>Developed a full-stack trip management web app for custom itineraries and seamless travel planning.</li>
                <li>Integrated dual user roles (Traveler & Agency) with booking, personalization, and reward systems.</li>
              </ul>
            </div>
    
            {/* Project 4 */}
            <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 flex flex-col">
              <h2 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">Breast Cancer Detection and Segmentation</h2>
              <p className="text-sm text-gray-400 mb-3">PyTorch, U-Net, DICOM/CSV</p>
              <ul className="text-sm text-gray-300 list-disc list-inside space-y-1.5 flex-grow">
                <li>Built a deep learning model using a custom U-Net architecture in PyTorch for tumor segmentation in mammogram images.</li>
                <li>Worked with real-world datasets (CBIS-DDSM) using DICOM and CSV preprocessing for medical image analysis.</li>
              </ul>
            </div>
    
            {/* Project 5 */}
            <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 flex flex-col md:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Write IT</h2>
                <a href="https://mern-project-six-red.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <FiExternalLink className="text-2xl" />
                </a>
              </div>
              <p className="text-sm text-gray-400 mb-3">MERN</p>
              <ul className="text-sm text-gray-300 list-disc list-inside space-y-1.5 flex-grow">
                <li>Created a full-stack story writing and publishing web app enabling users to write, read, and share stories interactively.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Projects
  