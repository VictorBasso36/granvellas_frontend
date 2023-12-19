import { NextIntlClientProvider, useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import './globals.css'
import { Young_Serif, Kanit } from 'next/font/google'
import GraphQLProvider from '../lib/provider';
import Script from 'next/script';

import { OpenProvider } from './providerModalConvert';
const young_Serif = Young_Serif({ subsets: ['latin-ext'], weight: ['400'], variable: '--young-serif-font-family'})
const kanit = Kanit({ subsets: ['latin-ext'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], variable: '--kanit-font-family' })
export function generateStaticParams() {
  return [{ locale: 'pt-br' }, { locale: 'en' }, { locale: 'es' }];
}

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  let title, description, keywords;

  switch(locale) {
    case 'pt-br':
      title = 'Gran Vellas Urbanismo - Lançamento do Empreendimento Imobiliário Jericoacoara';
      description = 'A Gran Vellas Urbanismo tem o prazer de anunciar o lançamento do nosso novo empreendimento imobiliário, Jericoacoara. Localizado a cerca de 300 km de Fortaleza, Jeri é uma vila de pescadores encantadora e um dos destinos mais procurados por viajantes.';
      keywords = 'Empreendimento Imobiliário, Lançamento, Jericoacoara, Gran Vellas Urbanismo, Incorporadora, Imóveis, Localização Privilegiada, Vila de Pescadores, Praias Belas, Pontos Turísticos';
      break;
    case 'en':
      title = 'Gran Vellas Urbanismo - Launch of the Jericoacoara Real Estate Development';
      description = 'Gran Vellas Urbanismo is pleased to announce the launch of our new real estate development, Jericoacoara. Located about 300 km from Fortaleza, Jeri is a charming fishing village and one of the most sought-after destinations for travelers.';
      keywords = 'Real Estate Development, Launch, Jericoacoara, Gran Vellas Urbanismo, Developer, Properties, Prime Location, Fishing Village, Beautiful Beaches, Tourist Attractions';
      break;
    case 'es':
      title = 'Gran Vellas Urbanismo - Lanzamiento del Desarrollo Inmobiliario Jericoacoara';
      description = 'Gran Vellas Urbanismo se complace en anunciar el lanzamiento de nuestro nuevo desarrollo inmobiliario, Jericoacoara. Situado a unos 300 km de Fortaleza, Jeri es un encantador pueblo de pescadores y uno de los destinos más buscados por los viajeros.';
      keywords = 'Desarrollo Inmobiliario, Lanzamiento, Jericoacoara, Gran Vellas Urbanismo, Desarrolladora, Propiedades, Ubicación Privilegiada, Pueblo de Pescadores, Hermosas Playas, Lugares Turísticos';
      break;
    default:
      title = 'Gran Vellas Urbanismo - Lançamento do Empreendimento Imobiliário Jericoacoara';
      description = 'A Gran Vellas Urbanismo tem o prazer de anunciar o lançamento do nosso novo empreendimento imobiliário, Jericoacoara. Localizado a cerca de 300 km de Fortaleza, Jeri é uma vila de pescadores encantadora e um dos destinos mais procurados por viajantes.';
      keywords = 'Empreendimento Imobiliário, Lançamento, Jericoacoara, Gran Vellas Urbanismo, Incorporadora, Imóveis, Localização Privilegiada, Vila de Pescadores, Praias Belas, Pontos Turísticos';
   
  }
  return {
    title,
    description,
    keywords,
    viewport: {
      minimumScale: 1,
      initialScale: 1,
      width: 'device-width'
    },
    authors: [{
      name: 'Guilherme Luziac',
      url: 'https://www.linkedin.com/in/guilherme-carvalho-bispo/?originalSubdomain=br'
    },
    {
      name: 'Victor Basso Dev',
      url: 'www.linkedin.com/in/victor-basso-b3090a189'
    }  
    ],
    icons: {
      icon: '/Logo.svg',
    },
  }
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
    id="fb-pixel"
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
          src="https://www.facebook.com/tr?id=1168690590667792&ev=PageView&noscript=1"/>
    </noscript>
    <meta name="robots" content="index, follow"></meta>
    <meta name="revisit-after" content="5 days"></meta>
    <meta name="language" content={locale}></meta>
      <OpenProvider key={0}>
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
        id="fb-pixel"
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
          <GraphQLProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </GraphQLProvider>
        </body>
      </OpenProvider>
    </html>
  );
}
function unstable_setRequestLocale(locale: string) {
  throw new Error('Function not implemented.');
}

