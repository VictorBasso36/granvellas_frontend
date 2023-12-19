"use client"
import Image from 'next/image'
import React, { useEffect } from 'react';
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import styles from './landuageBar.module.css';
import {useTranslations} from 'next-intl';

export default function LanguageBar() {
  const [locale, setLocale] = useState("en-US");
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    setLocale(newLocale);
    window.location.href = `/${newLocale}${pathname}`;
  };

  useEffect(() => {
    const browserLocale = navigator.language || "en-US";
    setLocale(browserLocale);
  }, []);


  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (menu) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [menu]);
  const t = useTranslations('Index');
  return (
    <>
    { menu &&
      <div className={styles.mainMenuHere} onClick={() => setMenu(!menu)}>
        <div className={styles.ModalHere}>
          <div className={styles.LanguageDivModal}>
            <Link href="/en">
              <Image src="/eua.svg" width={35} height={25} alt="Gran vellas English language"></Image>
            </Link>
            <Link href="/pt-br">
              <Image src="/pt_br.svg" width={35} height={25} alt="Gran vellas Portuguese language"></Image>
            </Link>
            <Link href="/es">
              <Image src="/es.svg" width={35} height={25} alt="Gran vellas Spanish language"></Image>
            </Link>
          </div>
          <ul className={styles.mainListNavBar}>
            <li className={styles.mainImageCommon}>
              <Link href="#Emp">
                <p>{t('Navbar.Venture').toLocaleUpperCase()}</p>
              </Link>
            </li>
            <li className={styles.mainImageCommon}>
              <Link href="#Jericoacora">
                <p>{t('Navbar.Jericoara').toLocaleUpperCase()}</p>
              </Link>
            </li>
            <li className={styles.mainImageCommon}>
              <Link href="#Invest">
                <p>{t('Navbar.Investment').toLocaleUpperCase()}</p>
              </Link>
            </li>
            <li className={styles.mainImageCommon}>
              <Link href="#reserv">
                <p>{t('Navbar.Reserve').toLocaleUpperCase()}</p>
              </Link>
        </li>
          </ul>
        </div>
      </div>
    }
    <header className={styles.maainLanguageBar}>
      <div className={styles.containerLanguageBar}>
        <div className={styles.TelDiv}>
          <div className={styles.MainDiv}> 
            <div className={styles.crashLater}>
              <Link href="tel:+111992088836">
                <Image src="/tel.svg" height={15} width={15} alt="Tel Gran Vellas Urbanismo">

                </Image>
                <p>(11) 99208-8836</p>
              </Link>
              <div className={styles.Separated}>

              </div>
              <div className={styles.SocialMidia}>
                <Link href="/">
                  <Image src="/instagram.svg" className={styles.firstSocial} height={15} width={15} alt="Instagram Gran Vellas Urbanismo"></Image>
                </Link>
                <Link href="/">
                  <Image src="/youtube.svg" height={15} width={15} alt="Youtube Gran Vellas Urbanismo"></Image>
                </Link>
                <Link href="/">
                  <Image src="/facebook.svg" height={15} width={15} alt="Facebook Gran Vellas Urbanismo"></Image>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.LanguageDiv}>
          <Link href="/en">
            <Image src="/eua.svg" width={29} height={18} alt="Gran vellas English language"></Image>
          </Link>
          <Link href="/pt-br">
            <Image src="/pt_br.svg" width={29} height={19} alt="Gran vellas Portuguese language"></Image>
          </Link>
          <Link href="/es">
            <Image src="/es.svg" width={29} height={18} alt="Gran vellas Spanish language"></Image>
          </Link>
          <div className={`${styles.hambmenu}`}>
            <div 
              className={`${styles.hambmenuContainer} ${menu ? styles.menuExistis : ''}`} 
              onClick={() => setMenu(!menu)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}
