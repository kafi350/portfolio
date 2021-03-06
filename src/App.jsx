import React from "react";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Education from "./components/education/education";



const App = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <About/>
            <Experience/>
            <Projects/>
            <Education/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default App
