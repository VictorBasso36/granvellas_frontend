'use client';
 
import {useTranslations} from 'next-intl';
import LanguageBar from '../common/language/landuageBar';
import NavBar from '../common/navbar/navBar';
import Footer from '../common/footer/footer';


export default function Index() {
  const t = useTranslations('Index');
  return (
    <>
    <LanguageBar />
    <NavBar />
    <h1>{t('title')}</h1>
    <Footer />
    </>
    );
}