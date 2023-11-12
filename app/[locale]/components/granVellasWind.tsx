'use client';
import { useTranslations } from 'next-intl';
import styles from './granVellasWind.module.css'
import Image from 'next/image';

export default function GranVellasWind() {
    const t = useTranslations('Index');
    return (
      <>
        <section className={styles.mainSection} id="Emp">
          <div className={styles.mainContainer}>
              <h2 dangerouslySetInnerHTML={{ __html: t('Wind.title').replace(/(Gran Vellas Wind|seu próximo sonho.|tu próximo sueño.|your next dream.)/g, (match) => {
                switch (match) {
                  case 'Gran Vellas Wind':
                    return '<strong>' + match + '</strong>';
                  case  'seu próximo sonho.':
                  case 'tu próximo sueño.':
                  case 'your next dream.':
                    return '<span>' + match + '</span>';
                  default:
                    return match;
                }
              }) }}>
              </h2>
            
              <p className={styles.mainContainerText}>{t('Wind.description')}</p>
              <div className={styles.mainContainerCards}>
                <div className={styles.promoCard}>
                  <p>{t('Wind.t1')}</p>
                  <p><span>{t('Wind.tt1')}</span></p>
                </div>
                <div className={styles.promoCard}>
                  <p>{t('Wind.t2')}</p>
                  <p><span>{t('Wind.tt2')}</span></p>
                </div>
                <div className={styles.promoCard}>
                  <p>{t('Wind.t3')}</p>
                  <p><span>{t('Wind.tt3')}</span></p>
                </div>
              </div>

          </div>
          <Image className={styles.firstFlower} src="/bannerFlower.svg" alt='Apartamentos com area verde Gran vellas wind' width={280} height={450}>

          </Image>
          <Image className={styles.secondFlower} src="/bannerFlower.svg" alt='Apartamentos com area verde Gran vellas wind' width={280} height={450}>

          </Image>
        </section>
      </>
      );
  }