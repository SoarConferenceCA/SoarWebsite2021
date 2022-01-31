import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const links = [
    { title: "Facebook", href: "https://www.facebook.com/groups/SOARConference/", icon: faFacebook },
    { title: "Instagram", href: "https://www.instagram.com/_soarconference", icon: faInstagram },
    { title: "LinkedIn", href: "https://www.linkedin.com/company/soar-leadership-conference", icon: faLinkedin },
    { title: "YouTube", href: "https://www.youtube.com/watch?v=VAQCjkfGs7M&fbclid=IwAR3y9DM52kXeYFPI7p-EnidiusSYPXeE_Youkmo_bT-QylEkWzcdyMf_YVY", icon: faYoutube }
]

const socials = links.map( ({ href, icon }) => ({
    href,
    icon: <FontAwesomeIcon size="2x" icon={icon} />
}));

export const soarEmail = 'soar.chairs@gmail.com';

export const chairContacts = [
    {
        name: 'Sabrina Singh',
        email: 'sabrinasingh@hotmail.com'
    },
    {
        name: 'Aashna Jacob',
        email: 'aashnajacob@gmail.com'
    },
    {
        name: 'Rhea Nijjer',
        email: 'rheanijjer@gmail.com'
    }
]

export default socials;
