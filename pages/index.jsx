import indexStyles from '../styles/index.module.css';
import Link from 'next/link';
import GalleryPreview from '../components/GalleryPreview';
import { preview } from "../data/gallerydata";
import { testimonials } from '../data/testimonials';
import BetterTestimonials from '../components/BetterTestimonials';
import NavBar from '../components/NavBar';

export default function Index({ links }) {
    const mainBlock = (
        <div className={`w-full h-full bg-si-dyellow ${indexStyles.redYellow}`}>
            <div className="mt-4 md:mt-0">
                <div className="bg-superfun bg-center bg-cover">
                    <div className="w-full h-full bg-opaquish">
                        <div className="px-3 sm:px-8 lg:px-20 text-white h-full grid place-items-start">
                            <div className="py-20 h-full grid grid-cols-1 place-content-between">
                                <div>
                                    <div className="text-8xl font-bold font-fat">
                                        <h1>SOAR</h1>
                                        <h1>Conference 2022</h1>
                                    </div>
                                    <h4 className="mt-2 text-3xl font-bold font-nun">
                                        Inspiring the leaders of tomorrow
                                    </h4>
                                </div>
                                <div className="mt-8 grid-cols-2 text-md">
                                    <Link href="/apply">
                                        <button className="mt-2 mr-2 px-2 sm:px-4 py-2 sm:py-3 rounded border-2 border-primary bg-red-50 hover:bg-red-100 text-primary font-bold">
                                            Register for SOAR 2022
                                        </button>
                                    </Link>

                                    <Link href="/apply">
                                        <button className="mt-2 sm:ml-4 px-2 sm:px-4 py-2 sm:py-3 rounded border-2 border-primary bg-red-50 hover:bg-red-100 text-primary font-bold">
                                            Volunteer
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="m-6 p-7 bg-si-worange rounded-md shadow-md">
                    <div className="px-4 grid grid-cols-1 md:grid-cols-2 space-x-2">
                        <div className="py-16">
                            <h2 className="text-2xl font-ara">
                                What is SOAR?
                            </h2>

                            <p className="mt-3 font-light text-md font-lato">
                                The SOAR Conference aims to ease students’
                                transitions from middle school to high school
                                through various workshops and activities.
                                We equip students with the necessary skills
                                to succeed in high school, developing their
                                collaboration skills and leadership ability and
                                ultimately instilling in them a sense of optimism
                                and confidence about high school.
                            </p>
                        </div>

                        <img className="min-h-320 w-full h-full" src="/assets/previews/2019_picture_7.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <NavBar links={links}>
                { mainBlock }
            </NavBar>

            <main className="">

                <div className={`w-full h-full ${indexStyles.beigeGreen}`}>
                    <div className="w-full py-16 flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="mt-20">
                                <div className="grid place-items-center space-y-2">
                                    <h2 className="font-bold text-black text-4xl font-int">
                                        The SOAR Gallery
                                    </h2>

                                    <button className="mt-6 sm:mt-auto p-2 bg-transparent text-black font-bold text-lg border-2 border-black transform transition duration-200 hover:scale-125">
                                        <Link href="/gallery">
                                            View All Photos
                                        </Link>
                                    </button>
                                </div>
                            </div>

                            <GalleryPreview previews={preview} />
                        </div>
                    </div>
                </div>

{/* 
                <div className="grid grid-cols-2">
                    <div className={`${indexStyles.greenBlueDiaGradient}`} style={{ height: "10px" }} />

                    <div className={`${indexStyles.greenBlueTopGradient}`} style={{ height: "10px" }} />
                </div> */}

                

                <div className={`w-full bg-si-green`}>
                    
                    <div className="my-18">
                        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 space-x-8">
                            <div className="flex justify-center m-8">
                                <div className="w-8/12 md:w-full md:mx-4 grid place-items-center">
                                    <img src="/assets/previews/2018_picture_11.jpg" className="max-w-full max-h-full filter drop-shadow-pink-tl" />
                                </div>
                            </div>

                            <div className="px-8 xl:pl-12 xl:pr-8 h-full bg-si-oblue">
                                <BetterTestimonials testimonials={testimonials} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-si-dpurple">

                    <div className="px-12 grid grid-cols-1 py-20 md:grid-cols-2">
                        <div>
                            <div className="flex grid grid-cols-1 sm:grid-cols-2 place-items-center sm:place-items-start">
                                <div className="h-full grid place-items-center">
                                    <h3 className="text-light text-2xl text-si-bgrey font-bold">
                                        Ready to SOAR with us?
                                    </h3>
                                </div>
                                
                                <Link href='/apply'>
                                    <a className="mt-6 sm:mt-auto ml-2 p-2 cursor-pointer text-si-bgrey font-bold text-lg border-2 border-si-bgrey transition duration-200 transform hover:scale-125">
                                        Apply Now
                                    </a>
                                </Link>

                                <div className={`my-6`}>
                                    <div className="max-w-w360 font-nun">
                                        <div className={`flex justify-start ${indexStyles.pinkLine}`}>
                                            <div className="h-full">
                                                <div className={`${indexStyles['circle-path']}`} />
                                            </div>
                                            <span className="ml-4 text-lg text-black">1. Fill and submit your application forms</span>
                                        </div>

                                        <div className={`h-8 ${indexStyles.pinkLine}`} />

                                        <div className="flex justify-start">
                                            <div className="h-full">
                                                <div className={`mt-auto ${indexStyles.pinkLine} ${indexStyles['circle-path']}`} />
                                            </div>
                                            <span className="ml-4 text-lg text-black">2. Get ready to have the time of your life and sneak peak into the highschool experience!</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-8/12 md:w-full md:mx-4 grid place-items-center">
                                <img src="/assets/previews/2017_picture_9.jpg" className="max-w-full max-h-full filter drop-shadow-green-tr" />
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
