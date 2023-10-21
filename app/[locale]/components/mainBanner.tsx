'use client';
import Link from 'next/link';
import styles from './mainBanner.module.css'
import { useTranslations } from 'next-intl';

export default function MainBanner() {
    const t = useTranslations('Index');

    return (
      <>
        <main className={styles.main}>
          <div className={styles.mainContainer}>
          <h1 dangerouslySetInnerHTML={{ __html: t('MainBanner').replace(/(paradise|paraíso|pedaço do|piece of|pedazo del)/g, (match) => {
            switch (match) {
              case 'paradise':
              case 'paraíso':
                return '<strong>' + match + '</strong>';
              case 'pedaço do':
              case 'piece of':
              case 'pedazo del':
                return '<span>' + match + '</span>';
              default:
                return match;
            }
          }) }}>
          </h1>

            <br />
            <Link href="/">
              <button className={styles.MainButton}>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('Navbar.Reserve').toLocaleUpperCase().replace(/(unidade|UNIDADE|UNIT|unit|UNIDAD|unidad)/g, '<span>$1</span>')
                }}
              ></p>

              </button>
            </Link>
          </div>
        </main>
      </>
      );
  }