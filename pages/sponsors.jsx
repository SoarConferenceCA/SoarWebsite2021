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

            <div className="my-12 px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 place-items-center">
                <div className="px-4">
                    <h2 className="text-center text-2xl">
                        Intrested in a partnership?
                    </h2>
                    <p className="mt-3 text-md text-center">
                        Sponsorship options coming soon.
                        {/* Check out the document below to find out how you can benefit from a SOAR partnership! */}
                    </p>

                    {/* <div className="mt-16 flex justify-center">
                        <button className="px-2 sm:px-4 py-2 sm:py-3 rounded border-2 border-gray-500 hover:border-primary font-bold text-gray-500 hover:text-primary">
                            Sponsorship 2022
                        </button>
                    </div> */}
                </div>

                <div className="mt-12 sm:mt-none">
                    <img src="/assets/previews/2018_picture_7.jpg" className="rounded-lg max-w-full" />
                </div>
            </div>
        </div>
    )
}
