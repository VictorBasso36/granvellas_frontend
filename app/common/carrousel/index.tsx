"use client"
import Image from 'next/image'
import Link from 'next/link'
import {useTranslations} from 'next-intl';
import styles from './styles.module.css'

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
          <div>
            carrousel
          </div>
          <button>
            <p><span>{t('assessment.lastButton').toUpperCase()}{' '}</span> {t('assessment.lastButtonMain').toUpperCase()}</p>
          </button>
        </div>
      </div>
    </section>
  )
}
