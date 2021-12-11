/*
Testimonial {
    sobStory: "",
    name: "",
    position: "",
    year: ""
    image: ""
}
*/

module.exports.testimonials = [...Array(8)].map( (_, idx) => {
    return {
        sobStory: [...Array(4)].reduce( (i) => i + "This is a very sad story. But SOAR was fun.", ""),
        name: `First${idx} Last${idx}`,
        position: `Delegate`,
        year: '2018',
        image: "/assets/unknown.png"
    }
});
