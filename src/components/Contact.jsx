import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import Earth from "./canvas/Earth";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { ToastContainer, toast } from "react-toastify";

// M0ZDUZt5zQTIdVaB6
// template_q0iciro
// ibnemazhar's_1o39i0qh91

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    setLoading(true);

    emailjs
      .send(
        "ibnemazhar's_1o39i0qh91",
        "template_q0iciro",
        {
          from_name: form.name,
          to_name: "Huzaifa",
          from_email: form.email,
          to_email: "ibnemazhar.official@gmail.com",
          message: form.message,
        },
        "M0ZDUZt5zQTIdVaB6"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for considering me, I'll reach out to you as soon as possible"
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went Wrong");
         
        }
      );
  };

  return (
    
  
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
   
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:w-1/2 bg-black-100 p-8 rounded-2xl "
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="mt-12 flex flex-col gap-8 "
        >
          <label className="flex flex-col">
            <span className="text-white font-meduim mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white 
            rounded-lg border-none outline-none font-medium"
            ></input>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-meduim mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white 
            rounded-lg border-none outline-none font-medium"
            ></input>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-meduim mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white 
            rounded-lg border-none outline-none font-medium "
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit  font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:w-1/2 xl:h-auto md:h-[550px] h-[350px] 
      "
      >
        <EarthCanvas />
      </motion.div>
    </div>
    
  );
};

export default SectionWrapper(Contact, "contact");
