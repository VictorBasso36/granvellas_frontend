import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import './globals.css'
import { Young_Serif, Kanit } from 'next/font/google'
import GraphQLProvider from '../lib/provider';
import { Metadata } from 'next';
import {createTranslator} from 'next-intl';
const young_Serif = Young_Serif({ subsets: ['latin-ext'], weight: ['400'], variable: '--young-serif-font-family'})
const kanit = Kanit({ subsets: ['latin-ext'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], variable: '--kanit-font-family' })
export function generateStaticParams() {
  return [{ locale: 'pt-br' }, { locale: 'en' }, { locale: 'es' }];
}
export const metadata: Metadata = {
  title: 'Gran Vellas Urbanismo - Lançamento do Empreendimento Imobiliário Jericoacoara',
  description: 'A Gran Vellas Urbanismo tem o prazer de anunciar o lançamento do nosso novo empreendimento imobiliário, Jericoacoara. Localizado a cerca de 300 km de Fortaleza, Jeri é uma vila de pescadores encantadora e um dos destinos mais procurados por viajantes.',
  viewport: {
    minimumScale: 1,
    initialScale: 1,
    width: 'device-width'
  },
  icons: {
    icon: '/Logo.svg',
  },
}
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  const t = createTranslator({locale, messages});
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

  return (
  <html lang={locale}>
    <meta name="robots" content="index, follow"></meta>
    <meta name="revisit-after" content="5 days"></meta>
    <meta name="author" content={t('meta.title')}></meta>
    <meta name="language" content={locale}></meta>
    <meta name="keywords" content={t('meta.metakeyswords')}></meta>
    <meta name="description" content={t('meta.description')}></meta>
      <body className={`${young_Serif.variable} ${kanit.variable}`} >
        <GraphQLProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </GraphQLProvider>
      </body>
    </html>
  );
}
