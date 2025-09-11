import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const ContentSection = ({ number, subtitle, title, description, buttonText, imageSrc, imageAlt, reverse = false }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden bg-mntn-dark">
      {/* Background Number */}
      <div className="absolute inset-0 flex items-start pointer-events-none">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[200px] sm:text-[240px] md:text-[280px] lg:text-[250px] font-bold font-chronicle text-white select-none"
          style={{
            lineHeight: "1",
            transform: reverse
              ? "translateX(calc(100vw - 500px)) translateY(80px)"
              : "translateX(-50px) translateY(80px)",
          }}
        >
          {number}
        </motion.span>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
            reverse ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Text Content */}
          <motion.div
            initial={{ x: reverse ? 100 : -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: reverse ? 100 : -100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`${reverse ? "lg:col-start-2" : ""} space-y-6 md:space-y-8`}
          >
            {/* Subtitle with line */}
            <div className="flex items-center">
              <div className="w-[72px] h-[2px] bg-mntn-teal mr-6"></div>
              <span className="text-mntn-teal text-[16px] md:text-[18px] font-extrabold font-gilroy tracking-[4px] md:tracking-[6px] uppercase">
                {subtitle}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-white font-chronicle font-semibold text-[36px] sm:text-[48px] md:text-[64px] leading-[44px] sm:leading-[58px] md:leading-[77px] max-w-[500px] text-balance">
              {title}
            </h2>

            {/* Description */}
            <p className="text-white text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] font-gilroy max-w-[520px] opacity-90 text-pretty">
              {description}
            </p>

            {/* Read More Button */}
            <motion.button
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
              className="flex items-center text-mntn-teal text-[16px] md:text-[18px] font-bold font-gilroy group pt-4"
            >
              <span className="mr-4">{buttonText}</span>
              <motion.svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  d="M1 8H23M23 8L16 1M23 8L16 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ x: reverse ? -100 : 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: reverse ? -100 : 100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`${reverse ? "lg:col-start-1 lg:row-start-1" : ""}`}
          >
            <div className="relative group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-2xl"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-mntn-dark/20 to-transparent rounded-lg group-hover:from-mntn-dark/10 transition-all duration-300"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContentSection
