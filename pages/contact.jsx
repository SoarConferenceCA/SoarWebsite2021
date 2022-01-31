import { links } from '../components/socials';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { soarEmail, chairContacts } from '../components/socials';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../components/NavBar';
import grads from '../styles/grads.module.css';

export default function Contact({ links: navLinks }) {
    return (
        <div>
            <NavBar links={navLinks}>
                <div className={`h-full pt-24 pb-20 px-3 md:px-12 ${grads.dblueDGreen75}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="px-12 md:px-0">
                            <h1 className="text-6xl font-bold font-fat text-black">
                                Key Contacts
                            </h1>

                            <h5 className="mt-4 text-4xl font-lato font-bold text-gray-700">
                                General Inquiry?
                            </h5>
                            <h5 className="mt-2 text-xl font-spar font-bold text-gray-600">
                                Email us at {soarEmail}
                            </h5>

                            <div className="mt-6">
                                <h2 className="text-3xl font-bold font-lato text-gray-500">
                                    Contacting Our Chairs
                                </h2>

                                <div className="mt-8 max-w-w420 font-spar">
                                    {
                                        chairContacts.map( (chair, idx) => (
                                            <div key={idx} className="m-4 group text-gray-600 cursor-text">
                                                <div className="flex items-center">
                                                    <span style={{width: '24px', height: '24px'}} className="inline-block rounded-full bg-accent"></span>

                                                    <span className="mx-4 text-md font-bold">
                                                        {chair.name}: {chair.email}
                                                    </span>

                                                    <span className="flex flex-1"></span>

                                                    <FontAwesomeIcon icon={faEnvelope} />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                
                                <div className="mt-12">
                                    <div className="mt-6 max-w-w280 flex flex-col">
                                        <p className="font-nun text-lg font-bold text-gray-700">
                                            Prefer to interact with a name and a face? Feel free to reach out personally to any of our team members.
                                        </p>

                                        <button className="mt-4 px-2 py-3 text-black font-bold border-2 border-black transform transition duration-200 hover:scale-150 ">
                                            <Link href="/team">
                                                Meet the Team
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="mt-24 md:mt-0">
                            <h1 className="px-12 md:px-0 text-4xl font-bold font-fat text-black">
                                Follow Our Social Media
                            </h1>

                            <div className="mx-12 md:mx-0 mt-8 max-w-w370">
                                {
                                    links.map( ({ title, href, icon }, idx) => (
                                        <div className="m-4" key={idx}>
                                            <Link href={href}>
                                                <a className="align-middle group text-gray-600 hover:text-primary hover:font-bold" target="_blank">
                                                    <div className="flex items-center">
                                                        <span style={{width: '24px', height: '24px'}} className="inline-block rounded-full bg-accent group-hover:bg-primary"></span>

                                                        <span className="inline-block align-middle mx-4 text-2xl font-lato font-bold">
                                                            {title}
                                                        </span>

                                                        <span className="flex flex-1"></span>

                                                        <FontAwesomeIcon icon={icon} size='2x' />
                                                    </div>
                                                    
                                                </a>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>

                            <img src="/assets/group_photo.jpg" className="w-full mt-10 rounded-2xl" />
                        </div>
                    </div>
                </div>
            </NavBar>
        </div>
    )
}
