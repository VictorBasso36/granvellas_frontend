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
            <h3>{t('assessment.mainTitle')}</h3>
          </div>
          <button>
            <p><span>{t('assessment.button').toUpperCase()}{' '}</span> {t('assessment.buttonMain').toUpperCase()}</p>
          </button>

          <button>
            <p><span>{t('assessment.lastButton').toUpperCase()}{' '}</span> {t('assessment.lastButtonMain').toUpperCase()}</p>
          </button>
        </div>
      </div>
    </section>
  )
}
