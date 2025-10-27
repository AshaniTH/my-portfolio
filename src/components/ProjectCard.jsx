import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'


const ProjectCard = ({project, index, isDarkMode}) => {
    const cardVariants ={
        hidden:{y:20, opacity:0},
        visible:{
            y:0,
            opacity:1,
            transition:{
                duration:0.6,
                ease:"easeOut",
            },
        },

    };
  return (
    <motion.div
    variants = {cardVariants}
    whileHover={{
      y:-8,
      transition:{duration:0.3, ease:"easeOut"},
    }}
    className="group relative"
    >
      <div
      className={`rounded-2xl overflow-hidden border transition-all duration-500 ${
        isDarkMode
        ? "bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 "
        : "bg-white/80 border-gray-200 hover:border-gray-300 hover:shadow-2xl hover:shadow-blue-500/10"
      }backdrop-blur-sm`}
      >
        {/* Project Image */}
        <div className=''>
        <img src={project.image} alt={project.title} 
        className='' />

        {/*Featured badge*/}
        {project.featured && (
          <div className="">
            <span className=''>
              Featured

            </span>

          </div>
        )}
        {/*Category Badge*/}
        <div className=''>
          <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            isDarkMode
            ? "bg-gray-800/80 text-gray-300"
            :"bg-white/80 text-gray-700"
          } backdrop-blur-sm`}
          >
            {project.category}
            

          </span>
        </div>
        </div>


      </div>

    </motion.div>
  )
}

export default ProjectCard