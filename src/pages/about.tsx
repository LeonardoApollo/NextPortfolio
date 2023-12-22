import { AboutPage } from '@/views/AboutPage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { Suspense } from 'react';

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['about', 'common'])),
        },
    };
}

export default function Home() {
    return (
        <>
            <Head>
                <title>About Me</title>
            </Head>
            <Suspense fallback="Loading...">
                <AboutPage />
            </Suspense>
        </>
    );
}
