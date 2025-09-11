import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const Hero = () => {
  const ref = useRef(null)
  const [isMounted, setIsMounted] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    window.scrollTo(0, 0)

    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 300)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: isReady ? ref : null,
    offset: ["start start", "end start"],
  })

  // For mobile: limit parallax to first screen only (0 to 0.5 progress)
  // For desktop: full parallax effect
  const skyY = useTransform(
    scrollYProgress,
    [0, isMobile ? 0.5 : 1],
    ["0%", isMobile ? "-50%" : "-200%"]
  )
  const mountainY = useTransform(
    scrollYProgress,
    [0, isMobile ? 1.5 : 1],
    [isMobile ? "30%" : "25%", isMobile ? "-0%" : "-90%"]
  )
  const foregroundY = useTransform(
    scrollYProgress,
    [0, isMobile ? 0.5 : 1],
    ["0%", isMobile ? "0%" : "-50%"]
  )
  const contentY = useTransform(
    scrollYProgress,
    [0, isMobile ? 0.5 : 1],
    ["0%", isMobile ? "-25%" : "-50%"]
  )
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, isMobile ? 0.5 : 0.7],
    [1, isMobile ? 0.8 : 0]
  )

  // Function to handle scroll down
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * (isMobile ? 0.9 : 1.4),
      behavior: 'smooth'
    })
  }

  if (!isMounted) return null

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        height: isMobile ? "100vh" : "150vh",
        margin: 0,
        padding: 0,
      }}
    >
      <div className="absolute inset-0 w-full h-full">
        {isReady && (
          <>
            {/* Sky layer */}
            <motion.div
              style={{
                y: skyY,
              }}
              className="absolute inset-0 w-full h-full z-0 bg-[url(/HG.png)] bg-cover bg-top"
            />

            {/* Mountain layer */}
            <motion.div
              style={{
                y: mountainY,
              }}
              className="absolute inset-0 w-full h-full z-10 bg-[url(/MG.png)] bg-cover bg-center"
            />

            {/* Foreground layer */}
            <motion.div
              style={{
                y: foregroundY,
              }}
              className="absolute inset-0 w-full h-full z-20 bg-[url(/VG.png)] bg-contain bg-bottom bg-no-repeat"
            />
          </>
        )}
      </div>

      {/* Overlay */}
<div
  className="absolute inset-0 z-30"
  style={{
    background: isMobile
      ? `
        linear-gradient(to top,
          rgba(11, 29, 39, 0.9) 0%,
          rgba(11, 29, 39, 0.8) 15%,
          rgba(11, 29, 39, 0.7) 30%,
          rgba(11, 29, 39, 0.6) 45%,
          rgba(11, 29, 39, 0.5) 60%,
          rgba(11, 29, 39, 0.4) 75%,
          rgba(11, 29, 39, 0.3) 90%,
          transparent 100%
        )
      `
      : `
        linear-gradient(to top,
          rgba(11, 29, 39, 1) 0%,
          rgba(11, 29, 39, 0.98) 10%,
          rgba(11, 29, 39, 0.95) 20%,
          rgba(11, 29, 39, 0.88) 30%,
          rgba(11, 29, 39, 0.78) 40%,
          rgba(11, 29, 39, 0.65) 50%,
          rgba(11, 29, 39, 0.5) 60%,
          rgba(11, 29, 39, 0.35) 70%,
          rgba(11, 29, 39, 0.22) 80%,
          rgba(11, 29, 39, 0.12) 90%,
          rgba(11, 29, 39, 0.05) 95%,
          transparent 100%
        )
      `
  }}
/>


      {/* Content container */}
      <motion.div
        style={isReady ? { y: contentY, opacity: contentOpacity } : {}}
        className="relative z-40 max-w-[1440px] mx-auto px-6 lg:px-20 w-full h-full flex items-center"
      >
     <div className="w-full -mt-50 sm:-mt-80 lg:-mt-90">
  {/* All content aligned to center */}
  <div className="text-center w-full max-w-4xl mx-auto">
    {/* A Hiking Guide - Center aligned */}
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="mb-4 md:mb-6 flex justify-center"
    >
      <div className="flex items-center mb-4 md:mb-8">
        <div className="w-[40px] sm:w-[60px] md:w-[72px] h-[2px] bg-mntn-teal mr-4 md:mr-6"></div>
        <span className="text-mntn-teal text-[14px] sm:text-[16px] md:text-[18px] font-extrabold font-gilroy tracking-[4px] sm:tracking-[5px] md:tracking-[6px] uppercase">
          A HIKING GUIDE
        </span>
      </div>
    </motion.div>

    {/* Main heading - Responsive line breaks */}
    <motion.h1
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="text-white font-chronicle font-semibold text-[42px] sm:text-[48px] md:text-[64px] lg:text-[78px] leading-[38px] sm:leading-[58px] md:leading-[77px] lg:leading-[100px] mb-6 md:mb-8 text-center"
    >
      {/* Mobile: 4 lines */}
      <div className="md:hidden">
        <div className="block">Be Prepared</div>
        <div className="block">For The</div>
        <div className="block">Mountains And</div>
        <div className="block">Beyond!</div>
      </div>

      {/* Desktop: 2 lines */}
      <div className="hidden md:block">
        <div className="block">Be Prepared For The</div>
        <div className="block">Mountains And Beyond!</div>
      </div>
    </motion.h1>

    {/* Scroll down - Center aligned */}
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex items-center cursor-pointer mt-8 md:mt-10 justify-center"
      onClick={handleScrollDown}
    >
      <span className="text-white text-[14px] sm:text-[16px] md:text-[18px] font-bold font-gilroy mr-3 md:mr-4">scroll down</span>
      <motion.svg
        width="14"
        height="20"
        viewBox="0 0 16 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <path
          d="M8 1V23M8 23L1 16M8 23L15 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.div>
  </div>
</div>
      </motion.div>
    </section>
  )
}

export default Hero