import React from 'react';
import { FaRegNewspaper } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa6";
import { FaTshirt } from "react-icons/fa";

const AboutSection = () => {
    return (
        <section id="about">
            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h3>About NSSC</h3>
                    <p>
                        Established in 2011, the National Students' Space Challenge (NSSC) is the biggest astro-tech fest organized by the Space Technology Students' Society (spAts), a student body under Kalpana Chawla Space Technology Cell, which is the official contact point of ISRO at IIT Kharagpur. NSSC has grown exponentially over the past 11 years including various competitions like autonomous and manual bot making, space quizzes, case studies, paper presentations and astrophotography to name a few. Along with these events NSSC has tried to include various guest lectures, exhibitions, and workshops taken by various dignitaries dedicated to space science and technology.
                    </p>
                </header>

                <div className="row about-cols">

                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="about-col">
                            <div className="img">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/img/about-mission.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="icon"><FaToolbox size={30} /></div>
                            </div>
                            <h2 className="title"><a href="#">Get Exciting goodies</a></h2>
                            <p>
                                As a reward for your outstanding performance, you’ll receive exclusive goodies, including branded items and special gifts that showcase your dedication and hard work. These rewards are designed to recognize your contributions and serve as a lasting reminder of your achievements.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="about-col">
                            <div className="img">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/img/about-plan.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="icon"><FaRegNewspaper size={30} /></div>
                            </div>
                            <h2 className="title"><a href="#">Certificates</a></h2>
                            <p>

                                You will receive a Certificate of Appreciation signed by the chairman of KCSTC, ISRO's official contact at IIT Kharagpur. Those bringing over 50 participants will earn a Certificate of Completion. The top 10 ambassadors will also have their names featured on NSSC's official social media handles.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-col">
                            <div className="img">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/img/about-vision.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="icon"><FaTshirt size={30} /></div>
                            </div>
                            <h2 className="title"><a href="#">Free Merchandise</a></h2>
                            <p>
                                In addition to the goodies, you may also be eligible for free or discounted merchandise, including registration to our guest lectures and webinars. This benefit acknowledges your efforts and provides you with an opportunity to further engage with our community at a reduced cost.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutSection;
