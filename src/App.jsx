import AboutUs from "./Components/AboutUs";
import Hero from "./Components/Hero";
import Hero2 from "./Components/Hero2";
import Menu from "./Components/Menu";
import Nav from "./Components/Nav";
import Testimonials from "./Components/Testimonials";
import AboutUs2 from "./Components/AboutUs2";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";


export default function App() {
  return (
    <> 
       <header><Nav/></header>
       <main>
         <Hero/>
         <AboutUs/>
         <Menu/>
         <AboutUs2/>
         <Hero2/>
         <Testimonials/>
         <Subscribe/>
       </main>
        <footer>
          <Footer/>
        </footer>
    </>
  )
}