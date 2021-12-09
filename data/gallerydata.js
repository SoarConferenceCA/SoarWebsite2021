module.exports.galleryData = [...Array(3)].map( (_, idx) => {
    return {
        year: (new Date()).getFullYear() - idx - 1,
        photos: [...Array(5 * 4 + 2)].map( (_, idx) => '/assets/unknown.png')
    }
});
