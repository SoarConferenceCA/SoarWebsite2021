const mediaTypes = {
    EMAIL: 0,
    TWITTER: 1,
    FACEBOOK: 2,
    INSTAGRAM: 3,
    GITHUB: 4,
    YOUTUBE: 5,
};

const x = [
    "http://gmail.com",
    "http://twitter.com",
    "http://facebook.com"
];

/*

Portfolio {
    name: "PORTFOLIO_NAME",
    members: [
        Member {
            firstname: "",
            lastname: "",
            position: "",
            image: "",
            socials: [
                Social {
                    type: `mediaType`,
                    link: ""
                }
            ]
        }
    ]
}
portfolio.members.length > 2 ? 2 : portfolio.members.length
*/

module.exports.portfolios = [...Array(6)].map( (_, idx) => {
    return {
        name: `Portfolio ${idx}`,
        members: [...Array(idx+1)].map( (_, gidx) => {
            return {
                firstname: `Member${gidx}`,
                lastname: `Last${gidx}`,
                position: `Some Position ${gidx}`,
                image: "/assets/anon.jpg",
                socials: [...Array(3)].map( (_, yidx) => {
                    return {
                        type: yidx,
                        link: x[yidx]
                    }
                })
            }
        })
    }
});

module.exports.mediaTypes = mediaTypes;
