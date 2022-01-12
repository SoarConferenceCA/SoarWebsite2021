const { basePath } = require('../config');
/*
Testimonial {
    sobStory: "",
    name: "",
    position: "",
    year: ""
    image: ""
}
*/

let testimonials = [
    {
        sobStory: `As soon as I got there, the volunteers were very eager to help, after that the volunteers were engaging, keeping us engaged with songs and activities. During the mentorship I learned a lot. The LDs walked us through time management, organization and conflict de-escalation. They were always ready to answer any questions we might have. I can say from experience I have learned a lot about high school from SOAR.`,
        name: 'Vaarij Betala',
        position: 'Delegate',
        year: '2018',
        image: '/assets/unknown.png'
    },
    {
        sobStory: `As a timid kid, the idea of spending an entire day with a group of strangers was nauseating but the SOAR experience was like a roller-coaster. The initial foot forward is scary because [you're] stepping into the unknown but by the end, you never want to get off. […] Over the years, I’ve participated in [other] conferences as a delegate, volunteer and exec but none of them match the enjoyment of SOAR. From pillow forts to roast-offs, the day was filled with memorable moments. SOAR has given me memories that I will forever cherish and more importantly, it helped me to grow as a person by stepping out of my comfort zone, into the unknown.`,
        name: 'Huzaifa Saeed',
        position: 'Delegate',
        year: '2017',
        image: '/assets/unknown.png'
    },
    {
        sobStory: `One of the most incredible, transformative experiences of my life. [As a 2015 delegate, executive member, and finally Chair] SOAR taught me about leadership through action, growing through my disappointments, and working with those around me. Through SOAR I met some of my closest friends to this day, [and] had some of my most memorable experiences. […] While under the impression that I was just having fun, I subconsciously learnt how to develop my thought process and how to work with others. […] I would encourage everyone to SOAR into their future!`,
        name: 'Vyomesh Iyenga',
        position: 'Former Chair',
        year: '2020',
        image: '/assets/unknown.png'
    },
    {
        sobStory: `Honestly, SOAR was really fun—it had its own unique and wholesome vibe that I liked a lot. Seeing the delegates hyped up and really enjoying themselves throughout the conference was sweet […] I'd rate my SOAR experience a straight up 10/10 and I can't wait until SOAR 2021!!!`,
        name: 'Ankita Goyal',
        position: 'Volunteer',
        year: '2021',
        image: '/assets/unknown.png'
    },
    {
        sobStory: `My delegates were initially timid but by the end of the conference they were all more confident and vibrant. Through my experience, although I was able to impart my wisdom to my delegates, they had taught me a lot as well. During team activities my delegates were inspiring to watch as they took the time to learn more about each other and their strengths before conducting an activity. […] I was grateful to be able to be in a position to make an impact on my delegates but I was also [grateful] to learn more about myself and learn from those around me.`,
        name: 'Aayushi Jha',
        position: 'Leadership Developer',
        year: '2019',
        image: '/assets/unknown.png'
    },
    {
        sobStory: `SOAR 2018 was definitely an unforgettable conference for me because it’s where I met my best friend :)`,
        name: 'Tanya Puri',
        position: 'Delegate',
        year: '2018',
        image: '/assets/unknown.png'
    },
];

testimonials = testimonials.map( (item) => {
    return {
        ...item,
        image: `${basePath}${item.image}`
    };
});

module.exports = { testimonials };
