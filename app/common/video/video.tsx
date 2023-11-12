"use client"
import Image from 'next/image'
import Link from 'next/link'
import {useTranslations} from 'next-intl';
import styles from './video.module.css';

export default function Video() {
  const t = useTranslations('Index');
  return (
    <section className={styles.mainVideo}>
        <Link className={styles.MainButton} href={'https://www.youtube.com/watch?v=-ugJf-KLhBI&list=TLGGygFMZb8XUOIxMjExMjAyMw&t=40s'} target='_blank'>         
          <div className={styles.videoButton}>
              <Image src="/playbutton.svg" width={60} height={60} alt=''></Image>
              <h5 dangerouslySetInnerHTML={{ __html: t('TitleVideo').replace(/(paradise|paraíso)/g, (match) => {
                switch (match) {
                  case 'paradise':
                  case 'paraíso':
                    return '<strong>' + match + '</strong>';
                  default:
                    return match;
                }
              }) }}>
              </h5>
          </div>
        </Link>
    </section>
  )
}
