import { motion } from "framer-motion";
import { github } from "../assets";
import { linkedin } from "../assets";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <div className="flex justify-center">
          <div 
            onClick={() => window.open("https://www.linkedin.com/in/sebastian-alexandru", "_blank")}
            className='cursor-pointer'
          >
            <img src={linkedin} alt="linkedin" className='w-[100px] h-[100px] p-5' />
            &nbsp;
          </div>
          <div 
            onClick={() => window.open("https://github.com/sebastian-alexandru", "_blank")}
            className='cursor-pointer'
          >
            <img src={github} alt="github" className='w-[100px] h-[100px] p-5' />
            &nbsp;
          </div>
        </div>
        <div>
          <p>Or leave me a message at:</p>
          <p className="blue-text-gradient text-sm">sebastian.alexandru9885@gmail.com</p>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
