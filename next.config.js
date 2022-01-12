const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
    const config = {
        ...defaultConfig,
        reactStrictMode: true,
    }

    if (process.env.BTYPE === "nocus") {
        config.assetPrefix = '/SoarWebsite2021';
        config.basePath = '/SoarWebsite2021';
    }

    return config;
}