import {
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
    Wrench,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

//import project images 
import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png"; 
import PROJECT_IMG_4 from "../assets/images/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project-5.png";
import PROJECT_IMG_6 from "../assets/images/project-6.png";
import PROJECT_IMG_7 from "../assets/images/project-7.png";



export const SKILLS_CATEGORY =[
    {
        title:"Frontend",
        icon:Code2,
        description:"Crafting beautiful, responsive user interfaces",
        skills:[
            
            {name:"React",level:90, color:"bg-blue-500"},
            {name:"HTML",level:95, color:"bg-blue-600"},
            {name:"CSS",level:95, color:"bg-gray-800"},
            {name:"JavaScript",level:95, color:"bg-cyan-500"},
            {name:"Tailwind CSS",level:85, color:"bg-pink-500"},
        ],

    },
    {
        title:"Backend",
        icon:Server,
        description:"Building robust server-side solutions",
        skills:[
            {name:"Node.js",level:90, color:"bg-green-500"},
            {name:"Express.js",level:85, color:"bg-gray-700"},
            {name:"PHP",level:80, color:"bg-purple-500"},
            {name:"laravel",level:75, color:"bg-yellow-500"},
            {name:"Rest API",level:80, color:"bg-pink-500"},


        ],

    },
    {title:"Databases",
        icon:Database,
        description:"Managing and optimizing data storage",
        skills:[
            {name:"MongoDB",level:85, color:"bg-green-600"},
            {name:"MySQL",level:90, color:"bg-blue-700"},
            {name:"Firebase",level:70, color:"bg-yellow-400"},

            
        ],
    },
    {
        title:"Tools & Platforms",
        icon:Wrench,
        description:"Utilizing essential development tools",
        skills:[
            {name:"Git",level:90, color:"bg-red-500"},
            {name:"GitHub",level:85, color:"bg-gray-900"},
            {name:"Docker",level:60, color:"bg-blue-400"},
            {name:"VS Code",level:90, color:"bg-orange-500"},
            {name:"Figma",level:75, color:"bg-purple-400"},
            {name:"Postman",level:60, color:"bg-pink-400"},
        ],
    },

];

export const TECH_STACK =[
    "Next.js",
  "TypeScript",
  "Redux Toolkit",
  "GraphQL",
  "Vite",
  "Bootstrap",
  "SASS",
  "JWT Authentication",
  "Cloudinary",
  "Render / Vercel Deployment",
  "RESTful APIs",
  "Agile Methodology",
  "Angular",
  "C",
  "Java",
  "Python",
];

export const STATS =[
    {number:"10+", label:"Projects Completed"},
    {number:"1", label:"Years of Experience"},
    {number:"5", label:"Technologies Mastered"},
    {number:"10+", label:"Certifications Earned"},
];

export const PROJECTS = [
    {
        id:1,
        title:"TravelLK",
        description:"A static travel guide website built with HTML and CSS, designed to assist tourists exploring Sri Lanka. Developed to strengthen core front-end and responsive web design skills.",
        image: PROJECT_IMG_1,
        tags: ["HTML", "CSS"],
        liveUrl:"https://drive.google.com/file/d/1DinE7DEaL0LcpNZrWh4dfXj_KXVbxA8L/view?usp=drive_link",
        githubUrl:"https://github.com/AshaniTH/travelLK",
        featured:false,
        category:"Web Development",
        
    },
    {
        id:2,
        title:"SLTB Transit Ease",
        description:"An online bus ticket booking system developed using HTML, CSS, JavaScript, PHP, and MySQL. Enables users to book, manage, and view bus schedules conveniently through a user-friendly interface.",  
        image: PROJECT_IMG_2,
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        liveUrl:"https://drive.google.com/file/d/1RVzIAmUlD1XUK_VgQNTdvIjfo0tDAiId/view?usp=drive_link",
        githubUrl:"https://github.com/Piumalhk/SLTB-TransitEase",
        featured:false,
        category:"Web Development",

    },
       {
        id:3,
        title:"VetAssist",
        description:"A pet care support mobile application built with Flutter (Dart) and Firebase. Integrates Gemini API for an intelligent chatbot and Google Maps API for nearby veterinary clinic searches.",
        image: PROJECT_IMG_3,
        tags: ["Flutter","Firebase"],
        liveUrl:"https://drive.google.com/file/d/1XLe5RD1FiLOFuxNaZqVl0U_XuIyILTN0/view?usp=sharing",
        githubUrl:"https://github.com/AshaniTH/VetAssist",
        featured:false,
        category:"Mobile App Development",
        
    },
       {
        id:4,
        title:"DocLink",
        description:"A full-stack doctor appointment booking system built using the MERN stack (MongoDB, Express.js, React, Node.js). Features dedicated modules for patients, doctors, and administrators.",
        image: PROJECT_IMG_4,
        tags: ["React", "Node.js", "Express", "MongoDB"],
        liveUrl:"https://drive.google.com/file/d/1HD4SHzsOXQjVxWwKFBhH_NmaVnih3G7N/view?usp=sharing",
        githubUrl:"https://github.com/AshaniTH/DocLink",
        featured:false,
        category:"Web Development",
        
    },
       {
        id:5,
        title:"BookStore",
        description:"A bookshop management and POS system developed using HTML, CSS, JavaScript, PHP, and MySQL. Supports book inventory management, sales tracking, and billing operations.",
        image: PROJECT_IMG_5,
        tags: ["HTML", "CSS", "JavaScript","PHP", "MySQL"],
        liveUrl:"https://drive.google.com/file/d/1emcNfwbfbx3xjU3f-dMGBjrH3GiyyrIv/view?usp=drive_link",
        githubUrl:"https://github.com/AshaniTH/bookstore",
        featured:false,
        category:"Web Development",
        
    },
       {
        id:6,
        title:"My Portfolio Website",
        description:"A personal portfolio website showcasing my projects and skills, built with React and Node.js.",
        image: PROJECT_IMG_6,
        tags: ["React", "Node.js","Framer Motion"],
        liveUrl:"https://my-portfolio-theta-six-64.vercel.app/",
        githubUrl:"https://github.com/AshaniTH/my-portfolio",
        featured:false,
        category:"Web Development",
        
    },
     {
        id:7,
        title:"MediTrackSUSL",
        description:"A university medical center management system built using Laravel 8, PHP 7, Docker, and Bootstrap. Streamlines patient record management, appointments, and reporting for medical staff.",
        image: PROJECT_IMG_7,
        tags: ["Laravel 8" , "PHP 7","BootStrap","Docker"],
        liveUrl:"#",
        githubUrl:"https://github.com/kavindalj/MediTrack_SUSL",
        featured:false,
        category:"Web Development",
        
    },
];
export const JOURNEY_STEPS = [
    {
        year:"2017",
        title:"GCE Ordinary level examination",
        Company:"K/Sangamiththa girls school Aluthgama",
        description:"Completed GCE O/L with 9A's",
        icon:GraduationCap,
        color:"bg-blue-500",
    },
    {
        year:"2021",
        title:"GCE Advanced level examination",
        Company:"CWW Kannangara college mathugama",
        description:"Completed GCE A/L with 1B & 2C's",
        icon:GraduationCap,
        color:"bg-green-500",
    },
    {
        year:"2023",
        title:"BSc. (Hons) in Computing & Information Systems",
        Company:"Sabaragamuwa University of Sri Lanka",
        description:"Reading",
        icon:GraduationCap,
        color:"bg-purple-500",},

];

export const PASSIONS = [
    {
        icon:Heart,
        title:"user Experience",
        description:"Crafting inuitive interfaces that users love",

    },
    {
        icon:Coffee,
        title:"Problem Solving",
        description:"Turning complex challenges into elegant solutions",
    },
    {
        icon: BookOpen,
        title:"Continuous Learning",
        description:"Staying updated with the latest tech trends and best practices",
    },
];

export const SOCIAL_LINKS = [
    {
        name:"GitHub",
        icon:FiGithub,
        url:"https://github.com/AshaniTH",
        color:"hover:text-gray-400",
        bgColor:"hover:bg-gray-900",
    },
    {
        name:"LinkedIn",
        icon:FiLinkedin,
        url:"https://www.linkedin.com/in/ashani-tharukshi-03955a2a7/",
        color:"hover:text-blue-400",
        bgColor:"hover:bg-blue-500/10",
    },
    {
        name:"Email",
        icon:Mail,
        url:"mailto:ashanitharukshi2002@gmail.com",
        color:"hover:text-red-400",
        bgColor:"hover:bg-red-500/10",
    },

];

export const CONTACT_INFO = [
    {
        icon:MapPin,
        label:"Location",
        value:"Colombo, Sri Lanka",
    },
    {
        icon:Mail,
        label:"Email",
        value:"ashanitharukshi2002@gmail.com",

    },
    {
        icon:Phone,
        label:"Phone",
        value:"+94 76 7064692",
    },
];