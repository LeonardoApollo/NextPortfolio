import MainPage from '@/views/MainPage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['main', 'common'])),
        },
    };
}

export default function Home(props: any) {
    return (
        <>
            <Head>
                <title>Frontend developer</title>
            </Head>
            <MainPage />
        </>
    );
}
