"use client"
import Link from 'next/link'
import styles from './modal.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useOpen } from './providerModalConvert'
import { useTranslations } from 'next-intl'

export default function ModalLead() {
    const { open, setOpen } = useOpen()
    const [render, setRender] = useState<boolean>(false);
    const t = useTranslations('Index');
    useEffect(() => {
        if(open === 'whatsapp'){
            setRender(true)
        } else if(open === 'true'){
            setRender(false)
        }
        else{
            setRender(false)
        }
    }, [open])

    
    function setClose() {
      setOpen('false')
    }
    const [sucess, setSucess] = useState(false);
    const [formData, setFormData] = useState({
      Name: '',
      Email: '',
      Tel: '',
    });
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      sucess && null
      try {
        const response = await fetch('https://www.jerigranvellas.com.br/pt-br/pages/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData?.Name,
                company: "sua base de contatos",
                acting: "Contato via modal do site",
                tel: formData?.Tel,
                email: formData?.Email
            }),
        });
  
        if (response.ok) {
          const responseData = await response.json();
          setSucess(true)
          console.log(responseData)
          window.open('https://wa.me/5511992088836?text=Oi!%20Vi%20o%20site%20do%20Jeri%20Gran%20Vellas%20e%20fiquei%20super%20interessado%20no%20Projeto%20Imobili%C3%A1rio%20deles.%20Voc%C3%AA%20tem%20mais%20informa%C3%A7%C3%B5es%20sobre%20isso?%20Estou%20curioso%20para%20saber%20mais!%20', '_blank');

        } else {
          console.error('Erro na solicitação:', response.status, response.statusText);

        }
      } catch (error) {
        console.error('Erro na solicitação:', error);

      }
    };

      const phoneMask = (value: string) => {
        return value
          .replace(/\D/g, '')
          .replace(/^(\d{2})(\d)/g, '($1) $2')
          .replace(/(\d)(\d{4})$/, '$1-$2')
          .slice(0, 20);
      }
    

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
      
        if (name === 'Tel') {
          value = phoneMask(value);
        }
      
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      if (!render) {
        return null;
      }

      


    return (
    <>  
        <section className={styles.main}>
            <div className={styles.container} >
                <div className={styles.modal}>
                    <div className={styles.contentTitle}>
                        <p className={styles.Close} onClick={setClose}><strong>X</strong></p>
                        <h1>Fale conosco via&nbsp;<span>Whatsapp</span></h1>
                    </div>
                    
                    
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="Name">
                
                            <input type="text" placeholder={t('Form.name')} required={true} name='Name' 
                            value={formData.Name}
                            onChange={handleChange}
                            />
                            
                        </label>
                        <label htmlFor="Tel">

                            <input type="tel" required={true} name='Tel' 
                            value={formData.Tel}
                            placeholder={t('Form.Tel')}
                            onChange={handleChange} />
                        </label>
                        <label htmlFor="Email">
                          
                            <input type="email" required={true}  placeholder={t('Form.Email')} name='Email'
                            value={formData.Email}
                            onChange={handleChange} />
                        </label><br />
                       
                          <button className={styles.mainButton}>
                          {!sucess ? <p>{t('Form.new')}</p> : <p>{t('Form.sucess')}</p>}
                          </button>
                        
                    </form> 
                    
                    
                </div>
            </div>
        </section>
    </>
  )
}