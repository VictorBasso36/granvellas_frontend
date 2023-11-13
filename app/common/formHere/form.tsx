"use client"
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './styles.module.css'; // Substitua pelo caminho real do seu arquivo de estilo
import Link from 'next/link';
import Image from 'next/image';
export default function Form() {
  const t = useTranslations('Index');
  const [sucess, setSucess] = useState(false);
  const [formData, setFormData] = useState({
    Nome: '',
    Email: '',
    Telefone: '',
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sucess && null
    try {
      const response = await fetch('https://granvellas.bassodev.com.br/api/contatoes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setSucess(true)
      } else {
        console.error('Erro na solicitação:', response.status, response.statusText);
        // Lide com o erro conforme necessário
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
      // Lide com o erro conforme necessário
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <section className={styles.mainSection} id="reserv">
        <div className={styles.containerMain}>
          {!sucess && <>
          <form onSubmit={handleSubmit}>
            <h5>
              {t('Form.title')} {' '}
              <br></br>
              <strong>{t('Form.titleMain')}</strong>
            </h5>
            <input
              type="text"
              name="Nome"
              placeholder={t('Form.name')}
              value={formData.Nome}
              onChange={handleChange}
            />
            <input
              type="email"
              name="Email"
              placeholder={t('Form.Email')}
              value={formData.Email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="Telefone"
              placeholder={t('Form.Tel')}
              value={formData.Telefone}
              onChange={handleChange}
            />
            
            <button type="submit">
              <p>
                <span>{t('Form.button').toUpperCase()}{' '}</span>
                {t('Form.buttonMain').toUpperCase()}
              </p>
              <div className={styles.DetailButton}>
                <Image src="arrow.svg" alt='Lote gran vellas detalhes juridicos - registro' width={20} height={20}>

                </Image>
              </div>
            </button>
          </form>
          </>
          }
          {sucess && 
          <>
          <form onSubmit={handleSubmit} style={{display: 'flex', alignItems: 'center'}}>
          <h5>
            {t('Form.title')} {' '}
            <br></br>
            <strong>{t('Form.titleMain')}</strong>
          </h5>
          <p style={{width: '100%', textAlign: 'center', maxWidth: '380px'}}>{t('Form.sucess')}</p>
          <br />
          <Link href='/'>
            <div className={styles.whatsapp}>
              <Image src='/whatsapp.svg' alt='whatsapp gran vellas' width={45} height={45}>

              </Image>
            </div>
          </Link>
          <br />
          <button onClick={() => setSucess(false)}>
              <p>
                <span>{t('Form.new').toUpperCase()}{' '}</span>
              </p>
              <div className={styles.DetailButton}>
                <Image src="arrow.svg" alt='Lote gran vellas detalhes juridicos - registro' width={20} height={20}>

                </Image>
              </div>
            </button>
            </form>
          </>
          }
        </div>
      </section>
    </>
  );
}
