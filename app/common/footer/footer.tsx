"use client"
import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'
import {useTranslations} from 'next-intl';


export default function Footer() {
  const t = useTranslations('Index');
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.mainContainer}>
        <div>
          <ul>
            <Link href="/">
              <Image src="/Logo.svg" width={150} height={150} alt={''}></Image>
            </Link>
          </ul>
          <ul>
              <li> 
                <h6>{t('Footer.About')}</h6>
              </li>
              <li>
                {t('Navbar.Venture')}
              </li>
              <li>
                {t('Navbar.Jericoara')}
              </li>
              <li>
                {t('Navbar.Investment')}
              </li>
              <li>
                {t('Navbar.Reserve')}
              </li>
          </ul>
          <ul>
            <li>
              <h6>
                {t('Footer.Contact')}
              </h6>
            </li>
            <li>
              {t('Footer.Talk')}
            </li>
            <li>            
              <Link href="/">
                <Image src="/tel.svg" height={15} width={15} alt="Tel Gran Vellas Urbanismo">

                </Image>
                <p>(85) 98174-9319</p>
              </Link>
            </li>
            <li>
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
            </li>
          </ul>
          <ul>
            <li>
              <h6>{t('Footer.service')}</h6>
            </li>
            <li>
              {t('Footer.dateWeek')}
            </li>
          </ul>
        </div>
        <div className={styles.Note}>
          <p>AVISO LEGAL</p>
          
          <p>* Parcelas válidas para  lote 23 de 250,05m², não acrescido os 7 balões anuais no valor de R$ 12.502,50, tanto as parcelas como os balões, serão reajustadas anualmente pelo IPCA+6%. (consultar tabela e disponibilidade com seu corretor).</p>

          <p>Nos é reservado o direito de alterar qualquer informação ou valor disponibilizados dos  lotes ofertados e de seus acessórios (condomínio, iptu e etc), tanto em nosso website como em qualquer outro meio de comunicação ou divulgação de ofertas sem que haja qualquer aviso prévio.</p>

          <p>Ainda nos é reservado o direito de atender apenas aqueles clientes que se identifiquem com nome completo, telefone fixo ou móvel e e-mail e que o imóvel seja exclusivamente para seu uso e interesse. O cliente que se recusar informar tais dados infelizmente não poderá receber atendimento, seja para venda ou dúvidas diversas, por mais simples que estas sejam; O cliente que nos contatar solicitando informações para terceiros deverá informar além de seus dados, os dados do referido terceiro interessado para que não haja duplicidade em atendimento e falhas de comunicação. </p>
        </div>
      </div>
    </footer>
  )
}
