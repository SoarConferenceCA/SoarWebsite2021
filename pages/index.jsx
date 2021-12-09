import indexStyles from '../styles/index.module.css';

export default function Index() {
    return (
        <div>
            {/*  */}
            <div className="mt-4">
                <div className="bg-unknown bg-center h-ab10 sm:h-ab4 lg:h-ab10">
                    <div className="px-3 sm:px-8 lg:px-20 text-white h-full grid place-items-start">
                        <div className="py-20 h-full grid grid-cols-1 place-content-between">
                            <div>
                                <div className="text-6xl">
                                    <h1>SOAR</h1>
                                    <h1>Conference 2022</h1>
                                </div>
                                <h4 className="text-lg">
                                    Inspiring the leaders of tomorrow
                                </h4>
                            </div>
                            <div className="mt-8 grid-cols-2 text-md">
                                <button className="mt-2 mr-2 px-2 sm:px-4 py-2 sm:py-3 rounded border-2 border-red-700 bg-red-50 hover:bg-red-100 text-red-500 font-bold">
                                    Register for SOAR 2022
                                </button>

                                <button className="mt-2 sm:ml-4 px-2 sm:px-4 py-2 sm:py-3 rounded border-2 border-white hover:border-red-200 bg-transparent hover:bg-red-900 text-white font-bold">
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
                        <h2 className="font-bold text-pale-pink text-4xl">
                            The SOAR Gallery
                        </h2>

                        <button className="mt-6 sm:mt-auto p-2 bg-transparent hover:bg-gray-50 text-pale-pink font-bold text-lg border-2 border-pale-pink hover:border-red-600">
                            View All Photos
                        </button>
                    </div>
                </div>

                {/* Slider Here */}
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
                            

                            <button className="mt-6 sm:mt-auto ml-2 p-2 bg-transparent hover:bg-gray-50 text-pale-pink font-bold text-lg border-2 border-pale-pink hover:border-red-600">
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
                        <div className="w-full h-full px-4 flex">
                            <div className="relative w-full h-full">
                                <div className="absolute w-10/12 h-2/3 max-h-h320 top-35 right-0 bg-odd-green" />
                            </div>

                            <div className="relative w-full h-full -ml-100">
                                <svg width="100%" height="100%" viewBox="0 0 441 353" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M-1 97.5L157.5 1L285.5 217L432.5 119" stroke="#8FB5Af"/>
                                    <path d="M0 139L146.5 55L276.5 281L440 159.5" stroke="#DD7766" strokeOpacity="0.6"/>
                                    <path d="M0 180L132.5 103L259.5 352L440 213.5" stroke="#DD7766" strokeOpacity="0.4"/>
                                </svg>
                            </div>

                            <div className="relative w-full h-full -ml-100">
                                {/* <img src="/assets/unknown.png" alt="" className="block max-w-4/5 max-h-4/5 absolute bottom-0 left-0" /> */}
                                <div className="w-4/5 h-4/5 absolute bottom-0 left-0">
                                    <img src="/assets/unknown.png" className="absolute bottom-0 left-0" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="w-full h-full px-4 relative flex justify-center">
                        <div className="relative top-0 z-0 w-full h-full">

                        </div>
                        <div className="relative w-full h-full z-10">
                            <svg width="100%" height="100%" viewBox="0 0 441 353" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-1 97.5L157.5 1L285.5 217L432.5 119" stroke="#8FB0A9"/>
                                <path d="M0 139L146.5 55L276.5 281L440 159.5" stroke="#DD7766" stroke-opacity="0.6"/>
                                <path d="M0 180L132.5 103L259.5 352L440 213.5" stroke="#DD7766" stroke-opacity="0.4"/>
                            </svg>
                        </div>
                    </div> */}
                </div>

            </div>

        </div>
    );
}
