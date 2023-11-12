"use client"
import Image from 'next/image'
import Link from 'next/link'
import {useTranslations} from 'next-intl';
import styles from './styles.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Virtual } from 'swiper/modules';
export default function Carrousel() {
  const t = useTranslations('Index');
  return (
    <section className={styles.widthThis}>
      <div className={styles.Container}>
        <div className={styles.ContainerLote}>
          <div className={styles.LoteImage}>
          </div>
          <button>
            <p><span>{t('assessment.button').toUpperCase()}{' '}</span> {t('assessment.buttonMain').toUpperCase()}</p>
          </button>
          <h3 dangerouslySetInnerHTML={{ __html: t('assessment.mainTitle')
          .replace(/(único|única|unique|para você|para ti|for you)/g, (match) => {
            switch (match) {
              case 'único':
              case 'única':
              case 'unique':
                return '<strong>' + match + '</strong>';
              case 'para você':
              case 'para ti':
              case 'for you':
                return '<span>' + match + '</span>:';
              default:
                return match;
            }
          }) }}>
          </h3>
          <div className={styles.swiperHere}>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={false}
                loop={false}
                grabCursor={true}
                modules={[Autoplay, Virtual]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: true,
                }}
                className={styles.swiperMain}
              >
                  <SwiperSlide key={1} className={styles.Slide}>
                    <div className={styles.MyImage} style={{backgroundImage: `url('/CLUBE.webp')`}}>
                      <div className={styles.mylegend}>
                       <p>CLUBE COMPLETO COM CHURRASQUEIRA E PISCINA</p> 
                       <div className={styles.backdrop}>
                        </div>
                      </div>
                    </div>
                  
                  </SwiperSlide>
                  <SwiperSlide key={2} className={styles.Slide}>
                    <div className={styles.MyImage} style={{backgroundImage: `url('/CENTRAL0003.webp')`}}>
                      <div className={styles.mylegend}>
                       <p>{'Espaço aberto, arborizado e com lazer completo'.toLocaleUpperCase()}</p> 
                            <div className={styles.backdrop}>
                            </div>
                      </div>
                    </div>
                  
                  </SwiperSlide>
                  <SwiperSlide key={3} className={styles.Slide}>
                    <div className={styles.MyImage} style={{backgroundImage: `url('/CLUBE.webp')`}}>
                      <div className={styles.mylegend}>
                        <p>{'Lago interno com bar'.toLocaleUpperCase()}</p>
                        <div className={styles.backdrop}>
                        </div>
                      </div>
                    </div>
                  
                  </SwiperSlide>
                  <SwiperSlide key={4} className={styles.Slide}>
                    <div className={styles.MyImage} style={{backgroundImage: `url('/entrada.webp')`}}>
                      <div className={styles.mylegend}>

                        <p>{'Portaria 24hrs'.toLocaleUpperCase()}</p>
                        <div className={styles.backdrop}>
                        </div>
                      </div>
                    </div>
                  
                  </SwiperSlide>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
            </Swiper>
          </div>
          <br />
          <button>
            <p><span>{t('assessment.lastButton').toUpperCase()}{' '}</span> {t('assessment.lastButtonMain').toUpperCase()}</p>
          </button>
          <br />
        </div>
      </div>
    </section>
  )
}
