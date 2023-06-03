import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
   <div className="scrollbar-w-2 scrollbar-track-gray-200 scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-700">
    <Navbar/>
    <Hero/>
    <Footer/>
   </div>
  )
}
