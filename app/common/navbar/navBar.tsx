"use client"
import Image from 'next/image'
import Link from 'next/link'
import {useTranslations} from 'next-intl';
import styles from './navBar.module.css';
import Logo from '../../../public/Logo.svg'

export default function NavBar() {
  const t = useTranslations('Index');
  return (
    <nav className={styles.mainNavbar}>
      <ul className={styles.mainListNavBar}>
        <li className={styles.mainImageCommon}>
          <Link href="/">
            <p>{t('Navbar.Venture').toLocaleUpperCase()}</p>
          </Link>
        </li>
        <li className={styles.SeparatedLi}>
          <div>
          </div>
        </li>
        <li className={styles.mainImageCommon}>
          <Link href="/">
            <p>{t('Navbar.Jericoara').toLocaleUpperCase()}</p>
          </Link>
        </li>
        <li className={styles.mainImage}>
          <Link href="/" title="Logo Gran Vellas">
            <Image src={Logo} width={150} height={150} alt="Logo Gran Vellas" >
              
            </Image>
          </Link>
        </li>
        <li className={styles.mainImageCommon}>
          <Link href="/">
            <p>{t('Navbar.Investment').toLocaleUpperCase()}</p>
          </Link>
        </li>
        <li className={styles.SeparatedLi}>
          <div>
          </div>
        </li>
        <li className={styles.mainImageCommon}>
          <Link href="/">
            <p>{t('Navbar.Reserve').toLocaleUpperCase()}</p>
          </Link>
        </li>

      </ul>
    </nav>
  )
}
