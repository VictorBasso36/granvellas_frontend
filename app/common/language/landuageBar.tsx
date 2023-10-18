"use client"
import Image from 'next/image'
import React, { useEffect } from 'react';
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import styles from './landuageBar.module.css';


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
  
  return (
    <header className={styles.maainLanguageBar}>
      <div className={styles.containerLanguageBar}>
        <div className={styles.TelDiv}>
          <div className={styles.MainDiv}> 
            <Link href="/">
              <Image src="/tel.svg" height={15} width={15} alt="Tel Gran Vellas Urbanismo">

              </Image>
              <p>(85) 98174-9319</p>
            </Link>
            <div className={styles.Separated}>

            </div>
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
        </div>
      </div>
    </header>
  )
}
