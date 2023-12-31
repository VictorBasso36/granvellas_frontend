'use client';
 
import {useTranslations} from 'next-intl';
import LanguageBar from '../common/language/landuageBar';
import NavBar from '../common/navbar/navBar';
import Footer from '../common/footer/footer';
import MainBanner from './components/mainBanner';
import GranVellasWind from './components/granVellasWind';
import Video from '../common/video/video';
import Form from '../common/formHere/form';
import Assessment from '../common/Assessment/Assessment';
import BlogList from '../common/blogList/blog';
import Carrousel from '../common/carrousel';
import { Metadata } from 'next';
import styles from './page.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { useOpen } from './providerModalConvert';
import ModalLead from './modal';

export default function Index() {
  const t = useTranslations('Index');
  const metadata: Metadata = {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.metakeyswords'),
    viewport: {
      minimumScale: 1,
      initialScale: 1,
      width: 'device-width'
    },
    icons: {
      icon: '/Logo.svg',
    },
  }

  const { open, setOpen } = useOpen()
  return (
    <>

      <div className={styles.whatsapp} onClick={() => setOpen('whatsapp')}>
        <Image src='/whatsapp.svg' alt='whatsapp gran vellas' width={45} height={45}>

        </Image>
      </div>


    <LanguageBar />
    <NavBar />
    <MainBanner />
    <GranVellasWind />
    <Carrousel />
    <BlogList />
    <Assessment />
    <Video />
    <Form />
    <Footer />
    <ModalLead />
    </>
    );
}