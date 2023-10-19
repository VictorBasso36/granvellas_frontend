"use client"
import Image from 'next/image'
import Link from 'next/link'
import {useTranslations} from 'next-intl';
import styles from './video.module.css';

export default function Video() {
  const t = useTranslations('Index');
  return (
    <section className={styles.mainVideo}>
        <div>
            <Image src="/playbutton.svg" width={60} height={60} alt=''></Image>
            <h5>{t('TitleVideo')}</h5>
        </div>
    </section>
  )
}
