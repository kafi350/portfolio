import React from "react";
import "./experience.css"

const Experience = () => {
    return (
        <section id="experience">

            <h5>What Skills I have</h5>
            <h2>My Skills</h2>


            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Soft Skills</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <h4 className="text-light">Dynamic Thinking</h4>
                        </article>
                        <article className="experience__details">
                            <h4>Team Player</h4>
                        </article>
                        <article className="experience__details">
                            <h4>Consistent</h4>
                        </article>
                    </div>
                </div>
                <div className="experience__frontend">
                    <div className="experience__frontend">
                        <h3>Hard Skills</h3>
                        <div className="experience__content">
                            <article className="experience__details">
                                <h4>Python</h4>
                            </article>
                            <article className="experience__details">
                                <h4>Java</h4>
                            </article>
                            <article className="experience__details">
                                <h4>JavaScript</h4>
                            </article>
                            <article className="experience__details">
                                <h4>Django</h4>
                            </article>
                            <article className="experience__details">
                                <h4>React</h4>
                            </article>
                            <article className="experience__details">
                                <h4>SQL</h4>
                            </article>
                            <article className="experience__details">
                                <h4>PostgreSql</h4>
                            </article>
                            <article className="experience__details">
                                <h4>Machine Learning</h4>
                            </article>
                            <article className="experience__details">
                                <h4>Deep Learning</h4>
                            </article>
                            <article className="experience__details">
                                <h4>Tensorflow</h4>
                            </article>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Experience