"use client"
import Image from 'next/image'
import Link from 'next/link'
import {useTranslations} from 'next-intl';
import styles from './styles.module.css'

export default function Assessment() {
  const t = useTranslations('Index');
  return (
    <article className={styles.MainCard}>
        <div className={styles.MainImageClient}>
        
        </div>
        <div className={styles.contentCard}>
            <h4>Name Client</h4>
            <p>TEXT FOR EMP</p>
        </div>
    </article>
  )
}
