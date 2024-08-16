import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Carousal = () => {
    useEffect(() => {
        // DOM manipulation for adjusting links after the component is mounted
        document.addEventListener('DOMContentLoaded', function () {
            var documentUrl = document.location.href.replace(/#.*$/, '');

            var linkEls = document.getElementsByTagName('A');
            for (var linkIndex = 0; linkIndex < linkEls.length; linkIndex++) {
                var linkEl = linkEls[linkIndex];

                if (!linkEl.getAttribute('href').match(/^#/)) {
                    continue;
                }

                linkEl.setAttribute('href', documentUrl + linkEl.getAttribute('href'));
            }
        });
    }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>BizPage Bootstrap Template</title>

                {/* Google Fonts */}
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700"
                    rel="stylesheet"
                />

                {/* Vendor CSS Files */}
                <link
                    href="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/vendor/animate.css/animate.min.css"
                    rel="stylesheet"
                />
                <link
                    href="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/vendor/aos/aos.css"
                    rel="stylesheet"
                />
                <link
                    href="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/vendor/bootstrap/css/bootstrap.min.css"
                    rel="stylesheet"
                />
                <link
                    href="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/vendor/bootstrap-icons/bootstrap-icons.css"
                    rel="stylesheet"
                />
                <link
                    href="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/vendor/glightbox/css/glightbox.min.css"
                    rel="stylesheet"
                />
                <link
                    href="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/vendor/swiper/swiper-bundle.min.css"
                    rel="stylesheet"
                />

                {/* Template Main CSS File */}
                <link
                    href="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/css/style.css"
                    rel="stylesheet"
                />

                {/* Vendor JS Files */}
                <script src="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/vendor/purecounter/purecounter_vanilla.js"></script>
                <script src="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/vendor/aos/aos.js"></script>
                <script src="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/vendor/glightbox/js/glightbox.min.js"></script>
                <script src="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
                <script src="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/vendor/swiper/swiper-bundle.min.js"></script>
                <script src="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/vendor/waypoints/noframework.waypoints.js"></script>
                <script src="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/vendor/php-email-form/validate.js"></script>

                {/* Template Main JS File */}
                <script src="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/js/main.js"></script>
            </Helmet>

            <header
                id="header"
                className="fixed-top d-flex align-items-center header-transparent"
            >
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-11 d-flex align-items-center justify-content-between">
                            <h1 className="logo">
                                <a href="index.html">Student Ambassador</a>
                            </h1>

                            <nav id="navbar" className="navbar">
                                <ul>
                                    <li>
                                        <a className="nav-link scrollto active" style={{ fontSize: '20px' }} href="#form">
                                            Register
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a className="nav-link" style={{ fontSize: '20px' }} href="#">
                                            STAC
                                        </a>
                                    </li>
                                </ul>
                                {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <section id="hero">
                <div className="hero-container">
                    <div
                        id="heroCarousel"
                        className="carousel slide carousel-fade"
                        data-bs-ride="carousel"
                        data-bs-interval="5000"
                    >
                        <ol id="hero-carousel-indicators" className="carousel-indicators"></ol>

                        <div className="carousel-inner" role="listbox">
                            <div
                                className="carousel-item active"
                                style={{
                                    backgroundImage:
                                        'url(https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/img/hero-carousel/6.jpg)',
                                }}
                            >
                                <div className="carousel-container">
                                    <div className="container">
                                        <h2 className="animate__animated animate__fadeInDown">
                                            Join the Mission: Be a Space Ambassador
                                        </h2>
                                        <p className="animate__animated animate__fadeInUp" style={{ fontSize: '17px' }}>
                                            Take the lead in your college and become a part of the National Students Space Challenge. As a Space Ambassador, you'll be at the forefront of the mission, inspiring and recruiting your peers to participate in one of the most exciting space-themed events in the country. This is your chance to connect with like-minded enthusiasts, make a difference, and represent your institution on a national stage.
                                        </p>
                                        <a
                                            href="#form"
                                            className="btn-get-started scrollto animate__animated animate__fadeInUp"
                                        >
                                            Register to Join us
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="carousel-item"
                                style={{
                                    backgroundImage:
                                        'url(https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/img/hero-carousel/7.jpg)',
                                }}
                            >
                                <div className="carousel-container">
                                    <div className="container">
                                        <h2 className="animate__animated animate__fadeInDown">
                                            Why Become an Ambassador? Unlock Exclusive Opportunities
                                        </h2>
                                        <p className="animate__animated animate__fadeInUp">
                                            As an ambassador, you’ll gain exclusive access to advanced workshops, seminars, and networking opportunities with space industry professionals. Not only will you enhance your leadership and organizational skills, but you'll also earn a prestigious certificate of recognition that will stand out on your resume. Plus, you'll be part of a vibrant community of space enthusiasts who share your passion for exploration and innovation
                                        </p>
                                        <a
                                            href="#about"
                                            className="btn-get-started scrollto animate__animated animate__fadeInUp"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="carousel-item"
                                style={{
                                    backgroundImage:
                                        'url(https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/img/hero-carousel/8.jpg)',
                                }}
                            >
                                <div className="carousel-container">
                                    <div className="container">
                                        <h2 className="animate__animated animate__fadeInDown">
                                            Ambassador's Role: Lead and Inspire
                                        </h2>
                                        <p className="animate__animated animate__fadeInUp">
                                            As the official representative of your college, your role as an ambassador is crucial. You'll be responsible for spreading the word about the National Students Space Challenge, organizing local events like, and rallying students to participate. Your leadership will help shape the future of space exploration by inspiring the next generation of scientists, engineers, and innovators. This is your opportunity to make a lasting impact on your college community while gaining invaluable experience in event management and communication
                                        </p>
                                        <a
                                            href="#featured-services"
                                            className="btn-get-started scrollto animate__animated animate__fadeInUp"
                                        >
                                            STAC
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a
                            className="carousel-control-prev"
                            href="#heroCarousel"
                            role="button"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon bi bi-chevron-left"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </a>

                        <a
                            className="carousel-control-next"
                            href="#heroCarousel"
                            role="button"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon bi bi-chevron-right"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Carousal;
