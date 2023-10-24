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
          clientes here
      </div>
      <div className={styles.downloadHere}>
        <h4 dangerouslySetInnerHTML={{ __html: t('assessment.download.LoteJuri')
        .replace(/(legalmente|juridicamente|perfect|perfecto|plot|perfeito)/g, (match) => {
            switch (match) {
              case 'legalmente':
              case 'juridicamente':
              case 'perfect':
                return '<span>' + match + '</span>';
              case 'perfecto':
              case 'plot':
              case 'perfeito':
                return '<strong>' + match + '</strong>';
              default:
                return match;
            }
          }) }}>
          </h4>
        <div className={styles.buttonHere}>
          <Link href="/">
            <button className={styles.MainButton}>
              <p>{t('assessment.download.make').toUpperCase()}{' '}<span>{t('assessment.download.p1').toUpperCase()}</span></p>
              <Image src="arrow.svg" alt='Lote gran vellas detalhes juridicos - registro' width={20} height={20}>

              </Image>
            </button>
          </Link>
          <Link href="/">
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
