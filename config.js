let basePath;
if (process.env.BTYPE === 'nocus') {
    basePath = '/SoarWebsite2021';
} else {
    basePath = '';
}

module.exports = { basePath };
