"use client"
import Image from 'next/image'
import Link from 'next/link'
import {useTranslations} from 'next-intl';
import styles from './styles.module.css'

export default function Form() {
  const t = useTranslations('Index');
  return (
    <>
    <section className={styles.mainSection}>
        <div className={styles.containerMain}>
            <form action="">
              <h5>{t('Form.title')}{' '}<br></br><strong>{t('Form.titleMain')}</strong></h5>
              <input type="text" placeholder={t('Form.name')} />
              <input type="email" placeholder={t('Form.Email')} />
              <input type="tel" placeholder={t('Form.Tel')} />
              <button>
                <p><span>{t('Form.button').toUpperCase()}{' '}</span> {t('Form.buttonMain').toUpperCase()}</p>
                <div className={styles.DetailButton}>
                  <Image src={'/arrow.svg'} alt='Reserva jeri lote' height={25} width={25}>

                  </Image>
                </div>
              </button>
            </form>
        </div>
    </section>
    
    </>
  )
}
