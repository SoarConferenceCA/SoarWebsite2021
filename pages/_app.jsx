import '../styles/global.css';
import Layout from '../components/Layout';

export default function SoarWebsite({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
