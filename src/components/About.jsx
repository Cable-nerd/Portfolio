import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../utils/constants"; // the main data for what to we provide in json format
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";


export const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w=[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card border-2 border-green-500 bg-pink-500 hover:border-green-300 hover:bg-pink-300 transition duration-300"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] 
          py-5 px-12 min-h-[280px]
          flex flex-col justify-center items-center"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variant={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading=[30px]"
      >
        Hi, I am a highly motivated self-taught FullStack web developer with
        focus on frontend, my experience is in
        Html5,Css3,Bootstrap,Javascript,React.js, Redux toolkit, Firebase, Git,
        and a bit of node and express aswell, I learned how to program through
        research and practice. My enthusiasm towards making an impact in this
        era of advancments, fuled me towards my self-learning. I have been
        practicing it since 2022. Throughout my learning I've created projects
        and I will be creating more and more projects as I keep on learning
        more, My Goal is to help buisenesses, Tech companies and all sorts of
        companies in the digital world and help them stomp a solid impact on the
        globe
      </motion.p>

      <div className="mt-20 ml-5 mr-5 grid grid-cols-2 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");





