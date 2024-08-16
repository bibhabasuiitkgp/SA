import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const ClientsSection = () => {
    return (
        <section id="clients">
            <div className="container" data-aos="zoom-in">

                <header className="section-header">
                    <h3>Our Clients</h3>
                </header>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={3}
                    slidesPerGroup={3}  // Add this line to ensure the slider moves one slide at a time
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    // breakpoints={{
                    //     640: { slidesPerView: 2, spaceBetween: 20, slidesPerGroup: 1 }, // Adjusts for 2 slides visible, moving one at a time
                    //     768: { slidesPerView: 4, spaceBetween: 40, slidesPerGroup: 1 }, // Adjusts for 4 slides visible, moving one at a time
                    //     1024: { slidesPerView: 6, spaceBetween: 50, slidesPerGroup: 1 }, // Adjusts for 6 slides visible, moving one at a time
                    // }}
                    className="clients-slider"
                >
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/img/hero-carousel/7.jpg" className="img-fluid" alt="Client 1" /></SwiperSlide>
                    <SwiperSlide><img src="assets/img/clients/client-2.png" className="img-fluid" alt="Client 2" /></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/img/hero-carousel/7.jpg" className="img-fluid" alt="Client 3" /></SwiperSlide>
                    <SwiperSlide><img src="assets/img/clients/client-4.png" className="img-fluid" alt="Client 4" /></SwiperSlide>
                    <SwiperSlide><img src="assets/img/clients/client-5.png" className="img-fluid" alt="Client 5" /></SwiperSlide>
                    <SwiperSlide><img src="assets/img/clients/client-6.png" className="img-fluid" alt="Client 6" /></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/linuxguist/bizpage@main/assets/img/hero-carousel/7.jpg" className="img-fluid" alt="Client 7" /></SwiperSlide>
                    <SwiperSlide><img src="assets/img/clients/client-8.png" className="img-fluid" alt="Client 8" /></SwiperSlide>
                    <SwiperSlide><img src="assets/img/clients/client-8.png" className="img-fluid" alt="Client 8" /></SwiperSlide>
                </Swiper>

            </div>
        </section>
    );
};

export default ClientsSection;
