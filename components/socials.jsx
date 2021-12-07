import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const links = [
    { href: "https://www.facebook.com", icon: faFacebook },
    { href: "https://www.instagram.com", icon: faInstagram },
    { href: "https://www.twitter.com", icon: faTwitter },
    { href: "https://www.youtube.com", icon: faYoutube }
]

const socials = links.map( ({ href, icon }) => ({
    href,
    icon: <FontAwesomeIcon size="2x" icon={icon} />
}));

export const soarEmail = 'soar.chairs@gmail.com';

export const chairContacts = [
    {
        name: 'Sabrina Singh',
        email: 'some@email.com'
    },
    {
        name: 'Aashna Jacob',
        email: 'some@email.com'
    },
    {
        name: 'Rhea Nijjer',
        email: 'some@email.com'
    }
]

export default socials;
