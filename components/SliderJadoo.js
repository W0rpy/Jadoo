import styles from '../styles/SliderJadoo.module.scss';
import { useRef } from 'react';
import ContainerMain from '../components/ContainerMain';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCards } from 'swiper';
import mike from '../public/images/mike.png';
import alice from '../public/images/alice.png';
import thomas from '../public/images/thomas.png';
import Image from 'next/image';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import 'swiper/css';
import arrowslider from '../public/images/arrow_slider.svg';

function SliderJadoo() {
   const swiperSpecialNavPrevRef = useRef(null);
   const swiperSpecialNavNextRef = useRef(null);
   return (
      <section className={styles.SliderJadoo}>
         <ContainerMain>
            <div className={styles.SliderJadooBody}>
               <div className={styles.SliderJadooText}>
                  <div className={styles.SubTitle}>
                     Testimonials
                  </div>
                  <div className={styles.Title}>
                     What people say about Us.
                  </div>
                  <div className="slider-controls">
                  </div>
               </div>
               <div className={styles.SliderMain}>
                  <Swiper
                     className={styles.SliderSwiper}
                     modules={[Navigation, Pagination, EffectCards]}
                     spaceBetween={30}
                     slidesPerView={1}
                     speed={1000}
                     direction="vertical"
                     pagination={{
                        el: '.slider-controls',
                        type: 'bullets',
                        clickable: true,
                     }}
                     navigation={{
                        nextEl: swiperSpecialNavPrevRef.current,
                        prevEl: swiperSpecialNavNextRef.current,
                     }}
                     effect='cards'
                     loop
                     cardsEffect={{
                        perSlideOffset: 5,
                        perSlideRotate: 4,
                        slideShadows: false,
                        rotate: true,
                     }}
                     onInit={(swiper) => {
                        swiper.params.navigation.prevEl = swiperSpecialNavPrevRef.current;
                        swiper.params.navigation.nextEl = swiperSpecialNavNextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                     }}

                  >
                     <SwiperSlide className={styles.SliderComment}>
                        <div className={styles.CommentShell}>
                           <div className={styles.CommentProfile}>
                              <Image alt='Profile' src={mike} width={68} height={68} className={styles.Profile} />
                           </div>
                           <div className={styles.CommentBody}>
                              <div className={styles.CommentText}>
                                 “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                              </div>
                              <div className={styles.CommentAutor}>
                                 Mike taylor
                              </div>
                              <div className={styles.Country}>
                                 Lahore, Pakistan
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide className={styles.SliderComment}>
                        <div className={styles.CommentShell}>
                           <div className={styles.CommentProfile}>
                              <Image alt='Profile' src={thomas} width={68} height={68} className={styles.Profile} />
                           </div>
                           <div className={styles.CommentBody}>
                              <div className={styles.CommentText}>
                                 “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                              </div>
                              <div className={styles.CommentAutor}>
                                 Chris Thomas
                              </div>
                              <div className={styles.Country}>
                                 CEO of Red Button
                              </div>
                           </div>
                        </div></SwiperSlide>
                     <SwiperSlide className={styles.SliderComment}>
                        <div className={styles.CommentShell}>
                           <div className={styles.CommentProfile}>
                              <Image alt='Profile' src={alice} width={68} height={68} className={styles.Profile} />
                           </div>
                           <div className={styles.CommentBody}>
                              <div className={styles.CommentText}>
                                 “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                              </div>
                              <div className={styles.CommentAutor}>
                                 Mike taylor
                              </div>
                              <div className={styles.Country}>
                                 Lahore, Pakistan
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                     <div className={`${styles.swiperSpecialNavPrevRef}`} ref={swiperSpecialNavPrevRef}><Image src={arrowslider} height='auto' width='auto' alt="Arrow Slider" /></div>
                     <div className={`${styles.swiperSpecialNavNextRef}`} ref={swiperSpecialNavNextRef}><Image src={arrowslider} height='auto' width='auto' alt="Arrow Slider" /></div>
                  </Swiper>
               </div>
            </div>
         </ContainerMain>
      </section >
   )
}
export default SliderJadoo;