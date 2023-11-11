"use client"
import Image from 'next/image'
import Link from 'next/link'
import {useTranslations} from 'next-intl';
import styles from './styles.module.css'
import { url } from 'inspector';
import { useEffect, useState } from 'react';

export default function BlogList() {
  const t = useTranslations('Index');


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

  console.log(larguraDaJanela)
  return (
    <section className={styles.mainSection}>
      <div className={styles.mainSectionContainer}>
        <div className={styles.principalPosts}>
          {
            larguraDaJanela >= 1024 && (

              <div className={styles.mainPostImage} style={{backgroundImage: 'url("/istockphoto-1211311866-612x612.jpg")'}}>
                {/* img here */}
            
              </div>
            )

          }
          <div className={styles.contentPrincipalPost}>
            <h4><strong>Jericoacoara:<br /></strong>O paraíso cearense</h4>
            <br />
            {
            larguraDaJanela < 1024 && (

              <div className={styles.mainPostImage} style={{backgroundImage: 'url("/istockphoto-1211311866-612x612.jpg")'}}>
                {/* img here */}
            
              </div>
            )

          }
            <p>Considerada uma das praias mais visitadas do mundo, Jericoacoara é destino crescente de empreendimentos nacionais e internacionais. O paraíso cearense é o local escolhido para o primeiro lançamento da Gran Vellas Urbanismo no mercado imobiliário.</p>
              <br />
              <button>
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
            <div className={styles.mainPostPost} style={{backgroundImage: 'url("/istockphoto-1211311866-612x612.jpg")'}}>
                {/* img here */}
            
            </div>
            <div className={styles.mainContent}>
              <p className={styles.cardTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <strong>sed do eiusmod tempor.</strong></p>
              <br />
              <p className={styles.mainDescription}>
                As expectativas da Secretaria do Turismo do Ceará (Setur) são positivas. A estimativa é que o Ceará receba 133 mil viajantes 
                no feriado, um aumento de 18,8% em relação aos 112 mil recebidos no ano passado.
              </p>
            </div>
          </div>
          <div className={styles.MainCard}>
            <div className={styles.mainPostPost} style={{backgroundImage: 'url("/istockphoto-1211311866-612x612.jpg")'}}>
                {/* img here */}
            
            </div>
            <div className={styles.mainContent}>
              <p className={styles.cardTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <strong>sed do eiusmod tempor.</strong></p>
              <br />
              <p className={styles.mainDescription}>
                Localizado na Lagoa do Paraíso a somente 18km de Jericoacoara o Alchymist Beach Club é mais uma das propriedades  do grupo Alchymist ao redor do mundo. 
              </p>
            </div>
          </div>
          <div className={styles.MainCard}>
            <div className={styles.mainPostPost} style={{backgroundImage: 'url("/istockphoto-1211311866-612x612.jpg")'}}>
                {/* img here */}
            
            </div>
            <div className={styles.mainContent}>
              <p className={styles.cardTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <strong>sed do eiusmod tempor.</strong></p>
              <br />
              <p className={styles.mainDescription}>
                A vila, localizada a cerca de 300 km de Fortaleza, mais precisamente na cidade de Jijoca de Jericoacoara, é um lugar pacato, com ruas de areia e cenários bucólicos, ideais para quem quer descansar e renovar as energias!
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
