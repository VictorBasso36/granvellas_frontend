import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import './globals.css'
import { Young_Serif, Kanit } from 'next/font/google'

const young_Serif = Young_Serif({ subsets: ['latin-ext'], weight: ['400'] })
const kanit = Kanit({ subsets: ['latin-ext'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })
export function generateStaticParams() {
  return [{ locale: 'pt-br' }, { locale: 'en' }];
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
      <style>
        {`
          :root {
            --young-serif-font-family: ${young_Serif.style.fontFamily};
            --kanit-font-family: ${kanit.style.fontFamily};
          }
          html {
            font-family: var(--kanit-font-family);
          }
        `}
      </style>
      <body className={`${young_Serif} ${kanit}`} >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
