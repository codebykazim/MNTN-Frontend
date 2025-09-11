import Header from './components/Header'
import Hero from "./components/Hero"
import ContentSection from "./components/ContentSection"
import Footer from "./components/Footer"
import SmoothScroll from "./components/SmoothScroll"
import ScrollProgress from "./components/ScrollProgress"

function App() {
  return (
    <div className="min-h-screen bg-mntn-dark">
      <ScrollProgress />
      <SmoothScroll />
      <Header />
      <Hero />

      {/* Content Sections */}
      <ContentSection
        number="01"
        subtitle="GET STARTED"
        title="What level of hiker are you?"
        description="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?"
        buttonText="read more"
        imageSrc="/01.png"
        imageAlt="Hiker on mountain peak"
        reverse={false}
      />

      <ContentSection
        number="02"
        subtitle="HIKING ESSENTIALS"
        title="Picking the right Hiking Gear!"
        description="The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have. Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
        buttonText="read more"
        imageSrc="/02.png"
        imageAlt="Hiker with backpack in mountains"
        reverse={true}
      />

      <ContentSection
        number="03"
        subtitle="WHERE YOU GO IS THE KEY"
        title="Understand Your Map & Timing"
        description="To start, print out the hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark should be as I hike. For example, I'll read the guide and know that say, in a mile, I make a right turn at the junction.."
        buttonText="read more"
        imageSrc="/03.png"
        imageAlt="Hand holding compass with mountain view"
        reverse={false}
      />

      <Footer />
    </div>
  )
}

export default App
