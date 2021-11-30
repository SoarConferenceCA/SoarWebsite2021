import NavBar from './NavBar';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <NavBar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}
