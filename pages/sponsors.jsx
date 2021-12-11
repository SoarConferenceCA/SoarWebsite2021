export default function Sponsors() {
    return (
        <div>
            <div className="mt-16 w-full grid grid-cols-1 place-items-center">
                <h1 className="text-4xl">
                    Our Sponsors!
                </h1>
                <p style={{maxWidth: '420px'}} className="mt-3 text-md text-center">
                    SOAR could not be possible without our sponsors. Lets build a brighter future together!
                </p>
            </div>

            <div className="my-12 px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2">
                <div className="px-4">
                    <h2 className="text-center text-2xl">
                        Intrested in a partnership?
                    </h2>
                    <p className="mt-3 text-md text-center">
                    Check out the document below to find out how you can benefit from a SOAR partnership!
                    </p>

                    <div className="mt-16 flex justify-center">
                        <button className="px-2 sm:px-4 py-2 sm:py-3 rounded border-2 border-gray-500 hover:border-primary font-bold text-gray-500 hover:text-primary">
                            Sponsorship 2022
                        </button>
                    </div>
                </div>

                <div className="mt-12 sm:mt-none">
                    <img src="/assets/unknown.png" className="rounded-lg max-w-full" />
                </div>
            </div>

            <div className="bg-accent mt-18 pb-22">
                <div className="py-6 mx-16">
                    <h3 className="text-white text-2xl">
                        Intrested in a partnership?
                    </h3>
                    <p className="mt-3 text-white text-md">
                        Meet some of the partnerships that have made SOAR possible in the past.
                    </p>
                </div>

                <div className="px-4 md:px-16 flex flex-wrap justify-center">
                    {
                        [...Array(26)].map( (_, idx) => (
                            <div className="m-3" style={{width: "110px"}} key={idx}>
                                <img src="/assets/unknown.png" className="block" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
