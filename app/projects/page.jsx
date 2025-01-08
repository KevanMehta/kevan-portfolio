"use client";

import { motion } from "framer-motion";
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import WorkSliderBtns from "@/components/WorkSliderBtns";

const Projects = [
  {
    num:"01",
    category:"ML/Big Data",
    title:"Political Sentiment Analysis",
    description:"This project leverages big data technologies and machine learning models to analyze political leaders' tweets, offering real-time insights into public sentiment.",
    stack:[{name:"ElasticSearch"}, {name:"Kafka"}, {name:"Kibana"}, {name:"Apache Spark"}, {name:"Logstash"}],
    image:"/assets/work/Political_Sentiment.png",
    live:"",
    github:"https://github.com/KevanMehta/Political-Sentiment-Analysis",
  },
  {
    num:"02",
    category:"Full Stack",
    title:"NFT Transaction System",
    description:"This is a web-based platform enabling seamless NFT buying, selling, and transaction management with a robust Angular frontend, Flask backend, and MySQL database, offering features like cancellations and manager-level analytics.",
    stack:[{name:"Angular"}, {name:"Flask"}, {name:"MySQL"}, {name:"HTML/CSS"}],
    image:"/assets/work/NFT_Transaction.png",
    live:"",
    github:"https://github.com/KevanMehta/NFT-Transaction-System",
  },
  {
    num:"03",
    category:"AI/ML",
    title:"Self Driving Car",
    description:"This project utilizes the open-source Udacity Simulator to demonstrate autonomous vehicle functionality, featuring a Python-based environment for running and testing car automation in simulation.",
    stack:[{name:"Python"}, {name:"Keras"}, {name:"Pandas"}, {name:"Matplotlib"}, {name:"NumPy"}],
    image:"/assets/work/AI.png",
    live:"",
    github:"https://github.com/KevanMehta/Self-Driving-Car",
  },
  {
    num:"04",
    category:"Full Stack",
    title:"Disk Scheduling Algorithm",
    description:"It is a tool that simplifies complex disk scheduling algorithms through interactive 2D/3D visualizations, summaries, and simulations, aiding users in understanding R/W head movements and optimizing system performance.",
    stack:[{name:"ReactJS"}, {name:"CanvasJS"}, {name:"Firebase"}, {name:"MaterialUI"}, , {name:"Lodash"}, , {name:"React-Plotly"}],
    image:"/assets/work/Disk_Scheduling.png",
    live:"https://disk-visualizer.web.app/",
    github:"https://github.com/KevanMehta/OS-disk-Scheduling",
  },
  {
    num:"05",
    category:"ML",
    title:"Movie Recommendation System",
    description:"It is based on providing movie recommendations based on the past watched movies, genres and based on IMDB rating.",
    stack:[{name:"Flask"}, {name:"SQL"}, {name:"HTML 5"}, {name:"Css 3"}],
    image:"/assets/work/Movie_Recommendation.png",
    live:"",
    github:"https://github.com/KevanMehta/Movie_Recommendation_Systems",
  },
  {
    num:"06",
    category:"Front-End",
    title:"Paisa Tips",
    description:"It is a static blog page which provides infomation about stock market, crypto and tips to save tax and information regarding the accounting",
    stack:[{name:"HTML 5"}, {name:"Css 3"}, {name:"BootStrap"}, {name:"JavaScript"} ],
    image:"/assets/work/Paisa_tips.png",
    live:"",
    github:"https://github.com/KevanMehta/paisatips/tree/main",
  },
  {
    num:"07",
    category:"Front-End",
    title:"PDPU Home Page",
    description:"A responsive single-page university website for PDPU featuring dual image carousels, interactive navigation, and comprehensive information sections about academics and campus life, built with HTML5, CSS3, and vanilla JavaScript.",
    stack:[{name:"HTML 5"}, {name:"Css 3"}, {name:"BootStrap"}, {name:"JavaScript"} ],
    image:"/assets/work/PDPU-HomePage.png",
    live:"",
    github:"https://github.com/KevanMehta/PDPU-HomePage",
  },

]


const projects = () => {
  const [project, setProject] = useState(Projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(Projects[currentIndex]);
  }
  return (
    <motion.section
     initial={{opacity: 0}}
     animate={{
      opacity:1,
      transition:{delay:2.4, duration:0.4, ease:'easeIn'},
     }}
     className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
     >
     <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between
        order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="text-8xl leading-none font-extrabold text-transparent
            text-outline">
              {project.num}
            </div>
            <h2 className="text-[42px] font-bold leading-none text-white
            group-hover:text-accent transition-all duration-500 capitalize">
             {project.title}
            </h2>
            <p className="text-white/60">{project.description}</p>
            <ul className="flex flex-wrap gap-4 mt-4">
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>
            <div className="border border-white/20"></div>
            <div className="flex items-center gap-4">
            {project.live && (
            <Link 
            href={project.live}
            target="_blank"
            >
            <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                    bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl
                      group-hover:text-accent" />               
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
            </Link>
            )}
              <Link 
              href={project.github}
              target="_blank"
              >
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                    bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl
                      group-hover:text-accent" />               
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
            spaceBetween = {30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
            {Projects.map((project, index) => {
              return (
                <SwiperSlide key={index} className="w-full">
                  <div className="relative group flex justify-center
                  items-center bg-pink-50/20">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  <div className="relative" style={{ width: "460px", height: "460px" }}>
                  <Image
                    src={project.image}
                    fill
                    className="object-contain"
                    alt=""
                  />

                  </div>
                  </div>
                </SwiperSlide>
              );
            })}
              <WorkSliderBtns 
                containerStyles="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4 z-20"
        btnStyles="bg-white/80 p-2 rounded-full shadow-md hover:bg-accent transition"
        iconStyles="text-xl text-black"
              />
            </Swiper>
            
          </div>
      </div>
    </div>

    </motion.section>
  );
};

export default projects