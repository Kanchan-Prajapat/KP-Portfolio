import mern from "../assets/certificates/ZeetronMern.jpg";
import mnit from "../assets/certificates/MNIT.jpeg";
import webdev from "../assets/certificates/WebMyCaptain.jpeg";
import python from "../assets/certificates/PythonMyCaptain.jpeg";
import sql from "../assets/certificates/SQLMyCaptain.jpeg";
import excel from "../assets/certificates/ExcelMyCaptain.jpeg";

import hackathon4 from "../assets/certificates/codefiesta4.jpeg";
import hackathon3 from "../assets/certificates/codefiesta3.jpeg";
import aiBuilders from "../assets/certificates/AIBuilder.jpeg";
import AI from "../assets/certificates/AIMyCaptain.jpeg";
import badminton from "../assets/certificates/Vanquish.jpeg";
import { MessageCircleWarningIcon } from "lucide-react";

const certificates = [
  {
    title: "MERN Stack Internship",
    issuer: "Zeetron Networks",
    image: mern,
    category: "Professional"
  },

   {
    title: "CodeFiesta Hackathon 4.0",
    issuer: "Global Institute of Technology",
    image: hackathon4,
    category: "Achievement"
  },

  {
    title: "CodeFiesta Hackathon 3.0",
    issuer: "Global Institute of Technology",
    image: hackathon3,
    category: "Achievement"
  },


  {
    title: "Web Development",
    issuer: "MyCaptain",
    image: webdev,
    category: "Professional"
  },

  {
    title: "Python Programming",
    issuer: "MyCaptain",
    image: python,
    category: "Professional"
  },

    {
    title: "Artificial Intelligence",
    issuer: "MyCaptain",
    image: AI,
    category: "Professional"
  },
  
   {
    title: "Minute To Pitch It",
    issuer: "MNIT Jaipur",
    image: mnit,
    category: "Achievement"
  },

  {
    title: "Intro to SQL",
    issuer: "MyCaptain",
    image: sql,
    category: "Professional"
  },

  {
    title: "Advanced Excel",
    issuer: "MyCaptain",
    image: excel,
    category: "Professional"
  },

  {
    title: "AI Builders Lab",
    issuer: "Google for Developers",
    image: aiBuilders,
    category: "Achievement"
  },

  {
    title: "Vanquish Sports Fest",
    issuer: "GIT Jaipur",
    image: badminton,
    category: "Achievement"
  }
];


export default certificates;