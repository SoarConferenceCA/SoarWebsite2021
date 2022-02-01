import '../styles/global.css';
import Layout from '../components/Layout';
import { config as fontawesomeConfig } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

fontawesomeConfig.autoAddCss = false;

export default function SoarWebsite({ Component, pageProps }) {
    return (
        <Layout Component={Component} pageProps={pageProps} />
    );
}
