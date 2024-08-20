import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const ClientsSection = () => {
    return (
        <section id="clients">
            <div className="container" data-aos="zoom-in">

                <header className="section-header">
                    <h3>Our Previous Sponsors</h3>
                </header>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={3}
                    slidesPerGroup={3}  // Add this line to ensure the slider moves one slide at a time
                    autoplay={{ delay: 3000 }}
                    loop={true} // Add this line to enable continuous sliding
                    // pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20, slidesPerGroup: 1 }, // Adjusts for 2 slides visible, moving one at a time
                        768: { slidesPerView: 4, spaceBetween: 40, slidesPerGroup: 1 }, // Adjusts for 4 slides visible, moving one at a time
                        1024: { slidesPerView: 6, spaceBetween: 50, slidesPerGroup: 1 }, // Adjusts for 6 slides visible, moving one at a time
                    }}
                    className="clients-slider"
                >
                    <SwiperSlide><img src="23-c.png" className="img-fluid" alt="Client 1" height={150} /></SwiperSlide>
                    <SwiperSlide><img src="23-t.png" alt="Client 2" height={150} /></SwiperSlide>
                    <SwiperSlide><img src="22-m.jpg" className="img-fluid" alt="Client 3" height={150} /></SwiperSlide>
                    <SwiperSlide><img src="22-p.png" className="img-fluid" alt="Client 4" height={150} /></SwiperSlide>
                    <SwiperSlide><img src="21-t.png" className="img-fluid" alt="Client 5" height={150} /></SwiperSlide>
                    <SwiperSlide><img src="21-p.png" className="img-fluid" alt="Client 6" height={150} /></SwiperSlide>
                </Swiper>

            </div>
        </section>
    );
};

export default ClientsSection;
