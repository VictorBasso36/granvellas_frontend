"use client"
import Image from 'next/image'
import Link from 'next/link'
import {useTranslations} from 'next-intl';

export default function NavBar() {
  const t = useTranslations('Index');
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <p>{t('Navbar.Venture')}</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p>{t('Navbar.Jericoara')}</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src="/Logo.svg" width={120} height={120} alt="Logo Gran Vellas" >
              
            </Image>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p>{t('Navbar.Investment')}</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p>{t('Navbar.Reserve')}</p>
          </Link>
        </li>

      </ul>
    </nav>
  )
}
