"use client"
import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'
import {useTranslations} from 'next-intl';


export default function Footer() {
  const t = useTranslations('Index');
  return (
    <>
    <footer className={styles.mainFooter}>
      <div className={styles.mainContainer}>
          <ul>
            <li>
            <Link href="/" title="Logo Gran Vellas">
              <Image src="/Logo.svg" width={150} height={150} alt={''}></Image>
            </Link>
            </li>
          </ul>
          <ul>
              <li> 
                <h6>{t('Footer.About').toLocaleUpperCase()}</h6>
              </li>
              <li>
                {t('Navbar.Venture')}
              </li>
              <li>
                {t('Navbar.Jericoara')}
              </li>
              <li>
                {t('Navbar.Investment')}
              </li>
              <li>
                {t('Navbar.Reserve')}
              </li>
          </ul>
          <ul>
            <li>
              <h6>
                {t('Footer.Contact').toLocaleUpperCase()}
              </h6>
            </li>
            <li>
              {t('Footer.Talk')}
            </li>
            <li>            
              <Link href="tel:+111992088836"  style={{display: "flex", alignItems: "center"}}>
                <Image src="/tel.svg" height={15} width={15} alt="Tel Gran Vellas Urbanismo">

                </Image>
                <p style={{marginLeft: "10px", fontSize: "16px"}}>(11) 99208-8836</p>
              </Link>
            </li>
            <li>
              <div className={styles.SocialMidia}>
                <Link href="/">
                  <Image src="/instagram.svg" height={15} width={15} alt="Instagram Gran Vellas Urbanismo"></Image>
                </Link>
                <Link href="/">
                  <Image src="/youtube.svg" height={15} width={15} alt="Youtube Gran Vellas Urbanismo"></Image>
                </Link>
                <Link href="/">
                  <Image src="/facebook.svg" height={15} width={15} alt="Facebook Gran Vellas Urbanismo"></Image>
                </Link>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <h6>{t('Footer.service').toLocaleUpperCase()}</h6>
            </li>
            <li>
              {t('Footer.dateWeek')}
            </li>
          </ul>
        <div className={styles.Note}>
          <p>{t('FooterNotes.title')}</p>
          
          <p>{t('FooterNotes.p')}</p>

          <p>{t('FooterNotes.ptwo')}</p>

          <p>{t('FooterNotes.ptree')}</p>
        </div>
      </div>
      
    </footer>
    <div className={styles.MainLogoStyle}>
      <Link href={'https://www.luziac.com.br/'} title="Luziac Marketing">
        <Image src="/mainLogo.webp" alt='Luziac Marketing' width={220} height={80}>

        </Image>
      </Link>
    </div>
    <div className={styles.divDetail}>
      
    </div>
    </>
  )
}
