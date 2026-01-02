import { Navbar } from "@/layout/Navbar"
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects"
import { Education } from "@/sections/Education"
import { About } from "@/sections/About"
import { Contact } from "@/sections/Contact"

function App() {
  return <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <Projects />
      <Education />
      <About />
      <Contact />
    </main>
  </div>
}

export default App
