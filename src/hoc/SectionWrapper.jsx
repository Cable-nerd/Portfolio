import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";


const SectionWrapper = (Component, idName) => 
function HOC() {


    return (
        <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        transition={{
            duration: 1.5,
        }}
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className="hash-span" id={idName}>
            &nbsp;
            </span>
            <Component />
        </motion.section>
    )

}

export default SectionWrapper


// now we have to figure out a way to slowly move to the empty space after clickign the mouse gif