import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-transparent" : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <h1 className="text-[28px] md:text-[32px] font-bold font-serif text-white tracking-wider">MNTN</h1>
            </motion.div>

            {/* Navigation */}
            <nav
              className="hidden md:flex items-center space-x-8 lg:space-x-10"
              role="navigation"
              aria-label="Main navigation"
            >
              <NavLink href="#equipment">Equipment</NavLink>
              <NavLink href="#about">About us</NavLink>
              <NavLink href="#blog">Blog</NavLink>
            </nav>

            {/* Account */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="hidden md:flex items-center space-x-2 cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label="User account"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
                aria-hidden="true"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[16px] md:text-[17px] font-bold text-white font-sans">Account</span>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Right Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop - Closes menu on click */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-black/20 backdrop-blur-xl z-50 md:hidden border-l border-white/10"
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-white p-2 z-10"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Navigation Links */}
              <nav className="px-8 py-20 space-y-8" role="navigation" aria-label="Mobile navigation">
                <MobileNavLink href="#equipment" onClick={() => setIsMobileMenuOpen(false)}>
                  Equipment
                </MobileNavLink>
                <MobileNavLink href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                  About us
                </MobileNavLink>
                <MobileNavLink href="#blog" onClick={() => setIsMobileMenuOpen(false)}>
                  Blog
                </MobileNavLink>
                <MobileNavLink href="#account" onClick={() => setIsMobileMenuOpen(false)}>
                  Account
                </MobileNavLink>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

const NavLink = ({ href, children }) => {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="text-[16px] md:text-[18px] font-bold text-white font-sans hover:text-teal-400 transition-colors duration-300 relative group focus:outline-none focus:text-teal-400"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full group-focus:w-full"></span>
    </motion.a>
  )
}

const MobileNavLink = ({ href, children, onClick }) => {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="block text-[24px] font-bold text-white font-sans hover:text-teal-400 transition-colors duration-300 focus:outline-none focus:text-teal-400"
      whileHover={{ x: 10 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.a>
  )
}

export default Header