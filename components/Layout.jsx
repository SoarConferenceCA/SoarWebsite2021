import { useNavBar } from './NavBar';
import Footer from './Footer';
import Head from 'next/head';
import { links } from './routes';
import socials from './socials';

export default function Layout({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Component {...pageProps} links={links} />
            <Footer links={links} socials={socials} />
        </>
    );
}
