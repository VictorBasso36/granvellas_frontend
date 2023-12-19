import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import './globals.css'
import { Young_Serif, Kanit } from 'next/font/google'
import GraphQLProvider from '../lib/provider';
import { Metadata } from 'next';
import {createTranslator} from 'next-intl';
import Script from 'next/script';
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
    <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id='GTM-TS6PB2TC'`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
              __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', 'GTM-P65PL5LC');
      `,
        }}
      />

    <Script
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{ __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1168690590667792');
      fbq('track', 'PageView');
      `}}>
    </Script>
    <noscript>
      <img height="1" width="1" style={{display:"none"}} 
          src="https://www.facebook.com/tr?id={your-pixel-id-goes-here}&ev=PageView&noscript=1"/>
    </noscript>
    <meta name="robots" content="index, follow"></meta>
    <meta name="revisit-after" content="5 days"></meta>
    <meta name="author" content={t('meta.title')}></meta>
    <meta name="language" content={locale}></meta>
    <meta name="keywords" content={t('meta.metakeyswords')}></meta>
    <meta name="description" content={t('meta.description')}></meta>
      <body className={`${young_Serif.variable} ${kanit.variable}`} >
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P65PL5LC"
        height="0" width="0" style={{display:"none", visibility:"hidden"}}>
        </iframe>
      </noscript>
       <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', 'GTM-P65PL5LC');
        `,
        }}
      />
      <Script
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1168690590667792');
        fbq('track', 'PageView');
        `}}>
      </Script>
      <noscript>
        <img height="1" width="1" style={{display:"none"}} 
            src="https://www.facebook.com/tr?id={your-pixel-id-goes-here}&ev=PageView&noscript=1"/>
      </noscript>
        <GraphQLProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </GraphQLProvider>
      </body>
    </html>
  );
}
