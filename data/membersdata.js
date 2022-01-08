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

module.exports.portfolios = [
    {
        name: "MLD",
        members: [
            {
                firstname: "Naythan",
                lastname: "Jayamaha",
                image: "/assets/anon.jpg",
                socials: [
                    {
                        type: mediaTypes.INSTAGRAM,
                        link: "https://instagram.com/naythan.jay/"
                    }
                ]
            }
        ]
    },
    {
        name: "Sponsorship",
        members: [
            {
                firstname: "Komal",
                lastname: "Jambusaria",
                image: "/assets/anon.jpg",
                socials: [
                    {
                        type: mediaTypes.INSTAGRAM,
                        link: "https://instagram.com/komal_j8/"
                    }
                ]
            },
            {
                firstname: "Anmol",
                lastname: "Bal",
                image: "/assets/anon.jpg",
                socials: [
                    {
                        type: mediaTypes.INSTAGRAM,
                        link: "https://instagram.com/anmol_290/"
                    }
                ]
            },
            {
                firstname: "Mohamed",
                lastname: "Alinur",
                image: "/assets/anon.jpg",
                socials: [
                    {
                        type: mediaTypes.INSTAGRAM,
                        link: "https://www.instagram.com/mohamedaalinur/"
                    }
                ]
            },
        ]
    },
    {
        name: "Creative Director",
        members: [
            {
                firstname: "Tianni",
                lastname: "Zhao",
                image: "/assets/anon.jpg",
                socials: [
                    {
                        type: mediaTypes.INSTAGRAM,
                        link: "https://instagram.com/tiannizhao/"
                    },
                ]
            },
            {
                firstname: "Ishleen",
                lastname: "Wadehra",
                image: "/assets/anon.jpg",
                socials: [
                    {
                        type: mediaTypes.INSTAGRAM,
                        link: "https://instagram.com/ishleen_wdh/"
                    }
                ]
            },
        ]
    },
    {
        name: "Entertainment",
        members: [
            {
                firstname: "",
                lastname: "",
                image: "/assets/anon.jpg",
                socials: [
                    {
                        type: mediaTypes.INSTAGRAM,
                        link: ""
                    }
                ]
            },
            {
                firstname: "Aliyah",
                lastname: "Yagboyaju",
                image: "/assets/anon.jpg",
                socials: [
                    {
                        type: mediaTypes.INSTAGRAM,
                        link: "https://www.instagram.com/_.aliyxh/"
                    }
                ]
            },
        ]
    },
    {
        name: "Junior Rep",
        members: [
            {
                firstname: "Yugma",
                lastname: "Vyas",
                image: "/assets/anon.jpg",
                socials: [
                    {
                        type: mediaTypes.INSTAGRAM,
                        link: "https://instagram.com/yugmav_/"
                    }
                ]
            },
            {
                firstname: "Abigail",
                lastname: "Shibu",
                image: "/assets/anon.jpg",
                socials: [
                    {
                        type: mediaTypes.INSTAGRAM,
                        link: "https://instagram.com/abiigailshibu/"
                    }
                ]
            },
        ]
    },
    {
        name: "Volunteer Head (CCOM)",
        members: [
            {
                firstname: "Tanya",
                lastname: "Puri",
                image: "/assets/anon.jpg",
                socials: [
                    {
                        type: mediaTypes.INSTAGRAM,
                        link: "https://instagram.com/tanya_puri22"
                    }
                ]
            },
            {
                firstname: "Neiloy",
                lastname: "Chaudhuri",
                image: "/assets/anon.jpg",
                socials: [
                    {
                        type: mediaTypes.INSTAGRAM,
                        link: "https://instagram.com/_neiloy/"
                    }
                ]
            },
            {
                firstname: "Armaan",
                lastname: "Gill",
                image: "/assets/anon.jpg",
                socials: [
                    {
                        type: mediaTypes.INSTAGRAM,
                        link: "https://instagram.com/armaan_gill18/"
                    }
                ]
            },
        ]
    },
    {
        name: "Chair",
        members: [
            {
                firstname: "Rhea",
                lastname: "Nijjer",
                image: "/assets/anon.jpg",
                socials: [
                    {
                        type: mediaTypes.INSTAGRAM,
                        link: "https://instagram.com/rheanijjer/"
                    }
                ]
            },
        ]
    }
];


// {
//     name: "",
//     members: [

//     ]
// },

// {
//     firstname: "",
//     lastname: "",
//     image: "/assets/anon.jpg",
//     socials: [
//         {
//             type: mediaTypes.INSTAGRAM,
//             link: ""
//         }
//     ]
// },

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

module.exports.mediaTypes = mediaTypes;
