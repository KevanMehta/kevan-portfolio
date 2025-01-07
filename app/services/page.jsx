"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: '01',
    title: 'Full Stack Development',
    description: 'I design and build complete web applications,\
    combining beautiful, responsive frontends with powerful,\
    efficient backends. Whether it\'s crafting engaging user\
    interfaces with React or developing robust APIs with Java\
    and Python, I ensure seamless user experiences and scalable solutions.',
    href:'',
  },
  {
    num: '02',
    title: 'Performance Optimization',
    description: 'I enhance application performance by reducing load times,\
    improving system efficiency, and ensuring smooth user interactions. Using\
    tools like Docker, Kubernetes, and SQL optimizations, I focus on making\
    applications faster, scalable, and reliable for thousands of users.',
    href:'',
  },
  {
    num: '03',
    title: 'Machine Learning Solutions',
    description: 'I develop smart, data-driven solutions like recommendation\
    systems and real-time analytics using machine learning. Leveraging tools\
    such as TensorFlow, PyTorch, and Pandas, I create models that deliver\
    accurate predictions and insights, helping businesses make better\
    decisions.',
    href:'',
  },
  {
    num: '04',
    title: 'Cloud Deployment and DevOps Automation',
    description: 'I deploy and manage applications on cloud platforms like\
    AWS and Azure to ensure high availability and reliability. By automating\
    processes with tools like Docker and CI/CD pipelines, I enable fast,\
     secure, and efficient software releases.',
     href:'',
  },
]
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{opacity:0}}
          animate={{
            opacity: 1,
            transition:{delay: 2.4, duration: 0.4, ease: "easeIn"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
        {services.map((service, index) => {
          return (
            <div key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center ">
                <div className="text-5xl font-extrabold text-outline
                text-transparent group-hover:text-outline-hover transition-all
                duration-500">{service.num}</div>
                <Link href={service.href}
                className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent
                transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >

                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
            <h2 className="text-[42px] font-bold leading-none text-white
            group-hover:text-accent transition-all duration-500">{service.title}</h2>
            <p className="text-white/60">{service.description}</p>
            <div className="border-b border-white/20 w-full"></div>
            </div>
          );
        })}
          
        </motion.div>
      </div>
    </section>
  )
}

export default Services