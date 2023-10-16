"use client"
import Image from 'next/image'
import React, { useEffect } from 'react';
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

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
    <header >
      <div>
        <div>
          <Link href="/">
            <Image src="/tel.svg" height={30} width={30} alt="Tel Gran Vellas Urbanismo">

            </Image>
            <p>(85) 98174-9319</p>
          </Link>
        </div>
      </div>
      <div>
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
    </header>
  )
}
