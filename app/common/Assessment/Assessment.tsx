"use client"
import Image from 'next/image'
import Link from 'next/link'
import {useTranslations} from 'next-intl';
import styles from './styles.module.css'

export default function Assessment() {
  const t = useTranslations('Index');
  return (
    <section className={styles.MainSection}>
      <div className={styles.containerMain}>
        <h4>
          
        </h4>
        <p>{t('assessment.money.money2')} <span>R$25.005,00</span> + {t('assessment.money.money3')} <span>R$2.009,08.</span></p>
      </div>
      <div className={styles.mainSectionContainer}>
          carrousel
      </div>
      <div className={styles.downloadHere}>
        <h4>{t('assessment.download.LoteJuri')}</h4>
        <div className={styles.buttonHere}>
          <Link href="/">
            <button>
              <p>{t('assessment.download.make')}{' '}<span>{t('assessment.download.p1')}</span></p>
              <Image src="arrow.svg" alt='Lote gran vellas detalhes juridicos - registro' width={20} height={20}>

              </Image>
            </button>
          </Link>
          <Link href="/">
            <button>
            <p>{t('assessment.download.make')}{' '}<span>{t('assessment.download.p2')}</span></p>
              <Image src="arrow.svg" alt='Lote gran vellas detalhes juridicos - registro' width={20} height={20}>

              </Image>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
