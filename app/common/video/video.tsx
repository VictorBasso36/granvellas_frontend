"use client"
import Image from 'next/image'
import Link from 'next/link'
import {useTranslations} from 'next-intl';
import styles from './video.module.css';

export default function Video() {
  const t = useTranslations('Index');
  return (
    <section className={styles.mainVideo}>
        <div className={styles.videoButton}>
            <Image src="/playbutton.svg" width={60} height={60} alt=''></Image>
            <h5>Seu lugar ao <strong>paraíso</strong></h5>
        </div>
    </section>
  )
}
