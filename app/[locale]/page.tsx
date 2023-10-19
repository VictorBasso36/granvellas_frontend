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


export default function Index() {
  const t = useTranslations('Index');
  return (
    <>
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
    </>
    );
}