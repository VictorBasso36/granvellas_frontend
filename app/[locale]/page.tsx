'use client';
 
import {useTranslations} from 'next-intl';
import LanguageBar from '../common/language/landuageBar';
import NavBar from '../common/navbar/navBar';
import Footer from '../common/footer/footer';
import MainBanner from './components/mainBanner';
import GranVellasWind from './components/granVellasWind';


export default function Index() {
  const t = useTranslations('Index');
  return (
    <>
    <LanguageBar />
    <NavBar />
    <MainBanner />
    <GranVellasWind />
    <h1>{t('title')}</h1>
    <Footer />
    </>
    );
}