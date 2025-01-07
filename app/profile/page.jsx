"use client";
import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLaravel,
  FaPhp

} from 'react-icons/fa';

import { SiTailwindcss,
  SiNextdotjs,
  SiC,
  SiFirebase,
  SiTypescript,
  SiPostman,
  SiKubernetes,
  SiMongodb,
  SiMysql,

} from 'react-icons/si';

import { DiJqueryLogo, DiBitbucket } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";

const about = {
  title: "About Me",
  description: "",
  info:[
    {
    fieldName: "Name",
    fieldValue: "Kevan Mehta",
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 (469)-269-8726",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ year",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "kevanmehta2511@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },

  ]
}

const experience = {
  icon: '',
  title: 'My Experience',
  description: "A showcase of my professional journey, highlighting impactful roles and projects where I honed technical expertise, optimized performance, and delivered measurable results.",
  items:[
    {
      company: "Community Dreams Foundation",
      position: "Software Engineer",
      duration: "2024 - Present"
    },
    {
      company: "University of Texas at Dallas",
      position: "Teaching Assistant",
      duration: "2022 - 2024"
    },
    {
      company: "vDoIT Technologies",
      position: "Software Engineer",
      duration: "2022 - 2022"
    },
    {
      company: "ABC Infomedia",
      position: "Junior Software Engineer",
      duration: "2021 - 2021"
    },
    {
      company: "BISAG-N",
      position: "Machine Learning Engineer",
      duration: "2021 - 2021"
    },

  ]
}

const education = {
  icon: '',
  title: 'My Education',
  description: "An overview of my academic foundation, including degrees and institutions that shaped my understanding of computer science and engineering.",
  items:[
    {
      institution: "University of Texas at Dallas",
      degree: "Master of Science in Computer Science",
      duration: "2022 - 2024"
    },
    {
      institution: "Pandit Deendayal Energy University",
      degree: "Bachelor's in Computer Engineering",
      duration: "2018 - 2022"
    },
    {
      institution: "K D Ambani Vidyamandir",
      degree: "Secondary High School (Science)",
      duration: "2016 - 2018"
    },
    {
      institution: "K D Ambani Vidyamandir",
      degree: "High School",
      duration: "2006 - 2016"
    },
  ]
};

const skills = {
  title: "My Skills",
  description: "A comprehensive summary of my technical proficiencies, spanning programming languages, frameworks, cloud platforms, and tools that empower my solutions.",
  categories: [
    {
      category: "Programming Languages",
      skillList: [
        { icon: <FaHtml5 />, name: "HTML 5" },
        { icon: <FaCss3 />, name: "CSS 3" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaPython />, name: "Python" },
        { icon: <FaJava />, name: "Java" },
        { icon: <SiC />, name: "C" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaPhp />, name: "PHP" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skillList: [
        { icon: <FaReact />, name: "React.js" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTailwindcss />, name: "Tailwind.css" },
        { icon: <DiJqueryLogo />, name: "JQuery" },
        { icon: <FaLaravel />, name: "Laravel" },
        { icon: <BsBootstrap />, name: "Bootstrap" },
      ],
    },
    {
      category: "Tools & Platforms",
      skillList: [
        { icon: <FaAws />, name: "AWS" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <SiKubernetes />, name: "Kubernetes" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <DiBitbucket />, name: "Bitbucket" },
        { icon: <SiFirebase />, name: "Firebase" },
      ],
    },
    {
      category: "Databases",
      skillList: [
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
      ],
    },
  ],
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition:{delay: 2.4, duration: 0.4, ease:"easeIn"},
    }}
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
    <div className='container mx-auto'>
    <Tabs
    defaultValue='experience'
    className='flex flex-col xl:flex-row gap-[60px]'
    >
    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
    gap-6">
      <TabsTrigger value="experience">Experience</TabsTrigger>
      <TabsTrigger value="education">Education</TabsTrigger>
      <TabsTrigger value="skills">Skills</TabsTrigger>
      <TabsTrigger value="about">About Me</TabsTrigger>
    </TabsList>
    
    <div className='min-h-[70vh] w-full'>
      <TabsContent value = "experience" className = "w-full">
        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
        <h3 className='text-4xl font-bold'>{experience.title}</h3>
        <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
          {experience.description}
        </p>
        <ScrollArea className="h-[400px]">
          <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
            {experience.items.map((item, index) => {
              return (
                <li key={index}
                className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                flex flex-col justify-center items-center lg:items-start gap-1'
                >
                  <span className='text-accent' >{item.duration}</span>
                  <h3 className='text-xl max-w-[260px] min-h-[60px]
                  text-center lg:text-left' >{item.position}
                  </h3>
                  <div className='flex items-center gap-3'>
                    <span className='w-[6px] h-[6px] rounded-full bg-accent'>

                    </span>
                    <p className='text-white/60'>{item.company}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </ScrollArea>
        </div>
      </TabsContent>
      <TabsContent value = "education" className = "w-full">
      <div className='flex flex-col gap-[30px] text-center xl:text-left'>
        <h3 className='text-4xl font-bold'>{education.title}</h3>
        <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
          {education.description}
        </p>
        <ScrollArea className="h-[400px]">
          <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
            {education.items.map((item, index) => {
              return (
                <li key={index}
                className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                flex flex-col justify-center items-center lg:items-start gap-1'
                >
                  <span className='text-accent' >{item.duration}</span>
                  <h3 className='text-xl max-w-[260px] min-h-[60px]
                  text-center lg:text-left' >{item.degree}
                  </h3>
                  <div className='flex items-center gap-3'>
                    <span className='w-[6px] h-[6px] rounded-full bg-accent'>

                    </span>
                    <p className='text-white/60'>{item.institution}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </ScrollArea>
        </div>
      </TabsContent>
      <TabsContent value = "skills" className = "w-full h-full">
        <div className='flex flex-col gap-[30px]'>
          <div className='flex flex-col gap-[30px] text-center xl:text-left '>
            <h3 className='text-4xl font-bold'>{skills.title}</h3>
            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
              {skills.description}
            </p>
          </div>
          <ul className='grid grid-cols-2 sm:grid-cols-3 md:grids-cols-4 gap-4 xl:gap-[30px]'>
          {skills.categories.map((category, index) => (
                    <div key={index} className="category-container">
                      <h4 className="category-header">{category.category}</h4>
                      <ul className="skills-grid">
                        {category.skillList.map((skill, idx) => (
                          <li key={idx} className='skill-item'>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger
                                  className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group"
                                >
                                  <div
                                    className="text-6xl group-hover:text-accent transition-all duration-300"
                                  >
                                    {skill.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent className="tooltip-content">
                                  {skill.name}
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        ))}
                        </ul>
                    </div>
                  ))}
          </ul>
        </div>
      </TabsContent>
      <TabsContent 
      value = "about" 
      className = "w-full text-center xl:text-left"
      >
        <div className='flex flex-col gap-[30px]'>
            <h3 className='text-4xl font-bold'>{about.title}</h3>
            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
              {about.description}
            </p>
            <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
            mx-auto xl:mx-0'>
            {about.info.map((item, index) => {
              return (
                <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                  <span className='text-white/60'>{item.fieldName}</span>
                  <span
                    className={`text-xl ${
                    item.fieldName === "Email" ? "break-words max-w-full overflow-hidden" : ""
                  }`}
                  style={{
                    wordWrap: 'break-word',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                  }}
                  >
                    {item.fieldValue}
                  </span>
                </li>
              );
            })}

            </ul>
        </div>
      </TabsContent>
    </div>
    </Tabs>
    </div>

    </motion.div>
  )
}

export default Profile