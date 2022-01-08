import { links } from '../components/socials';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { soarEmail, chairContacts } from '../components/socials';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <div>
            <div className="mt-24 mb-20 mx-3 md:mx-12">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <h1 className="text-4xl font-bold text-black">
                            Key Contacts
                        </h1>

                        <h5 className="mt-4 text-2xl text-gray-700">
                            General Inquiry?
                        </h5>
                        <h5 className="mt-2 text-xl text-gray-600">
                            Email us at {soarEmail}
                        </h5>

                        <div className="mt-6">
                            <h2 className="text-3xl font-bold text-gray-500">
                                Contacting Our Chairs
                            </h2>

                            <div className="mt-8 max-w-w370">
                                {
                                    chairContacts.map( (chair, idx) => (
                                        <div key={idx} className="m-4 group text-gray-600 cursor-text">
                                            <div className="flex items-center">
                                                <span style={{width: '24px', height: '24px'}} className="inline-block rounded-full bg-primary-dull"></span>

                                                <span className="mx-4 text-lg">
                                                    {chair.name}: {chair.email}
                                                </span>

                                                <span className="flex flex-1"></span>

                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="mt-6 max-w-w280">
                                <p className="text-md text-gray-500">
                                    Prefer to interact with a name and a face? Feel free to reach out personally to any of our team members.
                                </p>

                                <button className="mt-4 px-2 py-3 text-primary-dull font-bold hover:text-red-500 border-2 border-primary-dull hover:border-red-500">
                                    <Link href="/team">
                                        Meet the Team
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 md:mt-0">
                        <h1 className="text-4xl font-bold text-black">
                            Follow Our Social Media
                        </h1>

                        <div className="mt-8 max-w-w370">
                            {
                                links.map( ({ href, icon }, idx) => (
                                    <div className="m-4" key={idx}>
                                        <Link href={href}>
                                            <a className="align-middle group text-gray-600 hover:text-primary hover:font-bold" target="_blank">
                                                <div className="flex items-center">
                                                    <span style={{width: '24px', height: '24px'}} className="inline-block rounded-full bg-accent group-hover:bg-primary"></span>

                                                    <span className="inline-block align-middle mx-4 text-lg">
                                                        {href}
                                                    </span>

                                                    <span className="flex flex-1"></span>

                                                    <FontAwesomeIcon icon={icon} />
                                                </div>
                                                
                                            </a>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>

                        <img src="/assets/previews/2019_picture_32.jpg" className="w-full mt-10 rounded-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}
