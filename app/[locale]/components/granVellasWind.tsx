'use client';
import styles from './granVellasWind.module.css'
import Image from 'next/image';

export default function GranVellasWind() {

    return (
      <>
        <section className={styles.mainSection}>
          <div className={styles.mainContainer}>
              <h2>Conheça o <strong>Gran Vellas Wind</strong>, seu <span>próximo sonho.</span></h2>
              <p className={styles.mainContainerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis blandit turpis cursus. Bibendum est ultricies integer quis auctor elit sed. Magna sit amet purus gravida quis blandit turpis cursus in. Ipsum dolor sit amet consectetur. </p>
              <div className={styles.mainContainerCards}>
                <div className={styles.promoCard}>
                  <p>EMPREENDIMENTO COM</p>
                  <p><span>450 LOTES</span></p>
                </div>
                <div className={styles.promoCard}>
                  <p>ESTRUTURA E LAZER</p>
                  <p><span>COMPLETO</span></p>
                </div>
                <div className={styles.promoCard}>
                  <p>LOCALIZADO NA LAGOA</p>
                  <p><span>DO PARAÍSO</span></p>
                </div>
              </div>

          </div>
          <Image className={styles.firstFlower} src="/bannerFlower.svg" alt='Apartamentos com area verde Gran vellas wind' width={280} height={450}>

          </Image>
          <Image className={styles.secondFlower} src="/bannerFlower.svg" alt='Apartamentos com area verde Gran vellas wind' width={280} height={450}>

          </Image>
        </section>
      </>
      );
  }