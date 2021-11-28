const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
    const config = {
        ...defaultConfig,
        reactStrictMode: true,
    }

    return config;
}