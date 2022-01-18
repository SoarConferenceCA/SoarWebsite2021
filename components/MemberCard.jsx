import Link from 'next/link';

import { mediaTypes } from "../data/membersdata";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const mediaTypeToIcon = {};
mediaTypeToIcon[mediaTypes.EMAIL] = <FontAwesomeIcon size="2x" icon={faEnvelope} />;
mediaTypeToIcon[mediaTypes.TWITTER] = <FontAwesomeIcon size="2x" icon={faTwitter} />;
mediaTypeToIcon[mediaTypes.FACEBOOK] = <FontAwesomeIcon size="2x" icon={faFacebook} />;
mediaTypeToIcon[mediaTypes.INSTAGRAM] = <FontAwesomeIcon size="2x" icon={faInstagram} />;
mediaTypeToIcon[mediaTypes.GITHUB] = <FontAwesomeIcon size="2x" icon={faGithub} />;
mediaTypeToIcon[mediaTypes.YOUTUBE] = <FontAwesomeIcon size="2x" icon={faYoutube} />;


export default function MemberCard({ member }) {
    return (
        <div style={{width: '310px', height: '400px'}} className="p-6">
            <div className="bg-white shadow rounded-md w-full h-full">
                <div className="flex flex-row flex-wrap h-full">
                    <div className="w-full flex">
                        <div className="relative w-full h-full">
                            <img src={member.image} className="block rounded-md w-full h-full" />
                        </div>

                        <div className="relative w-full -ml-100">
                            <div className="absolute bottom-0 right-0">
                                <div style={{top: '25px'}} className={`relative px-1 bg-accent-no-alpha mr-4 mt-2 grid grid-cols-${member.socials.length}`}>
                                    {
                                        member.socials.map( ({ type, link }, idx) => (
                                            <div key={idx} className="p-2">
                                                <Link href={link}>
                                                    <a className="text-white hover:text-primary-no-alpha" target="_blank">
                                                        {mediaTypeToIcon[type]}
                                                    </a>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* <div className="flex justify-center w-full">
                        <img src={member.image} className="rounded-md w-full h-full" />
                    </div> */}
                    
                    <h3 className="w-full text-xl mt-8 ml-4 font-bold font-libre">
                        {`${member.firstname} ${member.lastname}`}
                    </h3>
                    <div className="w-full mb-2 flex-auto">
                        <p className="text-gray-500 ml-4">
                            {member.position}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
