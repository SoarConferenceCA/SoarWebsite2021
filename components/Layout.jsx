import NavBar from './NavBar';
import Footer from './Footer';
import Head from 'next/head';
import { links } from './routes';
import socials from './socials';

export default function Layout({ children }) {
    console.log(socials);
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <NavBar links={links} />
            <main>
                {children}
            </main>
            <Footer links={links} socials={socials} />
        </>
    );
}
