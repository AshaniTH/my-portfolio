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
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
    "Docker",
    "VS Code",
    "Figma",
    "Postman"
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
        title:"Project One",
        description:"A brief description of Project One highlighting its features and technologies used.",
        image: PROJECT_IMG_1,
        tags: ["HTML", "CSS"],
        liveUrl:"#",
        githubUrl:"#",
        featured:false,
        category:"Web Development",
        
    },
    {
        id:2,
        title:"Project Two",
        description:"A brief description of Project Two highlighting its features and technologies used.",  
        image: PROJECT_IMG_2,
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl:"#",
        githubUrl:"#",
        featured:false,
        category:"Web Development",

    },
       {
        id:3,
        title:"Project One",
        description:"A brief description of Project One highlighting its features and technologies used.",
        image: PROJECT_IMG_3,
        tags: ["React", "Node.js", "MongoDB"],
        liveUrl:"#",
        githubUrl:"#",
        featured:false,
        category:"Web Development",
        
    },
       {
        id:4,
        title:"Project Three",
        description:"A brief description of Project Three highlighting its features and technologies used.",
        image: PROJECT_IMG_4,
        tags: ["React", "Node.js", "MongoDB"],
        liveUrl:"#",
        githubUrl:"#",
        featured:false,
        category:"Web Development",
        
    },
       {
        id:5,
        title:"Project One",
        description:"A brief description of Project One highlighting its features and technologies used.",
        image: PROJECT_IMG_5,
        tags: ["React", "Node.js", "MongoDB"],
        liveUrl:"#",
        githubUrl:"#",
        featured:false,
        category:"Web Development",
        
    },
       {
        id:6,
        title:"Project One",
        description:"A brief description of Project One highlighting its features and technologies used.",
        image: PROJECT_IMG_6,
        tags: ["React", "Node.js", "MongoDB"],
        liveUrl:"#",
        githubUrl:"#",
        featured:false,
        category:"Web Development",
        
    },
     {
        id:7,
        title:"Project One",
        description:"A brief description of Project One highlighting its features and technologies used.",
        image: PROJECT_IMG_7,
        tags: ["React", "Node.js", "MongoDB"],
        liveUrl:"#",
        githubUrl:"#",
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
        title:"Bachelor of Science (Honours) in Computing and Information Systems",
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