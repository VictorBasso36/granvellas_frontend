"use client"
import Image from 'next/image'
import Link from 'next/link'
import {useTranslations} from 'next-intl';
import styles from './styles.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Virtual } from 'swiper/modules';
import { useEffect, useState } from 'react';
export default function Assessment() {
  const t = useTranslations('Index');

  const [larguraDaJanela, setLarguraDaJanela] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setLarguraDaJanela(window.innerWidth);
    };

    // Captura a largura da janela quando o componente é montado
    handleResize();

    // Adiciona um ouvinte de redimensionamento para atualizar a largura da janela quando ela muda
    window.addEventListener('resize', handleResize);

    // Remove o ouvinte de redimensionamento quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section className={styles.MainSection} id="Invest">
      <div className={styles.containerMain}>
          <h4 dangerouslySetInnerHTML={{ __html: t('assessment.money.title').replace(/(facilitada|purchase|com incorporador|the developer|el desarrollador)/g, (match) => {
            switch (match) {
              case 'facilitada':
              case 'purchase':
                return '<strong>' + match + '</strong>';
              case 'com incorporador':
              case 'the developer':
              case 'el desarrollador':
                return '<span>' + match + '</span>';
              default:
                return match;
            }
          }) }}>
          </h4>

        <p className={styles.moneyp}>{t('assessment.money.money2')} <span>R$25.005,00</span> + {t('assessment.money.money3')} <span>R$2.009,08.</span></p>
      </div>
      <div className={styles.mainSectionContainer}>
      <div className={styles.swiperHere}>
        <Swiper
                spaceBetween={30}
                slidesPerView={larguraDaJanela < 1024 ? 1 : 2}
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
          <div className={styles.mainCard}>
            <div className={styles.PhotoHere} style={{backgroundImage: `url('/luciano.jpeg')`}}>
            </div>
            <div className={styles.descriptionHere}>            
              <p className={styles.title}><strong>Luziano Almeida (GO)</strong></p>
              <p className={styles.description}>
              “{t('assessment.client1')}”
              </p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide key={2} className={styles.Slide}>
          <div className={styles.mainCard}>              
            <div className={styles.PhotoHere} style={{backgroundImage: `url('/client2.PNG')`}}>
            </div>
            <div className={styles.descriptionHere}>            

              <p className={styles.title}><strong>Lúcio</strong></p>
              <p className={styles.description}>
                “{t('assessment.client2')}”
              </p>
            </div>
          </div>
          </SwiperSlide>
        </Swiper>
      </div>
      </div>
      <div className={styles.downloadHere}>
        <h4 dangerouslySetInnerHTML={{ __html: t('assessment.download.LoteJuri')
        .replace(/(transparência|transparencia|transparency|Investimento|Inversión|Investment)/g, (match) => {
            switch (match) {
              case 'transparência':
              case 'transparencia':
              case 'transparency':
                return '<span>' + match + '</span>';
              case 'Investimento':
              case 'Inversión':
              case 'Investment':
                return '<strong>' + match + '</strong>';
              default:
                return match;
            }
          }) }}>
          </h4>
        <div className={styles.buttonHere}>
          <Link href="/CERTIDAO DA MATRICULA 1142 - Atualizada.pdf" target='_blank'>
            <button className={styles.MainButton}>
              <p>{t('assessment.download.make').toUpperCase()}{' '}<span>{t('assessment.download.p1').toUpperCase()}</span></p>
              <Image src="arrow.svg" alt='Lote gran vellas detalhes juridicos - registro' width={20} height={20}>

              </Image>
            </button>
          </Link>
          <Link href="/Alvará de Construção.pdf" target='_blank'>
            <button className={styles.MainButton}>
            <p>{t('assessment.download.make').toUpperCase()}{' '}<span>{t('assessment.download.p2').toUpperCase()}</span></p>
              <Image src="arrow.svg" alt='Lote gran vellas detalhes juridicos - registro' width={20} height={20}>

              </Image>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
