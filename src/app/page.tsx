import Navbar from "@/app/components/Navbar";
import Profile from "@/app/components/Profile";
import Skills from "@/app/components/Skills";
import Education from "@/app/components/Education"; 
import Honors from "@/app/components/Honors";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import MyCVs from "@/app/components/MyCVs";
import Contact from "@/app/components/Contact";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      <Profile />
      <Skills />
      <Education /> 
      <Experience />
      <Projects />
      <Honors />
      <MyCVs />
      <Contact />
      <Footer />
      <ContactMe /> 
    </div>
  );
}
