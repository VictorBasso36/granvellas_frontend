"use client"
import Image from 'next/image'
import Link from 'next/link'
import {useTranslations} from 'next-intl';
import styles from './styles.module.css'

export default function Form() {
  const t = useTranslations('Index');
  return (
    <section className={styles.mainSection}>
        <div className={styles.containerMain}>
            <form action="">
              <h5>{t('Form.title')}{' '}<strong>{t('Form.titleMain')}</strong></h5>
              <input type="text" placeholder={t('Form.name')} />
              <input type="email" placeholder={t('Form.Email')} />
              <input type="tel" placeholder={t('Form.Tel')} />
              <button>
                {t('Form.button')}{' '} <span>{t('Form.buttonMain')}</span>
              </button>
            </form>
        </div>
    </section>
  )
}
