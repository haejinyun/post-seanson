import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
// import Header from '@/components/Header/page';
// import Footer from '@/components/Footer/page';
import TanstackProviders from '@/provider/tanstackProviders';
import { ClubProvider } from '@/provider/clubProviders';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const kboBold = localFont({
  src: './fonts/KBO-Dia-Gothic_bold.woff',
  variable: '--font-kbo-bold',
  weight: '700', // Bold weight
});

const kboLight = localFont({
  src: './fonts/KBO-Dia-Gothic_light.woff',
  variable: '--font-kbo-light',
  weight: '300', // Light weight
});

const kboMedium = localFont({
  src: './fonts/KBO-Dia-Gothic_medium.woff',
  variable: '--font-kbo-medium',
  weight: '500', // Medium weight
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kboBold.variable} ${geistSans.variable} ${geistMono.variable}  ${kboLight.variable} ${kboMedium.variable}`}
      >
        <TanstackProviders>
          <ClubProvider>{children}</ClubProvider>
        </TanstackProviders>
      </body>
    </html>
  );
}
