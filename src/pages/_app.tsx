import '@/styles/globals.scss';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Navbar } from '@/widgets/Navbar';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <meta name="title" content="Frontend developer" />
                <meta
                    name="description"
                    content="Website-portfolio of Frontend Developer Tyapkov Mikhail"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://metatags.io/" />
                <meta property="og:title" content="Frontend developer" />
                <meta
                    property="og:description"
                    content="Website-portfolio of Frontend Developer Tyapkov Mikhail"
                />
                <meta
                    property="og:image"
                    content="https://metatags.io/images/meta-tags.png"
                />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://metatags.io/" />
                <meta property="twitter:title" content="Frontend developer" />
                <meta
                    property="twitter:description"
                    content="Website-portfolio of Frontend Developer Tyapkov Mikhail"
                />
                <meta
                    property="twitter:image"
                    content="https://metatags.io/images/meta-tags.png"
                />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
};

export default appWithTranslation(App);
