import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from "next/font/google";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Murabbi</title>
                <meta name="description" content="At Murabbi, we understand that traditional training methods don't always work for everyone. That's why we offer personalized solutions tailored to meet the unique needs of each learner. Our expert trainers provide continuous guidance and mentoring to ensure that each learner reaches their full potential. With a commitment to excellence, innovation, and personalized service, we aspire to be the leading provider of training solutions in the digital age. Join us on this journey and let us help you unlock your potential." />
                <meta name="google-site-verification" content="6dTDz6yyktfRCuYnCBx4R-xRNldAp0fJ-do-ZLSCxDs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={inter.className}>
                <Component {...pageProps} />
            </div>
        </>
    );
} 