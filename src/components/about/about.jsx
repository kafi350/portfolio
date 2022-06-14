import React from "react";
import "./about.css"
import ME from "../../assets/1.jpg"
import {FaAward} from "react-icons/fa"

const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt=""/>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"></FaAward>
                            <h5>Experience</h5>
                            <small>1+ Year of Working Experience</small>
                        </article>
                        <article className="about__card">
                            <FaAward className="about__icon"></FaAward>
                            <h5>Experience</h5>
                            <small>1+ Year of Working Experience</small>
                        </article>
                    </div>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deserunt excepturi expedita fuga incidunt inventore,
                        magnam necessitatibus nihil, nostrum quidem repellat repudiandae rerum sunt voluptas voluptates? Aperiam deleniti
                        placeat possimus!
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>

            </div>

        </section>
    )
}
export default About