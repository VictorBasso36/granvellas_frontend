"use client"
import Image from 'next/image'
import styles from './styles.module.css'

export default function Footer() {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.mainContainer}>
        <ul>
          <li>
            <div>

            </div>
          </li>
          <li>
            <div>
              
            </div>
          </li>
          <li>
            <div>
              
            </div>
          </li>
          <li>
            <div>
              
            </div>
          </li>
        </ul>
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
