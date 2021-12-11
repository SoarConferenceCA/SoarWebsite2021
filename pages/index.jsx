import indexStyles from '../styles/index.module.css';
import Link from 'next/link';
import GalleryPreview from '../components/GalleryPreview';
import { preview } from "../data/gallerydata";
import { testimonials } from '../data/testimonials';
import BetterTestimonials from '../components/BetterTestimonials';
import BehindImageThing from '../components/BehindImageThing';

export default function Index() {
    return (
        <div>
            <div className="mt-4">
                <div className="bg-unknown bg-center h-ab10 sm:h-ab4 lg:h-ab10">
                    <div className="px-3 sm:px-8 lg:px-20 text-white h-full grid place-items-start">
                        <div className="py-20 h-full grid grid-cols-1 place-content-between">
                            <div>
                                <div className="text-6xl">
                                    <h1>SOAR</h1>
                                    <h1>Conference 2022</h1>
                                </div>
                                <h4 className="mt-2 text-lg">
                                    Inspiring the leaders of tomorrow
                                </h4>
                            </div>
                            <div className="mt-8 grid-cols-2 text-md">
                                <button className="mt-2 mr-2 px-2 sm:px-4 py-2 sm:py-3 rounded border-2 border-primary bg-red-50 hover:bg-red-100 text-primary font-bold">
                                    Register for SOAR 2022
                                </button>

                                <button className="mt-2 sm:ml-4 px-2 sm:px-4 py-2 sm:py-3 rounded border-2 border-primary bg-red-50 hover:bg-red-100 text-primary font-bold">
                                    Volunteer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-18">
                <div className="m-6 p-7 bg-white rounded-md shadow-md">
                    <div className="px-4 grid grid-cols-1 md:grid-cols-2">
                        <div className="py-16">
                            <h2 className="text-2xl">
                                What is SOAR?
                            </h2>

                            <p className="mt-3 font-light text-md">
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

                        <img className="min-h-320 w-full h-full" src="/assets/unknown.png" />
                    </div>
                </div>
            </div>

            <div className="w-full my-16">
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                        <h2 className="font-bold text-primary text-4xl">
                            The SOAR Gallery
                        </h2>

                        <button className="mt-6 sm:mt-auto p-2 bg-transparent hover:bg-gray-50 text-primary font-bold text-lg border-2 border-primary hover:border-red-600">
                            <Link href="/gallery">
                                View All Photos
                            </Link>
                        </button>
                    </div>
                </div>

                <GalleryPreview previews={preview} />
            </div>

            <div className="my-18 px-8 lg:px-12">
                <BetterTestimonials testimonials={testimonials} />
            </div>

            <div className="w-full mb-24">

                <div className="px-4 grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <div className="flex grid grid-cols-1 sm:grid-cols-2 place-items-center sm:place-items-start">
                            <div className="h-full grid place-items-center">
                                <h3 className="text-light text-2xl text-black">
                                    Ready to SOAR with us?
                                </h3>
                            </div>
                            

                            <button className="mt-6 sm:mt-auto ml-2 p-2 bg-transparent hover:bg-gray-50 text-primary font-bold text-lg border-2 border-primary hover:border-red-600">
                                Apply Now
                            </button>

                            <div className={`my-6 ${indexStyles['path-holder']}`}>
                                <div className="max-w-w360">
                                    <div className="flex justify-start">
                                        <div className="h-full">
                                            <div className={`${indexStyles['circle-path']}`} />
                                        </div>
                                        <span className="ml-4 text-lg text-black">1. Fill and submit your application forms</span>
                                    </div>

                                    <div className="h-8" />

                                    <div className="flex justify-start">
                                        <div className="h-full">
                                            <div className={`mt-auto ${indexStyles['circle-path']}`} />
                                        </div>
                                        <span className="ml-4 text-lg text-black">2. Get ready to have the time of your life and sneak peak into the highschool experience!</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="max-h-full md:max-h-h440 lg:max-h-full w-full">
                        <BehindImageThing direction="right">
                            <div className="w-4/5 h-4/5 absolute bottom-0 left-0">
                                <img src="/assets/unknown.png" className="absolute bottom-0 left-0" />
                            </div>
                        </BehindImageThing>
                        {/* <div className="w-full h-full px-4 flex">
                            <BehindImageThing direction="right" />

                            <div className="relative w-full h-full -ml-100">
                                <div className="w-4/5 h-4/5 absolute bottom-0 left-0">
                                    <img src="/assets/unknown.png" className="absolute bottom-0 left-0" />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

            </div>

        </div>
    );
}
