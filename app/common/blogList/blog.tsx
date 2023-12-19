"use client"
import Image from 'next/image'
import Link from 'next/link'
import {useTranslations} from 'next-intl';
import styles from './styles.module.css'
import { url } from 'inspector';
import { useEffect, useState } from 'react';
import { useOpen } from '@/app/[locale]/providerModalConvert';

export default function BlogList() {
  const t = useTranslations('Index');
  const { open, setOpen } = useOpen()

  const [larguraDaJanela, setLarguraDaJanela] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setLarguraDaJanela(window.innerWidth);
    };

    // Captura a largura da janela quando o componente é montado
    handleResize();

    // Adiciona um ouvinte de redimensionamento para atualizar a largura da janela quando ela muda
    window.addEventListener('resize', handleResize);

    // Remove o ouvinte de redimensionamento quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.mainSection}>
      <div className={styles.mainSectionContainer}>
        <div className={styles.principalPosts}>
          {
            larguraDaJanela >= 1024 && (

              <div className={styles.mainPostImage} style={{backgroundImage: 'url("/blog1.svg")'}}>
                {/* img here */}
            
              </div>
            )

          }
          <div className={styles.contentPrincipalPost}>
            <h4><strong>{t('blogPosting1.title')}<br /></strong>{t('blogPosting1.titlespan')}</h4>
            <br />
            {
            larguraDaJanela < 1024 && (

              <div className={styles.mainPostImage} style={{backgroundImage: 'url("/blog2.svg")'}}>
                {/* img here */}
            
              </div>
            )

          }
            <p>{t('blogPosting1.description')}</p>
              <br />
              <button onClick={() => setOpen('whatsapp')}>
                <p><span>{t('Form.button').toUpperCase()}{' '}</span> {t('Form.buttonMain').toUpperCase()}</p>
                <div className={styles.DetailButton}>
                  <Image src={'/arrow.svg'} alt='Reserva jeri lote' height={25} width={25}>

                  </Image>
                </div>
              </button>
          </div>
        </div>
        <div className={styles.othersPosts}>
          <div className={styles.MainCard}>
            <div className={styles.mainPostPost} style={{backgroundImage: 'url("/blog2.svg")'}}>
                {/* img here */}
            
            </div>
            <div className={styles.mainContent}>
              <p className={styles.cardTitle}>{t('blogPosting2.title')} <strong>{t('blogPosting2.titlespan')}</strong></p>
              <br />
              <p className={styles.mainDescription}>
              {t('blogPosting2.description')}
              </p>
            </div>
          </div>
          <div className={styles.MainCard}>
            <div className={styles.mainPostPost} style={{backgroundImage: 'url("/blog3.svg")'}}>
                {/* img here */}
            
            </div>
            <div className={styles.mainContent}>
              <p className={styles.cardTitle}>{t('blogPosting3.title')} <strong>{t('blogPosting3.titlespan')}</strong></p>
              <br />
              <p className={styles.mainDescription}>
                {t('blogPosting3.description')}
              </p>
            </div>
          </div>
          <div className={styles.MainCard}>
            <div className={styles.mainPostPost} style={{backgroundImage: 'url("/blog4.svg")'}}>
                {/* img here */}
            
            </div>
            <div className={styles.mainContent}>
              <p className={styles.cardTitle}><strong>{t('blogPosting4.title')}</strong>{' '}  {t('blogPosting4.titlespan')}</p>
              <br />
              <p className={styles.mainDescription}>
                {t('blogPosting4.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainSand} style={{backgroundImage: 'url("/sand.svg")'}}>

      </div>
    </section>
  )
}
