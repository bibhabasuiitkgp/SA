import React, { useEffect } from 'react';
import PureCounter from '@srexi/purecounterjs'; // Import PureCounter for the counters

const FactSection = () => {
    useEffect(() => {
        // Initialize PureCounter for counters when the component mounts
        new PureCounter();
    }, []);

    return (
        <section id="facts" style={{ display: "inline"}}>
            <div className="container" data-aos="fade-up" style={{ marginTop: "30px", backgroundImage: "https://images.collegedunia.com/public/college_data/images/appImage/1488973535e1.jpg?h=260&w=360&mode=crop" }}>
                <header className="section-header">
                    <h3>Previous Records</h3>
                    <p>We have encountered last year <span style={{ fontSize: '25px', color: "#674188", fontWeight: "600" }}>MORE THAN</span></p>
                </header>

                <div className="row counters">

                    <div className="col-lg-3 col-6 text-center">
                        <span
                            data-purecounter-start="0"
                            data-purecounter-end="128"
                            data-purecounter-duration="1"
                            className="purecounter"
                            style={{ color: "#674188",fontSize: '30px' }}
                        ></span>
                        <p style={{ fontSize: '20px', color: "#674188" }}>Student Ambassadors</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span
                            data-purecounter-start="0"
                            data-purecounter-end="5000"
                            data-purecounter-duration="1"
                            className="purecounter"
                            style={{ color: "#674188",fontSize: '30px' }}
                        ></span>
                        <p style={{ fontSize: '20px', color: "#674188" }}>Total Registrations</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span
                            data-purecounter-start="0"
                            data-purecounter-end="12"
                            data-purecounter-duration="1"
                            className="purecounter"
                            style={{ color: "#674188",fontSize: '30px' }}
                        ></span>
                        <p style={{ fontSize: '20px', color: "#674188" }}>STACs</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span
                            data-purecounter-start="0"
                            data-purecounter-end="200000"
                            data-purecounter-duration="1"
                            className="purecounter"
                            style={{ color: "#674188",fontSize: '30px' }}
                        ></span>
                        <p style={{ fontSize: '20px', color: "#674188" }}>Prizes Worth</p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default FactSection;
