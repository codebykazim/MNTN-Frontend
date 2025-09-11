import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="bg-mntn-dark pt-32 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-[32px] font-bold font-chronicle text-white tracking-wider mb-6">MNTN</h2>
            <p className="text-white text-[18px] leading-[32px] font-gilroy max-w-[300px] opacity-90">
              Get out there & discover your next slope, mountain & destination!
            </p>
          </motion.div>

          {/* More on The Blog */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-mntn-teal text-[24px] font-bold font-gilroy mb-6">More on The Blog</h3>
            <ul className="space-y-4">
              <FooterLink href="#about-mntn">About MNTN</FooterLink>
              <FooterLink href="#contributors">Contributors & Writers</FooterLink>
              <FooterLink href="#write-for-us">Write For Us</FooterLink>
              <FooterLink href="#contact">Contact Us</FooterLink>
              <FooterLink href="#privacy">Privacy Policy</FooterLink>
            </ul>
          </motion.div>

          {/* More on MNTN */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-mntn-teal text-[24px] font-bold font-gilroy mb-6">More on MNTN</h3>
            <ul className="space-y-4">
              <FooterLink href="#team">The Team</FooterLink>
              <FooterLink href="#jobs">Jobs</FooterLink>
              <FooterLink href="#press">Press</FooterLink>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/60 text-[16px] font-gilroy mb-4 md:mb-0">
            Copyright 2023 MNTN, Inc. Terms & Privacy
          </p>

          {/* Social Links */}
          <div className="flex space-x-6">
            <SocialLink platform="facebook" />
            <SocialLink platform="twitter" />
            <SocialLink platform="instagram" />
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

const FooterLink = ({ href, children }) => {
  return (
    <li>
      <motion.a
        href={href}
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
        className="text-white text-[18px] font-medium font-gilroy hover:text-mntn-teal transition-colors duration-300"
      >
        {children}
      </motion.a>
    </li>
  )
}

const SocialLink = ({ platform }) => {
  const icons = {
    facebook: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    twitter: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23 3A10.9 10.9 0 0 1 20.1 4.1A4.48 4.48 0 0 0 22.46 2A9 9 0 0 1 19.36 3.5A4.48 4.48 0 0 0 12 7.44V8.56A10.66 10.66 0 0 1 3 4S-1 13 8 17A11.64 11.64 0 0 1 0 19C9 24 20 19 20 7.77A4.5 4.5 0 0 0 23 3Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    instagram: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" stroke="currentColor" strokeWidth="2" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  }

  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.2, y: -2 }}
      transition={{ duration: 0.2 }}
      className="text-white/60 hover:text-mntn-teal transition-colors duration-300"
    >
      {icons[platform]}
    </motion.a>
  )
}

export default Footer
