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
    <div>ProjectCard</div>
  )
}

export default ProjectCard