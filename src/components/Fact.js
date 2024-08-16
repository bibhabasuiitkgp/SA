import React, { useEffect } from 'react';
import PureCounter from '@srexi/purecounterjs'; // Import PureCounter for the counters

const FactSection = () => {
    useEffect(() => {
        // Initialize PureCounter for counters when the component mounts
        new PureCounter();
    }, []);

    return (
        <section id="facts">
            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h3>Previous Records</h3>
                    <p>We have encountered last year <span style={{ fontSize: '25px', color: "green" }}>MORE THAN</span></p>
                </header>

                <div className="row counters">

                    <div className="col-lg-3 col-6 text-center">
                        <span
                            data-purecounter-start="0"
                            data-purecounter-end="100"
                            data-purecounter-duration="1"
                            className="purecounter"
                        ></span>
                        <p style={{ fontSize: '20px', color: "green" }}>Student Ambassadors</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span
                            data-purecounter-start="0"
                            data-purecounter-end="500"
                            data-purecounter-duration="1"
                            className="purecounter"
                        ></span>
                        <p style={{ fontSize: '20px', color: "green" }}>Total Participation</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span
                            data-purecounter-start="0"
                            data-purecounter-end="20"
                            data-purecounter-duration="1"
                            className="purecounter"
                        ></span>
                        <p style={{ fontSize: '20px', color: "green" }}>STAC</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span
                            data-purecounter-start="0"
                            data-purecounter-end="200000"
                            data-purecounter-duration="1"
                            className="purecounter"
                        ></span>
                        <p style={{ fontSize: '20px', color: "green" }}>Cash Prizes</p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default FactSection;
