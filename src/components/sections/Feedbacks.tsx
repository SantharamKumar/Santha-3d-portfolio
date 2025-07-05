import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { testimonials } from "../../constants";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";
import { config } from "../../constants/config";

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
  name,
  designation,
  company,
}) => {
  const getCertificationLink = (certName: string) => {
    switch (certName) {
      case "Pega Certified Senior System Architect":
        return "https://accounts.pega.com/profile/SantharamK/share/BPEGAPCSSA86V1-PEGAPCSSA86V1";
      case "Pega Certified System Architect":
        return "https://accounts.pega.com/profile/SantharamK/share/BPEGAPCSA84V1-PEGAPCSA84V1";
      default:
        return "https://accounts.pega.com/profile/SantharamK";
    }
  };

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="relative bg-black-200 xs:w-[320px] w-full rounded-3xl p-10 cursor-pointer hover:bg-black-300 transition-all duration-300 overflow-hidden group"
      onClick={() => window.open(getCertificationLink(name), '_blank')}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-20 animate-pulse group-hover:opacity-40 group-hover:animate-spin transition-all duration-300"></div>
      <div className="absolute inset-[2px] rounded-3xl bg-black-200 group-hover:bg-black-300 transition-all duration-300"></div>
      <div className="relative z-10 group-hover:scale-105 transition-transform duration-300">
      <p className="text-[48px] font-black text-white"></p>

      <div className="mt-1">
        <p className="text-[18px] tracking-wider text-white">{testimonial}</p>

        <div className="mt-7">
          <div className="flex flex-col">
            <p className="text-[16px] font-medium text-white">
              <span className="blue-text-gradient"></span> {name}
            </p>
            <p className="text-secondary mt-1 text-[12px]">
              {designation} • {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
      >
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
