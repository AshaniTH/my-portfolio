import React from 'react'
import {useRef} from "react";
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Code2, Globe, Zap, Users } from 'lucide-react';

import { useTheme } from '../../context/ThemeContext';
import { PROJECTS } from '../../utils/data';
import ProjectCard from '../ProjectCard';
import { containerVariants, itemVariants }  from '../../utils/helper';
import { div } from 'framer-motion/client';


const ProjectSection = () => {
    const {isDarkMode} = useTheme();
    const sectionRef = useRef (null);
    const isInView = useInView(sectionRef, {once: true, margin: "-100px"});
  return (
    <section
    id= "work"
    ref={sectionRef}
    className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" :"bg-gray-50 text-gray-900"
    }relative overflow-hidden`}
    >
        {/*background elements*/}
        <div
        className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
        }`}
        ></div>

        <div
        className={`absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
        }`}
        >

        </div>
        <div className="max-w-7xl mx-auto relative z-10">
           {/* section header */} 
           <motion.div
           initial="hidden"
           animate={isInView ? "visible" : "hidden"}
           variants={containerVariants}
           className=''
           >
            <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest ${
                isDarkMode ? "text-gray-500" :"text-gray-600"
            }mb-4`}
            >
                Featured Work

            </motion.div>

           </motion.div>

        </div>

    </section>

  )
}

export default ProjectSection