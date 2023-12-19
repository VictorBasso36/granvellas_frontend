'use client';
import Link from 'next/link';
import styles from './mainBanner.module.css'
import { useTranslations } from 'next-intl';
import { useOpen } from '../providerModalConvert';

export default function MainBanner() {
  
    const { open, setOpen } = useOpen()
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
              case 'pedaço':
              case 'piece':
              case 'pedazo':
                return '<span>' + match + '</span>';
              default:
                return match;
            }
          }) }}>
          </h1>

            <br />
            
              <button className={styles.MainButton} onClick={() => setOpen('whatsapp')}>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('Navbar.Reserve').toLocaleUpperCase().replace(/(unidade|UNIDADE|UNIT|unit|UNIDAD|unidad)/g, '<span>$1</span>')
                }}
              ></p>

              </button>
        
          </div>
        </main>
      </>
      );
  }