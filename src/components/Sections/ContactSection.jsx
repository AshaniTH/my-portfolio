import React from 'react'
import {useState,useRef} from 'react'
import{ motion, useInView, useScroll, useTransform,} from "framer-motion"
import { useTheme } from '../../context/ThemeContext'
import { Send } from 'lucide-react'
import { CONTACT_iNFO, SOCIAL_LINKS } from '../../utils/data'
import { containerVariants,itemVariants } from '../../utils/helper'


const ContactSection = () => {
    const {isDarkMode} = useTheme();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
  return (
    <div className='text-white'>ContactSection</div>
  )
}

export default ContactSection