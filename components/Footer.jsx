import Link from 'next/link';
import footerStyles from '../styles/footer.module.css'

export default function Footer({ links, socials }) {
    return (
        <footer>
            <div className="bg-si-beiger text-black p-5 font-serif">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    <div className="p-3 grid">
                        <div className="p-3 h-full">
                            <div className="w-full">
                                <div className="w-full grid place-items-center">
                                    <h5 className="text-lg font-bold">
                                        Address
                                    </h5>
                                </div>
                                <hr className={footerStyles.blackhr} />
                            </div>

                            <div className="mt-2">
                                <p>7935 Kennedy Road South</p>
                                <p>Brampton, Ontario</p>
                                <p>L6W 0A2, Canada</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 h-full">
                        <div className="w-full grid place-items-center">
                            <h5 className="text-lg font-bold">
                                Get In Touch
                            </h5>
                        </div>

                        <hr className={footerStyles.blackhr} />

                        <div className="mt-2 px-5 flex-auto">
                            <div>
                                <div className="flex justify-center my-4 text-lg flex-wrap">
                                    <p>soar.chairs@gmail.com</p>
                                </div>

                                <div className="flex justify-center">
                                    {
                                        socials.map( ({ href, icon }, idx) => (
                                            <Link key={idx} href={href}>
                                                <a className="my-2 mx-4" target="_blank">
                                                    {icon}
                                                </a>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 col-auto md:col-span-2 lg:col-auto">
                        <div className="w-full grid place-items-center">
                            <h5 className="text-lg font-bold">
                                Useful Links
                            </h5>
                            <hr className={footerStyles.blackhr} />
                        </div>

                        <div className="mt-2 grid grid-cols-2 md:grid-cols-6 lg:grid-cols-1">
                            {
                                links.map( ({ title, href }, idx) => (
                                    <div key={idx} className="my-2">
                                        <Link href={href}>
                                            <a target="_blank">{title}</a>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
